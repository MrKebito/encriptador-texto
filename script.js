// ----- Elementos ----- //
const btnEncriptar = document.querySelector(".btn-encriptar");
const textoEncriptar = document.querySelector(".encriptar");
const alerta = document.querySelector(".texto-alerta");
const resultado = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// ----- Botón Encriptar ----- //
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo no puede estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Las palabras no pueden tener tildes ni caracteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe de estar escrito todo en minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    
        resultado.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// ----- Botón Desencriptar ----- //
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El campo no puede estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Las palabras no pueden tener tildes ni caracteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "El texto debe de estar escrito todo en minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style")
        },2000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    
        resultado.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

// ----- Botón Copiar ----- //
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy");
});
