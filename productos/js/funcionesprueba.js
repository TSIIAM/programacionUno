/*
Aqui las funciones para el practico 4 en un archivo separado.

*/


//funcion que le da un color al azar al body
setInterval(body, 3000);
	function body(){
		//random backgroundColor del body al iniciar
	   colRojo = Math.floor((Math.random() * 256));
       colVerde = Math.floor((Math.random() * 256));
       colAzul = Math.floor((Math.random() * 256));
	$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
}
//************************************************************************
//funcion que muestra los ejercicios
	function mostrar(nombre){
	var ejercicio = $(".ejercicio");
	var resultado = $(".resultado");
	ejercicio.hide();
	var ventana = true;
	var btn = $(".ejerbtn");
	
	
	//con click mostrar el ejercicio
	$(nombre).on("click", function(){

		if(ventana){
		  var colRojo = Math.floor((Math.random() * 256));
       var colVerde = Math.floor((Math.random() * 256));
       var colAzul = Math.floor((Math.random() * 256));
		$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
		ventana = false;
		$(this).closest(btn).addClass("cerrar");
		$(this).parent().siblings().hide("800");
		ejercicio.hide();
		$(this).nextAll().eq(1).show("800");
		


	}else if(!ventana){
		 var colRojo = Math.floor((Math.random() * 256));
      var colVerde = Math.floor((Math.random() * 256));
      var colAzul = Math.floor((Math.random() * 256));
	  $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
	  ventana = true;
	
	$(this).closest(btn).removeClass("cerrar");
	
	$(this).nextAll().eq(1).hide("900");
	$(this).parent().siblings().show("800");
	resultado.text("El resultado se vera aqui.");
	}

	});

	
	
	

};
	//************************************************************************
		//funciones para prueba

		
		function calcularIVA(cantidad){
			var total;
			total = cantidad;
			total +=  total  * 22 /100 ;
			return total;
		}
		
		function calcular(cantidad, producto, _cantidad){
				var resultado = _cantidad * 78;
			if( producto == "Pino" && cantidad[0] >= 5){
				
				 resultado =  resultado - (  resultado * 13  / 100);
			}else if(producto == "Lavanda" && cantidad[1] >= 5){
				 resultado =  resultado - (  resultado * 6  /100);
			}else{
				resultado;
			}
			return resultado;
		}
		

		
		
		
		
		function calcularCantidad(cantidad, producto,costos, _cantidad){
			switch(producto){
				case "Pino": 
				cantidad[0] += _cantidad;
				costos[0] += calcular(cantidad,producto, _cantidad);
				break;
				case "Lavanda": 
				cantidad[1] += _cantidad;
				costos[1] += calcular(cantidad,producto, _cantidad);
				break;
				case "Floral": 
				cantidad[2] += _cantidad;
				costos[2] += calcular(cantidad,producto, _cantidad);
				break;
			}
			
			
		}
		
		function mostrarCompras(cantidad,costos,ventas,resultado,resultados){
			var productos = ["Pino","Lavanda","Floral"];
			var table = "<table class='table table-striped'>";
			var totalCantidad = 0;
			var totalCosto = 0;
			var total = 0;
			for(var i = 0; i<cantidad.length;i++){
				totalCantidad+=cantidad[i];
				totalCosto+=costos[i];
			table += "<tr>"+"<td>" + productos[i] +"</td>" + "<td>" + cantidad[i] +"</td>"+"<td>" + "$"+ Math.ceil(costos[i]) +"</td>" +"</tr>" ;
			}
			table +="<tr>"+"<td>" +"Total" +"</td>" + "<td>" + totalCantidad +"</td>"+"<td>" + "$"+ Math.ceil(totalCosto) +"</td>" +"</tr>"
			table += "</table>";
			
			total = calcularIVA(totalCosto);
			resultado.html("Cantidad " + ventas + " Total " +  "$"+Math.ceil(total));
			resultados.html(table);
			
		}
		
		
		

	