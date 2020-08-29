import {footer} from './footer.js';
import {header} from './headerViews.js';
import {deletePost} from '../functionsFirebase.js'; 
import {onGetPosts} from '../functionsFirebase.js';
import {editPosts} from '../functionsFirebase.js';

export const publicationsPage = () =>{
    const viewPublications = 
    `${header}
        <main class="mainBackgroundContainer">
        <div>
            <h2>Publicaciones</h2>
        </div>
        <div id= "post-container">
        </div>
        <div class = "mainBackground"></div> 
    </main>
    ${footer}`;

    const newDivThree = document.createElement('div');
    newDivThree.innerHTML = viewPublications;

    const closeSesion = newDivThree.querySelector(".close-sesion");
    closeSesion.addEventListener("click", (e) => {e.preventDefault();

        auth.signOut()
        .then( () => { 
            console.log("sesión cerrada");
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
                            <button type="submit" class = "button btnEdit" data-id = ${dataPost.id}>Editar</button>
                        </div>
                    </div>` 

                const btnDelete = newDivThree.querySelectorAll(".btnDelete");
                const btnEdit = newDivThree.querySelectorAll(".btnEdit");
        
                btnDelete.forEach(btn => {
                    btn.addEventListener("click", async (e) =>{ 
                        await deletePost(e.target.dataset.id);
                    });
                })
                //Pendiente funcion editar
                btnEdit.forEach(btn => {
                    btn.addEventListener("click", async (e) =>{ 
                       const doc = await editPosts(e.target.dataset.id);
                       console.log(doc.data());
                    });

                })
            })
            
        }))
    }
    printPost();

    return newDivThree;
}