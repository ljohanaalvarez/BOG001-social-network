import { createPublicationsPage } from './createpublications.js';

export const myPublicationsPage = () =>{
    const viewMyPlublications = `
        <header class="headerWellcome">
            <div class="containerLogo">
                <img src="./imagenes/kallpaLogo.svg" class="logo">
            </div>
            <nav>
            <ul class = "navPages">
                <li><a href="#/publicaciones">Publicaciones</a></li>
                <li><a href="#/mispublicaciones">Mis Publicaciones</a></li>
                <li><a href="#/crearpublicacion">Crear Publicación</a></li>
                <li><a class = "close-sesion" href="#/cerrarSesion">Cerrar Sesión</a></li>
            </ul>
            </nav>
        </header>
        <main class="mainBackgroundContainer">
        <div>
            <h2>Mis Publicaciones</h2>
        </div>
        <div id= "post-container">
        </div>
        <div class = "mainBackground"></div> 
    </main>
        <footer>
            <div class="contentFooter">
            <div class = "logoFooter"><img src="./imagenes/logo-solo.png" alt="">
                </div>
                <div class="copyright">
                    <p>Contáctenos: e-mail:  usuarios@kallpa.com</p>
                    <p>© 2020 - kallpa.com</p>
                </div> 
            </div>
        </footer>
    `;

    const newDivThree = document.createElement('div');
    newDivThree.innerHTML = viewMyPlublications;

    const closeSesion = newDivThree.querySelector(".close-sesion");
    closeSesion.addEventListener("click", (e) => {e.preventDefault();

        auth.signOut()
        .then( () => { 
            console.log("sesión cerrada");
            window.location.href="#/home"
        })
    });

    /*const postContainer = newDivThree.querySelector("#post-container");
// importar funcion para pintar en otra view
    if (savePost.createPost()) {
        postContainer.innerHTML += `<div>
        <p>${doc.data().commitForm}</p>
        </div>`
    }*/

    

    return newDivThree;
}