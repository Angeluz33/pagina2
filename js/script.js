$(document).ready(function (){
   //asignar las funciones a los eventos de los botones 
    function mostrarTexto(){
        $("#text").fadeIn();
       // alert("Funcion Mostrar Texto ok")
    }
     
     
     function ocultarTexto(){
        $("#text").fadeOut();
        //alert("Funcion Ocultar texto ok")
    }
     

     function cambiarColor(){
        const randomColor='#' + Math.floor(Math.random()*16777215).toString(16);
        $("#text").css("color",randomColor);
        //alert("Funcion Cambiar Color ok")
    }
     

     $("#show-text").click(mostrarTexto);
     $("#hide-text").click(ocultarTexto);
     $("#change-color").click(cambiarColor);
});