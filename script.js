const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptacion(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptacion(stringEncriptacion){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptacion = stringEncriptacion.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptacion.includes(matrizCodigo[i][0])){
            stringEncriptacion = stringEncriptacion.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptacion
}
