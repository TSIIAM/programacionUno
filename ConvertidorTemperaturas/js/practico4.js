/*
Ejercicios del practico 4, archivo javascript, con libreria jQuery 
Funciones invocadas estan en archivo funciones4.js

*/
//************************************************************************
//al cargar completamente practico3.html invocar main
$(document).ready(main);
//************************************************************************


	//***********************MAIN********************************************
	//funcion principal donde estan los eventos de los botones
	function main(){
	var ejer = $(".ejerbtn");
	body();
	mostrar(ejer);
	
	//procesos de las funciones

	$("#btn7").on("click", ejercicio7);
}
	//*********************************************************************
	//*********************************************************************

	function ejercicio7(){
	var inputA = $("#num7A").val();
	var inputB = $("#num7B").val();
	var inputC = Number($("#num7C").val());
	var resultado = $("#resultado7");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA == "empty" || inputB == "empty"  ){
        resultado.html("Selecione a convertir!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	if(inputA == inputB){
        resultado.html("Selecione otra conversion disponible!!").addClass("importante");
	$(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
	//estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	
	
	var temperatura = convertidor(inputA,inputB,inputC);
	var resultados = "La temperatura es " + temperatura.toFixed(2) + " grados " + inputB ;
	
	

	resultado.html(resultados+".");
	resultado.addClass("importante");
	}
	//*********************************************************************
	//*********************************************************************
	