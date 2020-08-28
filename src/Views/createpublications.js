import { myPublicationsPage } from './mypublications.js';

export const createPublicationsPage = () =>{
    const viewCreatePlublications = `
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
                <h2>Crear Publicaciones</h2>
            </div>
                <div class = "mainBackground"></div> 
                <div class="bigContainer">
                <div class="containerPost">
                    <form id="postForm">
                        <div class="containerUser">
                            <div>
                                <img src="./imagenes/usuario.png" alt="incono de usuario" class= "userIcon">
                            </div>
                            <div>
                                <h3 id="userPost">Marcela González</h3>
                            </div>
                        </div>         
                        <div>
                            <textarea id="commitForm" cols="40" wrap= hard rows="7" maxlength="250" required></textarea>
                        </div>
                        <label class = "containerButton2">
                            <button type="submit" id="btnLogin" class = "button">Publicar</button>
                        </label>
                    </form>
                </div>
            </div>
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

    /*const postForm = newDivFour.querySelector("#postForm");
    
    // exportar funcion a otra view
    export const savePost = {
        createPost:  (commitForm) =>
        fs.collection('posts').doc().set({
        commitForm
    })}
    
    

    const getPosts = () => fs.collection('posts').get();

    postForm.addEventListener('submit', async (e) => {e.preventDefault();
       const querySnapshot = await getPosts()
       querySnapshot.forEach(doc=> {
        console.log(doc.data()); 
       });
       
    })

    postForm.addEventListener("submit", async (e) => {e.preventDefault(); 
        console.log("enviando");
        const commitForm = postForm['commitForm'];

        await createPost(commitForm.value);
       
        postForm.reset();
        commitForm.focus();
    })*/

    return newDivFour;n
}