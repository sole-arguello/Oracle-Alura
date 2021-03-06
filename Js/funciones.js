//mensaje --> es el input ya sea para encriptar o desencriptar
//---------------------------------------------------------------------
function encriptar(mensaje){
    swal({
        title:"Mensaje ENCRIPTADO",
        text : "UTILICE EL BOTON COPIAR/PEGAR TEXTO",
        icon: "success",
        buttons :false,
        timer:2500//tiempo que se muestra y desaparece automaticamente
    });    
    var mensajeOutput = mensaje.replaceAll("e", "enter")
                               .replaceAll("i", "imes")
                               .replaceAll("a", "ai")
                               .replaceAll("o", "ober")
                               .replaceAll("u", "ufat");
    return mensajeOutput;
    
}
//----------------------------------------------------------------------
function Desencriptar(mensaje){
    swal({
        title:"Mensaje DESENCRIPTADO",
        text : "UTILICE EL BOTON COPIAR/PEGAR TEXTO",
        icon: "success",
        buttons :false,
        timer:2500//tiempo que se muestra y desaparece automaticamente
    });
    var mensajeOutput = mensaje.replaceAll("enter", "e")
                               .replaceAll("imes", "i")
                               .replaceAll("ai", "a")
                               .replaceAll("ober", "o")
                               .replaceAll("ufat", "u");
    return mensajeOutput;
}

//--------------------------------------------------------------------------