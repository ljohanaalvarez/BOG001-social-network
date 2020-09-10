import {footer} from './footer.js';
import {header} from './headerViews.js';
import {deletePost,onGetPosts,getPosts,upDatePosts,userId} from '../functionsFirebase.js'; 

/*function conditionalUser(dataPost) {
    if (userId !== dataPost.userId) {
        return '';
    }
    return `
      <button type="submit" class = "button  btnDelete " data-id = ${dataPost.id}>Borrar</button>
      <button type="submit" class = "button btnEdit " data-id = ${dataPost.id}>Editar</button>
    `;
}*/

// Antes del signo pregunta se coloca la condición, luego del signo pregunta lo que va a retornar si se cumple la condición
//después de los dos puntos lo que retorna si no se cumple la condición.

function userOptions(dataPost) {
    return userId !== dataPost.userId ? '':
    `<button type="submit" class = "button  btnDelete " data-id = ${dataPost.id}>Borrar</button>
      <button type="submit" class = "button btnEdit " data-id = ${dataPost.id}>Editar</button>`;
}

const btnLikeWhite = `<img src="./imagenes/me-gusta1.png" alt="">`;
    
/*({afterRender: function replaceClass () {
    containerEvent.addEventListener("click", () => { 
        containerEvent.querySelector(".likeWhite").classList.replace("likeWhite", "likeGreen");
    })
}})*/

/*function replaceClass () {
    containerEvent.addEventListener("click", () => { 
        containerEvent.querySelector(".likeWhite").classList.replace("likeWhite", "likeGreen");
    })
}
replaceClass();*/


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
                            <span id="like" class="likeWhite">${btnLikeWhite}</span>
                            <p class="counterLikeWhite"></p>
                        </div>
                        <div class="myBtnPost">
                        ${userOptions(dataPost)}
                        </div>
                    </div>`  
                    
               
                const btnDelete = newDivThree.querySelectorAll(".btnDelete");
                const btnEdit = newDivThree.querySelectorAll(".btnEdit");
                
                const countBtnLike = newDivThree.querySelector(".likeWhite");
                const counterLikeWhite = newDivThree.querySelector(".counterLikeWhite");
                let count = 0;
                countBtnLike.addEventListener("click", () => {
                        count += 1;
                        counterLikeWhite.innerHTML = "like" + count;
                    }
                );

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



