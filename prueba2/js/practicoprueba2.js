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
	$("#btn1A").on("click", ejercicio1A);
	$("#btn1B").on("click", ejercicio1B);
	
	$("#btn2A").on("click", ejercicio2A);
	$("#btn2B").on("click", ejercicio2B);
	
	$("#btn3A").on("click", ejercicio3A);
	$("#btn3B").on("click", ejercicio3B);
	
	$("#btn4A").on("click", ejercicio4A);

}
	//*********************************************************************
	//*********************************************************************



	var sueldos = [];
function ejercicio1A(){
			var inputA = Number($("#in1A").val());
			var error = $("#error");
			var resultado = $("#resultado1");
			var boton = $("#btn1A");
			var verificar = validarVacio(resultado,error,boton,inputA,inputA);
				if(verificar){
					sueldos.push(inputA);
					resultado.text(sueldos);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
function ejercicio1B(){
			var inputB = Number($("#in1B").val());
			var error = $("#error");
			var resultado = $("#resultado1");
			var boton = $("#btn1B");
			var verificar = validarVacio(resultado,error,boton,inputB,inputB);
				if(verificar){
					
					var resultados = aumentarSueldos(sueldos,inputB);
					resultado.text(resultados);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
//************************************************************
	var numeros = [];
function ejercicio2A(){
			var inputA = Number($("#in2A").val());
			var error = $("#error");
			var resultado = $("#resultado2");
			var boton = $("#btn2A");
			var verificar = validarVacio(resultado,error,boton,inputA,inputA);
				if(verificar){
					numeros.push(inputA);
					resultado.text(numeros);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
function ejercicio2B(){
			var inputB = Number($("#in2B").val());
			var error = $("#error");
			var resultado = $("#resultado2");
			var boton = $("#btn2B");
			var verificar = validarVacio(resultado,error,boton,inputB,inputB);
				if(verificar){
					
					var resultados = sumarMultiplos3(numeros,inputB);
					resultado.text("La suma da " + resultados);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
//************************************************************
//************************************************************
	var palabras = [];
function ejercicio3A(){
			var inputA = $("#in3A").val();
			var error = $("#error");
			var resultado = $("#resultado3");
			var boton = $("#btn3A");
			var verificar = validarVacio(resultado,error,boton,inputA,inputA);
				if(verificar){
					palabras.push(inputA);
					resultado.text(palabras);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
function ejercicio3B(){
			var inputB = $("#in3B").val();
			var error = $("#error");
			var resultado = $("#resultado3");
			var boton = $("#btn3B");
			var verificar = validarVacio(resultado,error,boton,inputB,inputB);
				if(verificar){
					
					var resultados = encontrarPalabra(palabras,inputB);
					resultado.text("La Posicion  de " + inputB + " es " + resultados);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}

}//END EJERCICIO
//************************************************************
//************************************************************
	var ventas = [1000,500,2800,19000,5000,7500,90000,50000,3600,5400,9900,12000];
function ejercicio4A(){
			var inputA = $("#in4A").val();
			var inputB = Number($("#in4B").val());
			var inputA2 = $("#in4A :selected").text();
			var error = $("#error");
			var resultado = $("#resultado4");
			var boton = $("#btn4A");
			var verificar = validarVacio(resultado,error,boton,inputA,inputA);

				if(verificar){
					
					
					var resultados = ventaPorMes(ventas,inputA,inputB);
					
					
					resultado.text("Las ventas de " + inputA2 + " son " + "$"+resultados);
				}else{
				error.html("Ingrese Valores");
				error.show();
				}
}//END EJERCICIO
//************************************************************

