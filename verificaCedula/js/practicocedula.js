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

	$("#btn16").on("click", ejercicio16);
}

	function ejercicio16(){
			var inputA = $("#in16A").val();
			var resultado = $("#resultado16");
			var btn = $("#btn16");
			var correcto = validarVacio(resultado,btn,inputA,inputA);
			inputA = inputA.replace(/[\W_]/g, '');
			if(inputA.length < 9 ){
			var resultados = verificarCedula(inputA);
			}else{
				resultados = "Ingrese una cedula correcta ;ej: 4 246 412 .";
			}
			



				if(correcto){
					resultado.html(resultados);
					resultado.addClass("importante");
				}else{
					resultado.html("Ingrese texto");
				}
			}
	//*********************************************************************
