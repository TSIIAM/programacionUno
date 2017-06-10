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
	$("#btn1").on("click", ejercicio1);
	$("#btn2").on("click", ejercicio2);
	$("#btn3a").on("click", ejercicio3A);
	$("#btn3b").on("click", mostrarNumero);
	$("#btn4a").on("click", ejercicio4A);
	$("#btn4b").on("click", mostrarPalabras);
	$("#btn5a").on("click", ejercicio5A);
	$("#btn5b").on("click", mostrarPromedio)
	$("#btn6a").on("click", ejercicio6A);
	$("#btn6b").on("click", mostrarPromedio)
	$("#btn7a").on("click", ejercicio7);
	$("#btn8").on("click", ejercicio8A);
	$("#btn9").on("click", ejercicio9A);
	

		
}
	//*********************************************************************
	
	//datos globales
	//array para ejercicio 3
	var numeros = [];
	//array para ejercicio 4
	var palabras = [];
	//array para ejercicio 5
	var numerosPromedio = [];
	//array para ejercicio 5
	var numerosEJ6 = [];
	//array para ejercicio 8 y 9 


	
	
	
	//*********************************************************************
//  Funcion de ejercicio 1.
ejercicio1 = ejercicio1A();
	function ejercicio1A(){
	var users = [];
	var nombres = [];
	var apellidos = [];
	var aliases = [];
		
		
		
		return function(){
	var nombre = $("#in1A").val();
	var apellido = $("#in1B").val();
	var alias = $("#in1C").val();
	var resultado = $("#resultado1A");
	var error = $("#error1");
	var btn = $("#btn1");
	//validar si no esta vacio
	var verificar =  validarVacio(error,resultado,btn,nombre,apellido,alias);
		
		
if(verificar){
	var resultados = ingresarAlias(resultado,users,nombres,apellidos,aliases,nombre,apellido,alias);
	if(!resultados){
	resultado.html("Alias ya existe");
	resultado.addClass("alert");
	}else{
	resultado.html(resultados);	
	}
	
	
	}else{
		resultado.html("Ingrese texto en los campos");
	}
		}//end infunction
		
		
}//end ejercicio1


	//*********************************************************************
//  Funcion de ejercicio 2.
	function ejercicio2(){
	var inputA = $("#in2A").val();
	var resultado = $("#resultado2A");
	var error = $("#error2");
	var btn = $("#btn2");
	var correcto =  validarVacio(error,resultado,btn,inputA,inputA,inputA);

if(correcto){
		var letras = contarLetras(inputA);
	
	resultado.html(letras);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
//  Funcion de ejercicio3



	function ejercicio3A(){
	var inputA = $("#in3A").val();
	var resultado = $("#resultado3A");
	var error = $("#error3");
	var btn = $("#btn3a");
	var correcto = validarVacio(error,resultado,btn,inputA,inputA,inputA);
	
	
		if(correcto){
			var resultados;
			 resultados = ingresarNumeros(numeros,inputA);
			 resultado.html("Ingreso " + inputA + " a  los numeros " +  numeros);
		}else{
			resultado.html("Ingrese numeros en los campos");
			}
	}//end ejericio3a
	//*********************************************************************
	// function para el boton mostrar  ejercicio 3
	function mostrarNumero(){
		var resultado = $("#resultado3A");
		var resultados ; 
		resultados = mostrarMayor(numeros);
				resultado.html("El mayor numero es " + resultados);
				resultado.addClass("importante");
	}
		//*********************************************************************
		//para ejercicio 4
		function ejercicio4A(){
	var inputA = $("#in4A").val();
	var resultado = $("#resultado4A");
	var error = $("#error4");
	var btn = $("#btn4a");
	var correcto = validarVacio(error,resultado,btn,inputA,inputA,inputA);
	
		if(correcto){
			palabras.push(inputA);
			 resultado.html(inputA);
		}else{
			resultado.html("Ingrese numeros en los campos");
			}
	}//end ejericio4a
	//*********************************************************************
	// function para el boton mostrar ejercicio 4 
	function mostrarPalabras(){
		var resultado = $("#resultado4A");
		var resultados ; 
		resultados = palabras;
				resultado.html(resultados);
				resultado.addClass("importante");
	}
		//*********************************************************************
		//*********************************************************************
		//para ejercicio 5
		function ejercicio5A(){
	var inputA = Number($("#in5A").val());
	var resultado = $("#resultado5A");
	var error = $("#error5");
	var btn = $("#btn5a");
	var correcto = validarVacio(error,resultado,btn,inputA,inputA,inputA);
	
		if(correcto){
			var resultados;
			 resultados = ingresarNumeros(numerosPromedio,inputA);
			 resultado.html("El numero es " + inputA + " ingresa a " + numerosPromedio + ".");
		}else{
			resultado.html("Ingrese numeros en los campos");
			}
	}//end ejericio4a
	//*********************************************************************
	// function para el boton mostrar ejercicio 5 
	function mostrarPromedio(){
		var resultado = $("#resultado5A");
		var resultados = promedio(numerosPromedio);
				resultado.html("El promedio es " + Math.floor(resultados) + ".");
				resultado.addClass("importante");
	}
		//*********************************************************************
				//*********************************************************************
		//para ejercicio 6
		function ejercicio6A(){
	var inputA = Number($("#in6A").val());
	var resultado = $("#resultado6A");
	var error = $("#error6");
	var btn = $("#btn6a");
	var correcto = validarVacio(error,resultado,btn,inputA,inputA,inputA);
	
		if(correcto){
			var resultados;
			 resultados = ingresarNumeros(numerosEJ6,inputA);
			 resultado.html("El numero es " + inputA + " ingresa a " + numerosEJ6 + ".");
		}else{
			resultado.html("Ingrese numeros en los campos");
			}
	}//end ejericio6a
	//*********************************************************************
	// function para el boton mostrar ejercicio 6 
	function mostrarPromedio(){
		var resultado = $("#resultado6A");
		var resultados = mayores20(numerosEJ6);
				resultado.html("Los numeros son  " + resultados + ".");
				resultado.addClass("importante");
	}
		//*********************************************************************
//*********************************************************************
//  Funcion de ejercicio 7.
ejercicio7 = ejercicio7A();
	function ejercicio7A(){
			//array para ejercicio 7
	var nombresEJ7 = ["Ana", "Lucia", "Maria"];
	nombresEJ7.push("Juan");
		
		
		return function(){
	var inputA = $("#in7A").val();
	var resultadoA = $("#resultado7A");
	var resultadoB = $("#resultado7B");
	var error = $("#error7");
	var btn = $("#btn7");
	//validar si no esta vacio
	var verificar =  validarVacio(error,resultadoA,btn,inputA,inputA,inputA);
		
		
			if(verificar){
				
			pasosEJ7(resultadoA,resultadoB,nombresEJ7,inputA);
			

			}else{
			resultadoA.html("Ingrese texto en los campos");
			}
		}//end infunction
		
		
	}//end ejercicio7


	//*********************************************************************
//*********************************************************************
//  Funcion de ejercicio 8.
	function ejercicio8A(){
		
	var inputA = Number($("#in8A").val());
	var resultado = $("#resultado8A");
	var error = $("#error8");
	var btn = $("#btn8");
	//validar si no esta vacio
	var verificar =  validarPositivo(error,resultado,btn,inputA,inputA,inputA);
		
			var fibonacci = [1,1];
			if(verificar){
			var resultados = buscarFibonacci(fibonacci,inputA);
			resultado.html(resultados);
			}else{
			resultado.html("Ingrese texto en los campos");
			}		
	}//end ejercicio8
	//*********************************************************************
//  Funcion de ejercicio 9.
	function ejercicio9A(){
		
	var inputA = Number($("#in9A").val());
	var resultado = $("#resultado9A");
	var error = $("#error9");
	var btn = $("#btn9");
	//validar si no esta vacio
	var verificar =  validarPositivo(error,resultado,btn,inputA,inputA,inputA);
		
			var fibonacci = [1,1];
			
			if(verificar){
			var resultados = maximoFibonacci(fibonacci,inputA);
			resultado.html(resultados);
			}else{
			resultado.html("Ingrese texto en los campos");
			}		
	}//end ejercicio9
	