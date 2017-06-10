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
	$("#btn1").on("click", ejercicio);
}
	//*********************************************************************
	//*********************************************************************
	/*Una empresa vende tres clases de productos aromatizantes: Pino, Lavanda y Floral.
Todos los productos tienen el mismo precio de venta al público de $ 78. 
Los aromatizantes de Pino, cuando se compra más de 5 unidades, tienen un descuento del 13%, y los de Lavanda tienen un descuento del 6%..

1) Crear una aplicación que lea un tipo de producto entre Pino, Lavanda y Floral, y una cantidad comprada y calcule el costo de esa venta. Notar que hay que aplicar el IVA al subtotal

2) Sobre la misma aplicación anterior, crear un botón que permita ver el total vendido por artículo, mostrandolo en forma de tabla.
*/

function ejercicio1(){
	var compra = 0;
	var cantidad = [0,0,0];
	var costos = [0,0,0]
	var ventas = 0;
	var costo = 0;
	
		return function(){
			var inputA = $("#in1A").val();
			var inputB = Number($("#in1B").val());
			
			var error = $("#error");
			var resultado = $("#resultado1");
			var resultados = $("#resultado2");
			var boton = $("#btn1");
			var verificar = validarVacio(resultado,error,boton,inputA,inputB);
				if(verificar){
					
				ventas+=inputB;
				
				calcularCantidad(cantidad, inputA,costos,inputB);
				
				mostrarCompras(cantidad,costos,ventas,resultado,resultados);
				}else{
					
				error.html("Ingrese Valores");
				error.show();
				}
			
			
			
			
		}
		//END FUNCTION
}
//END EJERCICIO
ejercicio = ejercicio1();