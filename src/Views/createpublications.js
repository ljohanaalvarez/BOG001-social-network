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
    return newDivFour;
}