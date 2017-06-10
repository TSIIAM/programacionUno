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
	$("#btn3").on("click", ejercicio3);
	$("#btn4").on("click", ejercicio4);
	$("#btn5").on("click", ejercicio5);
	$("#btn6").on("click", ejercicio6);
	$("#btn7").on("click", ejercicio7);
	$("#btn8").on("click", ejercicio8);
	$("#btn9").on("click", ejercicio9);
	$("#btn10").on("click", ejercicio10);
	$("#btn11").on("click", ejercicio11);
	$("#btn12").on("click", ejercicio12);
	$("#btn13").on("click", ejercicio13);
	$("#btn14").on("click", ejercicio14);
	$("#btn15").on("click", ejercicio15);
	$("#btn16").on("click", ejercicio16);
	$("#btn17").on("click", ejercicio17);
}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio 1.
	function ejercicio1(){
	var inputA = $("#in1A").val();
	var resultado = $("#resultado1");
	var btn = $("#btn1");
	//validar si no esta vacio
	var correcto =  validarVacio(resultado,btn,inputA,inputA);

	var resultados = inputA.split("").reverse().join("");

if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
}
	//*********************************************************************
//  Funcion de ejercicio 2.
	function ejercicio2(){
	var inputA = $("#in2A").val();
	var inputB = $("#in2B").val();
	var resultado = $("#resultado2");
	var btn = $("#btn2");
	var correcto =  validarVacio(resultado,btn,inputA,inputB);

	var letrasVeces = contarLetras(inputA,inputB);


if(correcto){
	resultado.html("Cantidad de veces que la letra " + inputB + "  aparece en "  + inputA + " es " + letrasVeces + ".");
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio3
	function ejercicio3(){
	var inputA = $("#in3A").val();
	var resultado = $("#resultado3");
	var btn = $("#btn3");
	var correcto = validarVacio(resultado,btn,inputA,inputA);
	var resultados = contarVocales(inputA);
if(correcto){
	resultado.html("La cantidad de vocales en " + inputA + " : "+ resultados );
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}

	}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio4
	function ejercicio4(){
	var inputA = $("#in4A").val();
	var resultado = $("#resultado4");
	var btn = $("#btn4");
	var correcto = validarVacio(resultado,btn,inputA,inputA);

if(correcto){
	resultado.html(inputA.toLowerCase());
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio5(){
	var inputA = $("#in5A").val();
	var resultado = $("#resultado5");
	var btn = $("#btn5");
	var correcto = validarVacio(resultado,btn,inputA,inputA);
if(correcto){
	resultado.html(inputA.toUpperCase());
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio6(){
	var inputA = $("#in6A").val();
	var resultado = $("#resultado6");
	var btn = $("#btn6");
	var correcto = validarVacio(resultado,btn,inputA,inputA);
	var resultados = capitalizar(inputA);



	if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio7(){
	var inputA = $("#in7A").val();
	var inputB = $("#in7B").val();
	var resultado = $("#resultado7");
	var btn = $("#btn7");
	var correcto = validarVacio(resultado,btn,inputA,inputB);

	var resultados = esSubcadena(inputA,inputB);
	if(resultados){
		resultados = "Es subcadena.";
	}else{resultados = "No es subcadena.";
	}

if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto en los campos");
	}
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio8(){
	var inputA = $("#in8A").val();
	var resultado = $("#resultado8");
	var btn = $("#btn8");
	var correcto = validarVacio(resultado,btn,inputA,inputA);
	var resultados = cantidadPalabras(inputA);


	if(correcto){
	resultado.html("La cantidad de palabras es " + resultados+".");
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto");
	}

}
	//*********************************************************************
	//*********************************************************************
	//Dado un texto indicar si comienza y termina con la misma letra.
	function ejercicio9(){
	var inputA = $("#in9A").val();
	var resultado = $("#resultado9");
	var btn = $("#btn9");
	var correcto = validarVacio(resultado,btn,inputA,inputA);

	var resultados = comienzoFinal(inputA);
	if(resultados){
		resultados = "Comienza y termina con la misma letra.";
	}else{
		resultados = "No Comienza y termina con la misma letra.";
	}




	if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto");
	}
}
	//*********************************************************************
	//*********************************************************************
	//Sabiendo que la primera letra de una matrícula indica el departamento al que pertenece el vehículo.
		//Ingresar una matrícula(formato:AAA-1111) e informar a que departamento pertenece ese vehiculo.
	function ejercicio10(){
		var inputA = $("#in10A").val();
		var resultado = $("#resultado10");
		var btn = $("#btn10");
			if(inputA.length < 7){
				resultado.html("Ingrese matricula correcta ej:SAM1111");
				btn.addClass("btn btn-danger");
				return;
			}
		btn.removeClass(" btn btn-danger");
		var correcto = validarVacio(resultado,btn,inputA,inputA);

		var resultados = matricula(inputA,btn);





	if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto");
	}

}
//*********************************************************************
//*********************************************************************
//Hacer un programa que ingrese una cadena de caracteres y determine el número de mayúsculas y el número de minúsculas.
function ejercicio11(){
	var inputA = $("#in11A").val();
	var resultado = $("#resultado11");
	var btn = $("#btn11");
	var correcto = validarVacio(resultado,btn,inputA,inputA);

	var resultados = contarMinusMayus(inputA);





if(correcto){
resultado.html(resultados);
resultado.addClass("importante");
}else{
	resultado.html("Ingrese texto");
}

}
	//*********************************************************************
	//*********************************************************************
	//Dado un texto Indicar si es un palíndromo.Tener en cuenta que no se tienen en cuenta los espacios en blanco.
	function ejercicio12(){
	var inputA = $("#in12A").val();
	var resultado = $("#resultado12");
	var btn = $("#btn12");
	var correcto = validarVacio(resultado,btn,inputA,inputA);

	var resultados = palindromo(inputA);
	if(resultados){
		resultados = "Es palindromo.";
	}else{
		resultados ="No es palindromo.";
	}



	if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto");
	}
}
	//*********************************************************************
	//*********************************************************************
	//Dado un texto y una letra mostrar el texto ingresado, remplazando la letra indicada por "*".

	function ejercicio13(){
	var inputA = $("#in13A").val();
	var inputB = $("#in13B").val();
	var resultado = $("#resultado13");
	var btn = $("#btn13");
	var correcto = validarVacio(resultado,btn,inputA,inputB);
	var resultados = remplazar(inputA,inputB);




	if(correcto){
	resultado.html(resultados);
	resultado.addClass("importante");
	}else{
		resultado.html("Ingrese texto");
	}
}
	//*********************************************************************
	//*********************************************************************
	//Crear una función que reciba como parámetro un texto y devuelva la posición en la que se encuentra la penúltima ocurrencia de la letra "a" dentro de ese texto.
	//En caso de que haya una sola "a" o no haya ninguna, devolver -1.

	function ejercicio14(){
			var inputA = $("#in14A").val();
			var resultado = $("#resultado14");
			var btn = $("#btn14");
			var correcto = validarVacio(resultado,btn,inputA,inputA);
			var resultados = indexpenultima(inputA, 'a');




				if(correcto){
					resultado.html(resultados);
					resultado.addClass("importante");
				}else{
					resultado.html("Ingrese texto");
				}
			}
	//*********************************************************************
	//*********************************************************************
	//Escribir una función que reciba como parámetro una palabra y devuelva la cantidad de veces que se aparece la primera letra de esa palabra en toda la palabra.
	function ejercicio15(){
			var inputA = $("#in15A").val();
			var resultado = $("#resultado15");
			var btn = $("#btn15");
			var correcto = validarVacio(resultado,btn,inputA,inputA);
			var resultados = cantidadPrimeraLetra(inputA);
			



				if(correcto){
					resultado.html(resultados);
					resultado.addClass("importante");
				}else{
					resultado.html("Ingrese texto");
				}
			}
	//*********************************************************************
	//Ingresar una cédula de identidad uruguaya en un campo de texto con formato 1.111.111-1.
	//Utilizando el algoritmo de cálculo del dígito verificador ( el posterior a la barra), verificar si la ingresada es una cédula válida.

	//Se toman los primeros siete numeros y se multiplican cada uno(respetando el lugar, es decir: primero por primero, segundo por segundo) por 2987634.
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
	//*********************************************************************
	/*
	La fórmula verifica un número contra su digito de chequeo incluido, el cual usualmente agregado a un número de cuenta parcial para generarl el número completo.Este número de cuenta debe pasar la siguiente prueba:
A partir del dígito de chequeo incluido, el cual está a la derecha de todo el número, ir de derecha a izquierda duplicando cada segundo dígito.
Sumar los digitos del resultado:(ejemplo: 10 = 1+0 = 1,14 = 1+4 = 5) juntos con los digitos sin duplicar del numero original.
Si el total de modulo 10 es igual a 0(si el total termina en cero), entonces el número es valido de acuerdo con la fórmula Luhn, de lo contrario no es válido.
Supongamos un ejemplo de un numero de cuenta "7992739871", que contará con un digito de control adicional, por lo que es de la forma 799273981x:
*/

function ejercicio17(){
			var inputA = $("#in17A").val();
			var resultado = $("#resultado17");
			var btn = $("#btn17");
			var correcto = validarVacio(resultado,btn,inputA,inputA);
			var verificado = false;
				if(correcto && inputA.length >= 5 ){
					verificado = verificarCodigo(inputA);
			
					
					
					
					if(verificado){
						resultado.html("El codigo es correcto");
						resultado.addClass("importante");
						resultado.toggleClass( "alert", false).toggleClass("correcto" , true );
					}
					else if(!verificado){
						resultado.html("Lo siento el codigo no es correcto");
						resultado.toggleClass( "alert", true).toggleClass("correcto" , false );
					}
					
				}else{
					resultado.html("Ingrese un digito correcto ;ej:7992739871 .").toggleClass( "alert", true).toggleClass("correcto" , false );
			}
					

		}
	//*********************************************************************
