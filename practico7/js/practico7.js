/*
Ejercicios del practico 7, archivo javascript, con libreria jQuery
Funciones invocadas estan en archivo funciones7.js

*/
//************************************************************************
//al cargar completamente practico3.html invocar main
$(document).ready(main);
//************************************************************************


	//***********************MAIN********************************************
	function main(){
	var ejer = $(".ejerbtn");
	var loader = $(".loader");
	body();
	mostrar(ejer);
	infoData();
	
	//funcion principal donde estan los eventos de los botones
	$("#btn1a").on("click", ejercicio1);
	$("#btn1b").hide().addClass("btn btn-info");
	$("#btn1c").hide().addClass("btn btn-success");
	$("#btn2a").on("click", ejercicio2);
	$("#btn2b").hide().addClass("btn btn-info");
	$("#btn2c").hide().addClass("btn btn-success");
	$("#btn2d").addClass("btn btn-info");
	
	$("#btn3a").on("click", ejercicio3);
	$("#btn3b").on("click", ejercicio3B);
	
	
	$("#btn4a").on("click", ejercicio4);
	$("#btn4b").hide().addClass("btn btn-info");
	$("#btn4c").hide().addClass("btn btn-danger");
	$("#btn4d").hide().addClass("btn btn-success");
	$(".in4E").hide();
	
	
	$("#btn5a").on("click", ejercicio5);
	$("#btn5b").on("click", ejercicio5B);
	$("#btn5c").hide().addClass("btn btn-danger");
	$("#btn5d").hide().addClass("btn btn-info");
	
	
	
	
	//Funciones ejercicios Extras
	cargarForm();
		$("#btnex1a").on("click", extra1A);
		$("#btnex1b").on("click", extra1B);


	
	

		
}
	//*********************************************************************
	//objeto global  de la funcion para almacenar datos
	var ejer1 = {};
	ejer1.usuario = [];
	ejer1.i = 0;
	
	function ejercicio1() {	
		$("#btn1b").show();
		$("#btn1b").on("click", mostrarUsers);
		$("#btn1c").show();
		$("#btn1c").on("click", mostrarMayores);
		
		//variables dentro de la funcion interna a cada click
		var nombre = $("#in1A").val();
		var edad = Number($("#in1B").val());
		var nacionalidad = $("#in1C").val();
		var error = $("#error1");
		var resultado = $("#resultado1A");
		var btn = $("#btn1a");
		var verificar = validarVacio(error,resultado,btn,nombre,edad,nacionalidad,nacionalidad);
			if(verificar){
				$("#btn1a").addClass("btn btn-success");
				ejer1.usuario[ejer1.i++] = new user(nombre,edad,nacionalidad);


			}else{
				resultado.html("Ingrese datos en los campos");
			}
	}//end ejercicio1a
	//mostrar la tabla con todos los usuarios.
	function mostrarUsers(){
	
		var resultado = $("#resultado1A");
		var users = ejer1.usuario;
		var resultados = tablaUsers(users);
		
		resultado.html(resultados);
	}
	//mostrar la tabla con los usuarios.
	function mostrarMayores(){
	
		var resultado = $("#resultado1A");
		var users = ejer1.usuario;
		var resultados = UsersMayores(users);
		
		resultado.html(resultados);
	}
	
	//objeto global  de la funcion para almacenar datos
	var ejer2 = {};
	ejer2.peliculas = [];
	ejer2.i = 0;
	ejer2.mostrarBuscar = false;
	var titulos = [" "];
	function ejercicio2() {	
	
		var resultados = $("#resultados2");
			$("#btn2b").show();
			$("#btn2b").on("click", mostrarPeliculas);
			$("#btn2c").show();
			$("#btn2c").on("click", mostrarPromedios);
			
		var in2F = "<input type=\"text\"    placeholder=\"Buscar Pelicula\"  class=\"form-control \" id=\"in2F\">";	
		var resultado2B =  "<div><p class=\"panel panel-default resultado\"  id=\"resultado2B\"> </p>";
		var  btn2d = "<input type=\"button\"  class=\"form-control\" value=\"Buscar\" id=\"btn2d\">";
		if(!ejer2.mostrarBuscar){
			resultados.append(in2F);
			resultados.append(resultado2B);
			resultados.append(btn2d);
			$("#btn2d").on("click", encontrarPeliculas);
			
					
			ejer2.mostrarBuscar = true;
		}
		
		
		
		//variables dentro de la funcion interna a cada click
		var nombre = $("#in2A").val();
		var año = Number($("#in2B").val());
		var genero	 = $("#in2C").val();
		var votantes = Number($("#in2D").val());
		var puntos = Number($("#in2E").val());
		var resultado = $("#resultado2A");
		var error = $("#error2");
		
		var btn = $("#btn2a");
		var verificar = validarVacio(error,resultado,btn,año,votantes,puntos,puntos);
			if(verificar){
					
				var existe = existePelicula(titulos,nombre);
					if(existe){
						
						
						$("#btn2a").addClass("btn btn-success");
					ejer2.peliculas[ejer2.i++] = new peliculas(nombre,año,genero,votantes,puntos);
					
					}
				


			}else{
				resultado.html("Ingrese datos en los campos");
			}
	}//end ejercicio2a
	
	
	//****************************************************************************
		//mostrar la tabla con todas las peliculas.
	function mostrarPeliculas(){
	
		var resultado = $("#resultado2A");
		var peliculas = ejer2.peliculas;
		var resultados = tablaPeliculas(peliculas);
		
		resultado.html(resultados);
	}
	//mostrar la tabla con las peliculas.
	function mostrarPromedios(){
	
		var resultado = $("#resultado2A");
		var peliculas = ejer2.peliculas;
		var resultados = peliculasMejores(peliculas);
		
		resultado.html(resultados);
	}
	function encontrarPeliculas(){
		var input = $("#in2F").val();
		var resultado = $("#resultado2B");
		var peliculas = ejer2.peliculas;
		
		buscarPelicula(titulos,peliculas,input,resultado);
		
	}
	
	
	var ejer3 = {};
	ejer3.ventas = [];
	ejer3.i = 0;
	function ejercicio3() {	
		
		//variables dentro de la funcion interna a cada click
		var tipo = Number($("#in3A").val());
		var guitarra = $("#in3A :selected").text();
		var cantidad = Number($("#in3B").val());
		var resultado = $("#resultado3A");
		var error = $("#error3");
		
		var btn = $("#btn3a");
		var verificar = validarVacio(error,resultado,btn,tipo,tipo,cantidad,cantidad);
			if(verificar){
				ejer3.ventas[ejer3.i++] = new guitar(guitarra,cantidad);	
			
				$("#btn3a").addClass("btn btn-success");
				resultado.html("Pedido n" + ejer3.i +" Son " + cantidad +  " Guitarras " + guitarra + ".");
			}else{
				resultado.html("Ingrese datos en los campos");
			}
	}//end ejercicio3a
	function ejercicio3B() {	
	
		
		//variables dentro de la funcion interna a cada click;
		var resultado = $("#resultado3A");
		var ventas = ejer3.ventas;
		var btn = $("#btn3b");
		
		var resultados = tablaVentas(ventas);
		
		resultado.html(resultados);
				
				
	}//end ejercicio3a
	
	
	
	
		//objeto global  de la funcion para almacenar datos
	var ejer4 = {};
	ejer4.celulares = [];
	ejer4.i = 0;
		function ejercicio4() {	
		
			//variables dentro de la funcion interna a cada click
			var marca = $("#in4A").val();
			var marcaTexto = $("#in4A :selected").text();
			var modelo = $("#in4B").val();
			var precio =  Number($("#in4C").val());
			var cantidad = Number($("#in4D").val());
			var resultado = $("#resultado4A");
			var error = $("#error4");
			
			var btn = $("#btn4a");
			var verificar = validarVacio(error,resultado,btn,marca,modelo,precio,cantidad);
			
			
				if(verificar){
				
						$("#btn4b").show();
						$("#btn4b").on("click", mostrarCelulares);
						$("#btn4c").show();
						$("#btn4c").on("click", filtrarCelulares);
						$("#btn4d").show();
						$("#btn4d").on("click", encontrarModelo);
						$(".in4E").show();
					
					
					$("#btn4a").addClass("btn btn-success");
					ejer4.celulares[ejer4.i++] = new celular(marcaTexto,modelo,precio,cantidad);	
					resultado.html("La marca " + marcaTexto + " modelo " + modelo + " el total de ventas  es $" + ejer4.celulares[ejer4.i-1]["total"]);
					

				}else{
					resultado.html("Ingrese datos en los campos");
				}
		}//end ejercicio4a
		
		//mostrar la tabla con todos los celulares.
	function mostrarCelulares(){
	
		var resultado = $("#resultado4A");
		var celulares = ejer4.celulares;
		var resultados = tablaCelulares(celulares);
		
		resultado.html(resultados);
	}
	//mostrar la tabla con los totales de ventas  de celulares mayores a  200.
		function filtrarCelulares(){
	
		var resultado = $("#resultado4A");
		var celulares = ejer4.celulares;
		var resultados = mayor2000Celulares(celulares);
		
		resultado.html(resultados);
	}
	
		function encontrarModelo(){
		var input = $("#in4E").val();
		var resultado = $("#resultado4B");
		var peliculas = ejer4.celulares;

		buscarModelo(peliculas,input,resultado);
		
	}
	
	var ejer5 = {};
	ejer5.zapatos = [];
	ejer5.i = 0;
	function ejercicio5() {	
		
		//variables dentro de la funcion interna a cada click
		var marca = $("#in5A").val();
		var talle = Number($("#in5B").val());
		var color = $("#in5C").val();
		var origen = $("#in5D").val();
		var origen2 = $("#in5D :selected").text();
		
		var resultado = $("#resultado5A");
		var error = $("#error5");
		
		
		$("#btn5c").show();
		$("#btn5c").on("click", filtrarZapatos);
		$("#btn5d").show();
		$("#btn5d").on("click", informarZapato);
		
		
		
		
		
		var btn = $("#btn5a");
		var verificar = validarVacio(error,resultado,btn,marca,talle,color,origen2);
		var verificarTalle = validarTalle(error,resultado,btn,talle);
			if(verificar && verificarTalle){
				ejer5.zapatos[ejer5.i++] = new zapato(marca,talle,color,origen2);	
			
				$("#btn5a").addClass("btn btn-success");
				resultado.html("Pedido n" + ejer5.i +" Son " + marca +  " Talle " + talle + " Color " + color +  " Origen " + origen2 +    ".");
			}else{
				resultado.html("Ingrese datos en los campos");
			}
	}//end ejercicio5a
	
		function ejercicio5B() {	
	
		
		//variables dentro de la funcion interna a cada click;
		var resultado = $("#resultado5A");
		var zapatos = ejer5.zapatos;
		var btn = $("#btn5b");
		
		var resultados = tablaZapatos(zapatos);
		
		resultado.html(resultados);
				
				
	}//end ejercicio5B
	
	//filtrar la tabla de zapatos.
	function filtrarZapatos(){
	
		var resultado = $("#resultado5A");
		var zapatos = ejer5.zapatos;
		var resultados = mostrarZapatos(zapatos);
		
		resultado.html(resultados);
	}
	
	//informar origen de zapatos
	function informarZapato(){
		var input = $("#in5E :selected").text();
		var resultado = $("#resultado5B");
		var zapatos = ejer5.zapatos;

		informeZapatos(zapatos,input,resultado);
		
	}
	
	
	
	
	