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
}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio 1.
	function ejercicio1(){
	var inputA = Number($("#num1A").val());
	var inputB = Number($("#num1B").val());
	var resultado = $("#resultado1");

		//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0 || inputB <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//Invoco a numeros pares.
	var resultados =	numerosPares(inputA, inputB);
	//cantidad de numeros
	var cantidad   = 	resultados.length;
	var los ="";
	//formato para el resultado
	if(cantidad > 1){
		los = " Los numeros pares son ";

	}else{
		los = "El numero par es ";
	}


	resultado.html(los +resultados + "." + "<br >" + "La cantidad de numeros son " +cantidad + "." );
	resultado.addClass("importante");
}
	//*********************************************************************
//  Funcion de ejercicio 2.
	function ejercicio2(){
	var inputA = Number($("#num2A").val());
	var inputB = Number($("#num2B").val());
	var resultado = $("#resultado2");

	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0 || inputB <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//invoco funcion esMayor
	var resultados = esMayor(inputA, inputB);
	if(resultados){
		resultados = "  mayor";
	}else{resultados = "  menor";};


	resultado.html("Es " + resultados + ".");
	resultado.addClass("importante");
	}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio3
	function ejercicio3(){
	var inputA = Number($("#num3A").val());
	var resultado = $("#resultado3");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//INVOCAR FUNCION ES BISIESTO
	var resultados = esBisiesto(inputA);
	if(resultados){
		resultados = "Es bisiesto.";
	}else{
		resultados = "No es bisiesto.";
	}


	resultado.html(resultados);
	resultado.addClass("importante");

	}
	//*********************************************************************
	//*********************************************************************
//  Funcion de ejercicio4
	function ejercicio4(){
	var inputA = Number($("#num4A").val());
	var inputB = Number($("#num4B").val());
	var resultado = $("#resultado4");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0  || inputB <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//INVOCAR FUNCION ES calcularAreaTriangulo
	var areaTriangulo = calcularAreaTriangulo(inputA,inputB);
	var resultados = "El area del triangulo es " + areaTriangulo;

	resultado.html(resultados+".");
	resultado.addClass("importante");
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio5(){
	var inputA = Number($("#num5A").val());
	var inputB = Number($("#num5B").val());
	var resultado = $("#resultado5");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0  || inputB <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//INVOCAR FUNCION ES calcularAreaRectangulo

	var areaRectangulo = calcularAreaRectangulo(inputA,inputB);
	var resultados = "El area del Rectangulo es " + areaRectangulo;

	resultado.html(resultados+".");
	resultado.addClass("importante");
	}
	//*********************************************************************
	//*********************************************************************
	function ejercicio6(){
	var inputA = Number($("#num6A").val());
	var resultado = $("#resultado6");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0  ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//INVOCAR FUNCION ES calcularCelciusAFahreinheit

	//var fahrenheit = calcularCelsiusAFahreinheit(inputA);
	var fahrenheit = calcularCelsiusAFahreinheit(inputA);
	var resultados = "La Temperatura es  " + fahrenheit + " grados Fahrenheit ";

	resultado.html(resultados+".");
	resultado.addClass("importante");
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
	function ejercicio8(){
	var inputA = Number($("#num8A").val());
	var inputB = Number($("#num8B").val());
	var resultado = $("#resultado8");
	//ACA VALIDAMOS EL NUMERO******************************************************
        if(inputA <= 0  || inputB <= 0 ){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	//INVOCAR FUNCION ES calcularAreaRectangulo

	var elExponente = calcularExponente(inputA,inputB);
	var resultados = "El resultado es  " + elExponente;

	resultado.html(resultados+".");
	resultado.addClass("importante");
}
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
