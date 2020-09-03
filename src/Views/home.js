import { router } from '../FunctionRouter/routers.js';
import{footer} from './footer.js';
import {saveUser} from '../functionsFirebase.js'



export const createWellcomePage = () =>{
    const wellcome = `
        <header class="headerHome">
            <div class="containerLogo"><img src="./imagenes/kallpaLogo.svg" class="logo">
            </div>
            <nav class= "navHome"></nav>
        </header>
        <section class = "homePage">
            <div id="containerImage">
                <div id="textKallpa">
                    <p>Kallpa te da la bienvenida, en ésta red social podrás encontrar 
                        opciones de actividades extremas y al aire libre y podrás 
                        compartir tus experiencias en nuestra comunidad.
                    </p>
                </div>
            </div>
            <div  class="containerLogIn">
                <span>Iniciar sesión</span>
                <div class = "containerForm">
                    <form id="formLogin" class= "formHome">
                        <label class = "label">Correo electrónico <input type="email" id="email-login" required>
                        </label>
                        <label class = "label">Contraseña<input type="password" id="password-login" minlength="6" required>
                        </label>
                        <label class = "containerButton">
                            <button type="submit" id="btnLogin" class = "button">Enviar</button>
                        </label>
                        <p id = "dont-registry"></p>
                    </form>
                </div>
                <div class = "link"><p><a href="" id= "linkRegistry">Registrarse</a></p></div>
            </div>
            <div class="containerLogIn" id = "containerLogUp" >
                <span id = "spanLogUp">Registrarse</span>
                <div class = "containerFormLogUp">
                    <form id="formRegistry" class= "formHome">  
                        <label class = "label">Nombre completo<input type="text" id="name-registry" required>       
                        </label>
                        <label class = "label">Correo electrónico<input type="email" id="email-registry" required>
                        </label>
                        <label class = "label">Contraseña<input type="password" id="password-registry" minlength="6" required>
                        </label>
                        <label class = "containerButton">
                            <button type="submit" id=btnRegistry class = "button">Enviar</button>
                        </label>
                        <p id="alreadyRegistry"></p>
                        
                    </form>
                </div>
                <div class = "link"><p><a href="" id= "linkLogin">Iniciar sesión</a></p></div>
            </div>
        </section>
        ${footer}`;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = wellcome;

    // Loguear usuario

    const formLogin = newDiv.querySelector("#formLogin");
    
    
    formLogin.addEventListener("submit", (e) => {e.preventDefault(); 

    const emailLogin = newDiv.querySelector("#email-login").value;
    const passwordLogin = newDiv.querySelector("#password-login").value;
    const dontRegistry = newDiv.querySelector("#dont-registry");

    console.log(emailLogin, passwordLogin);
    
    auth.signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then(userCredential =>  { 
        console.log(userCredential);
        //userId = userCredential.user.uid; 
        console.log("logueado");
        window.location.href="#/publicaciones"
    })
    .catch (err => {
        console.log(err);
        if (err.code === "auth/user-not-found"){
            dontRegistry.innerHTML = "Usuario no registrado, por favor regístrese";
        }
        if(err.code === "auth/wrong-password"){
            dontRegistry.innerHTML = "Contraseña incorrecta";
        }
    })
});

//Registrar usuario    
    
    const formRegistry = newDiv.querySelector("#formRegistry");

    formRegistry.addEventListener("submit", (e) => {e.preventDefault(); 

        const emailRegistry = newDiv.querySelector("#email-registry").value;
        const passwordRegistry = newDiv.querySelector("#password-registry").value;
        const alreadyRegistry = newDiv.querySelector("#alreadyRegistry");

        console.log(emailRegistry, passwordRegistry);

        auth.createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
        .then(userCredential => { 
            console.log("registrado");
            window.location.href="#/publicaciones"
        })
        .catch (err => {
            console.log("ya registrado");
            alreadyRegistry.innerHTML = "Usuario registrado, por favor inicie sesión";
        })

        const userName = formRegistry['name-registry'];
        //console.log(userName.value);
        saveUser(userName.value);
        console.log("Se obtiene userName");

        /*const getLocalStorage = () => {
            if (name){
                let name = localStorage.getItem("name");
                console.log(name)
            }else{
                console.log('No hay nombre')
            }

        }
        getLocalStorage();

        
        const saveLocalStorage = () => {
            let name = userName.value;
            localStorage.setItem("name", name);
        }
        saveLocalStorage();*/


       
    });

   // getUsers();
    
        
    const linkRegistry = newDiv.querySelector("#linkRegistry");
    linkRegistry.addEventListener("click", (e) => {e.preventDefault();
        const containerLogUp = newDiv.querySelector("#containerLogUp");
        const containerLogIn = newDiv.querySelector(".containerLogIn");
        containerLogUp.style.display= "block";
        containerLogIn.style.display= "none";
    });

    const linkLogin = newDiv.querySelector("#linkLogin");
    linkLogin.addEventListener("click", (e) => {e.preventDefault();
        const containerLogUp = newDiv.querySelector("#containerLogUp");
        const containerLogIn = newDiv.querySelector(".containerLogIn");
        containerLogUp.style.display= "none";
        containerLogIn.style.display= "flex";
    });

    return newDiv;

};  




    
    




