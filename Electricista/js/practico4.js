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

	$("#btn9").on("click", ejercicio9);
}
	//*********************************************************************
	//*********************************************************************

	//*********************************************************************
	//*********************************************************************
	/*El electrista cobra un valor fijo de $U 200(doscientos pesos) por hora.Si utiliza un asistente,
	 este asistente cobra $U150(ciento cincuenta pesos) por hora y trabaja la misma centidad de horas y
	 dias que el electricista en caso de ser parte del proyecto. */

	 /*Al costo que haya de compra de materiales, el electricista le agrega un %10(diez por ciento) por concepto de compra y
	 traslado de los materiales hasta el lugar de la obra. */

	 /*Crear una funcion que reciba como parametro un valor numerico y verifique que sea numero y positivo y devuelva verdadero o falso
	 Esta funcion se puede utilizar para validad ingresos de horas y cantidad de dias. */

	 /*Crear una funcion que reciba como parametro el tipo de usuario (electricista o asistente),
	 la cantidad de horas y la cantidad de dias y calcule el costo total de salario de esa persona para el proyecto y lo devuelva. */

	 /*Crear una funcion que reciba el costo de materiales,
	 calcule el costo total final de los materiales incluidos los traslados y devuelva el total final.. */
	function ejercicio9(){
	var inputA = Number($("#num9A").val());
	var inputB = Number($("#num9B").val());
	var inputC = Number($("#num9C").val());
	var inputD = $("#num9D").val();
	var resultado = $("#resultado9");

	//funcion validar en validar4.js
	validar(inputA,inputB,inputC,inputD,resultado);

	var resultados = costoTotal(inputA,inputB,inputC,inputD);
	var total = "El resultado son " + Math.ceil(resultados) + "Pesos.";





	resultado.html(total )
		//resultado.html(resultados+".");
	resultado.addClass("importante");
}
	//*********************************************************************
	//*********************************************************************
