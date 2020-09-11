import {footer} from './footer.js';
import {header} from './headerViews.js';
import {deletePost,onGetPosts,getPosts,upDatePosts,userId} from '../functionsFirebase.js'; 

// Operador Ternario: antes del signo pregunta se coloca la condición, luego del signo pregunta lo que va a retornar si se cumple la condición
//después de los dos puntos lo que retorna si no se cumple la condición.

function userOptions(dataPost) {
    return userId !== dataPost.userId ? '':
    `<button type="submit" class = "button  btnDelete " data-id = ${dataPost.id}>Borrar</button>
      <button type="submit" class = "button btnEdit " data-id = ${dataPost.id}>Editar</button>`;
}

export const publicationsPage = () =>{
    const viewPublications = 
    `${header}       
    <main class="mainBackgroundContainer">       
        <h2>Publicaciones</h2>
        <div class="containerEdit" id = "containerEdit" >
        </div>
        <div id= "post-container">
        </div>  
    </main>        
    ${footer}`;

    const newDivThree = document.createElement('div');
    newDivThree.innerHTML = viewPublications;

    //Cerrar sesión de usuario

    const closeSesion = newDivThree.querySelector(".close-sesion");
    closeSesion.addEventListener("click", (e) => {
        e.preventDefault();

        auth.signOut()
        .then( () => { 
            window.location.href="#/home"
        })
    });

    const containerEvent = newDivThree.querySelector("#post-container");

    const printPost = async() => {
        onGetPosts((querySnapshot => {
            containerEvent.innerHTML =""
            querySnapshot.forEach( doc => { 
                const dataPost = doc.data();
                dataPost.id = doc.id;
                
                const users= dataPost.users;
                let iconLikesWhite='';
                let IconLikesGreen='';
                if(users.includes(userId)){
                    IconLikesGreen = `<span id="like"><i class="fas fa-thumbs-up likeGreen" data-id = ${dataPost.id}>${dataPost.likes}</i>  </span>`
                    
                }else{
                    iconLikesWhite =`<span id="like"><i class="fas fa-thumbs-up likeWhite" data-id = ${dataPost.id}>${dataPost.likes}</i>  </span>`
                } 
                containerEvent.innerHTML += `
                    <div class = "containerPostFinal"> 
                        <div>
                            <img src="./imagenes/usuario.png" alt="incono de usuario" class= "userIcon">
                        </div>
                        <div>
                            <h3 id="userPost">${dataPost.name}</h3>
                        </div> 
                        <div class = "containerCommentary">
                            <p id = "commentaryP">${dataPost.commitForm}</p>
                        </div>
                        <div>
                            ${IconLikesGreen}${iconLikesWhite}                            
                        </div>                
                        <div class="myBtnPost">
                        ${userOptions(dataPost)}                        
                        </div>
                    </div>`                    
                                                          
                const btnDelete = newDivThree.querySelectorAll(".btnDelete");
                const btnEdit = newDivThree.querySelectorAll(".btnEdit");
                const countBtnLike = newDivThree.querySelectorAll(".likeWhite"); 
                const countBtnRemoveLike = newDivThree.querySelectorAll(".likeGreen"); 
                console.log(countBtnLike)                  
                
                countBtnLike.forEach(hand => {

                    hand.addEventListener("click", (e) => {
                        let users = dataPost.users;
                        let likes = dataPost.likes;
                        let id = e.target.dataset.id;
                        users.push(userId);                        
                        e.target.classList.remove('likeWhite');
                        e.target.classList.add('likeGreen');
                        e.target.textContent = ++likes;
                        upDatePosts(id,{likes, users});                          
                    })  
                })
                //RemoveLike
                
                countBtnRemoveLike.forEach(hand => {

                    hand.addEventListener("click", (e) => {
                        let users = dataPost.users;
                        let likes = dataPost.likes;
                        let id = e.target.dataset.id;
                        e.target.textContent = --likes;
                        e.target.classList.remove('likeGreen');
                        e.target.classList.add('likeWhite');
                        let findPosition = users.indexOf(userId);
                        if(findPosition > -1){
                            users.splice(findPosition, 1);
                        }
                        upDatePosts(id,{likes, users});                          
                    })  
                })

                //Funcion borrar

                btnDelete.forEach(btn => {
                    btn.addEventListener("click", async (e) =>{ 
                        await deletePost(e.target.dataset.id);
                    });
                })               

                //Funcion editar

                btnEdit.forEach(btn => {
                    btn.addEventListener("click", async (e) =>{ 
                       const doc = await getPosts(e.target.dataset.id);
                       console.log(e.target.dataset.id);
                       let id = e.target.dataset.id;
                       const containerEdit = newDivThree.querySelector("#containerEdit");
                       containerEdit.innerHTML =`
                       <div class="containerPost">
                            <form id="postForm">
                                <div class="containerUser">
                                    <div>
                                        <img src="./imagenes/usuario.png" alt="incono de usuario" class= "userIcon">
                                    </div>

                                    <div>
                                        <h3 id="userPost"></h3>
                                    </div>
                                </div>         
                                <div>
                                    <textarea id="commitForm" cols="40" wrap= hard rows="5" maxlength="240" required 
                                    placeholder = "Máximo 240 carácteres incluidos espacios"></textarea>
                                </div>
                                <label class = "containerButton2">
                                    <button type="submit" id="btnEdit" class = "button">Editar</button>
                                </label>
                            </form>
                        </div>` 
                         
                        const postForm = newDivThree.querySelector("#postForm");
                        postForm['commitForm'].value = doc.data().commitForm 

                        postForm.addEventListener('submit', async (e) => {e.preventDefault();
                            await upDatePosts( id, {commitForm: commitForm.value });
                            containerEdit.innerHTML ='';
                        }) 
                    });                   
                })
            })            
        }))
    }

    printPost();
    
    return newDivThree;
}



