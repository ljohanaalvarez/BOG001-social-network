import { createPublicationsPage } from './createpublications.js';
import {footer} from './footer.js';
import {header} from './headerViews.js';
import {getPosts} from '../functionsFirebase.js';

export const publicationsPage = () =>{
    /*const viewPublications = 
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

    
    const postContainer = newDivThree.querySelector("#post-container");
    
    
    
    return newDivThree;*/


    const createEvent  = (eventPost) => { 
        const event = `
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
                    <p id = "commentaryP"></p>
                </div>
                <div>
                    <button type="submit" class = "button btnDelete" data-id = >Borrar</button>
                    <button type="submit" class = "button btnEdit">Editar</button>
                </div>
            </div>` 

            const containerEvent = document.createElement("article");
            conatinerEvent.innerHTML = event;  

            return containerEvent;
            
            
        } 

    const printPost = async() => {
        const totalContainer = document.createElement("section");

        const querySnapshot = await getPosts()
        querySnapshot.forEach(doc => { 
            const dataPost = doc.data();
            totalContainer.insertAdjacentElement("beforeend", createEvent(event) )
            
            dataPost.id = doc.id;
        })    
    }  
    printPost();    
    
   
    
}








