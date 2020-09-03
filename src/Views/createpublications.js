import {footer} from './footer.js'
import {header} from './headerViews.js'
import {savePost} from '../functionsFirebase.js'
import {userId} from '../functionsFirebase.js'


export const createPublicationsPage = () =>{
    const viewCreatePlublications = 
        `${header}
        <main class="mainBackgroundContainer">
            <div>
                <h2>Crear Publicaciones</h2>
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
        </main>
        ${footer}`;

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
            await savePost(commitForm.value , userId);
            postForm.reset();
            commitForm.focus();
        })

    return newDivFour;
}


     



    
