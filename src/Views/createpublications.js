import { publicationsPage } from './publications.js';
import {footer} from './footer.js'
import {header} from './headerViews.js'

export const createPublicationsPage = () =>{
    const viewCreatePlublications = 
        `${header}
        <main class="mainBackgroundContainer">
            <div>
                <h2>Crear Publicaciones</h2>
            </div>
                <div class = "mainBackground"> 
                </div> 
                    <div class="bigContainer">
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
                                    <textarea id="commitForm" cols="40" wrap= hard rows="5" maxlength="240" required placeholder = "Máximo 240 carácteres incluidos espacios"></textarea>
                                </div>
                                <label class = "containerButton2">
                                    <button type="submit" id="btnPublicar" class = "button">Publicar</button>
                                </label>
                            </form>
                            </div>            
                        </div>                     
                    </div>
            <div class="containerPublications">     
            </div>                 
        </main>
        ${footer} `;

        const newDivFour = document.createElement("div");
        newDivFour.innerHTML = viewCreatePlublications;

        const closeSesion = newDivFour.querySelector(".close-sesion");
        closeSesion.addEventListener("click", (e) => {e.preventDefault();

        auth.signOut()
        .then( () => { 
            console.log("sesión cerrada");
            window.location.href="#/home"
        })
    });

        const postForm = newDivFour.querySelector("#postForm");   
        postForm.addEventListener('submit', async (e) => {e.preventDefault();
            const commitForm = postForm['commitForm'];
            await savePost(commitForm.value);
            postForm.reset();
            commitForm.focus();
        })

    
    

    /*postForm.addEventListener('submit', async (e) => {e.preventDefault();
        const querySnapshot = await getPosts()
        querySnapshot.forEach(doc => { 
            const dataPost = doc.data();
            dataPost.id = doc.id;
        
            const containerUser = newDivFour.querySelector(".containerPublications");
           
           containerUser.innerHTML += `
            <div class = "containerPostFinal"> 
                <div>
                    <img src="./imagenes/usuario.png" alt="incono de usuario" class= "userIcon">
                </div>
                <div>
                    <h3 id="userPost"></h3>
                </div> 
                <div>
                    <span id = "like"></span>
                </div>
                <div class = "containerCommentary">
                    <p id = "commentaryP">${dataPost.commitForm}</p>
                </div>
                <div>
                    <button type="submit" class = "button btnDelete" data-id = ${dataPost.id}>Borrar</button>
                    <button type="submit" class = "button btnEdit">Editar</button>
                </div>
            </div>` 
        });

        
        
        const btnDelete = newDivFour.querySelector(".btnDelete");
        const btnEdit = newDivFour.querySelector(".btnEdit");

        
        btnDelete.addEventListener("click", async (e) =>{
                const idPost = e.target.dataset.id;
                await console,log (e.target.dataset.id);
                await console.log(idPost);
                await deletePost(idPost)
                
        })
    })
        
    

    
    });    */
     
    return newDivFour;
}

    
     



    
