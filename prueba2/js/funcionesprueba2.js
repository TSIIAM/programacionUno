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
function aumentarSueldos(vecSueldos, tasa){
	var resultado= [];
		for(var i = 0; i < vecSueldos.length ; i++){
		resultado.push(vecSueldos[i]);
		console.log(vecSueldos);
		}
		
		for(var i = 0; i < resultado.length ; i++){
		resultado[i] = vecSueldos[i] + (vecSueldos[i] * tasa /100);
		console.log(resultado);
		}
		return resultado;
}

function sumarMultiplos3(vecNumeros, multiplo){
	var resultado = [];
		for(var i = 1 ; i < vecNumeros.length; i++){
		console.log(vecNumeros[i]);
			if(    i % multiplo === 0 ){
			resultado.push(vecNumeros[i]);
			console.log(resultado);
		}

	}
	resultado = resultado.reduce(function(a,b){ return a + b;}, 0);
	return resultado;
}

function encontrarPalabra(vecPalabras, palabra){

	var resultado = [];
	var nPos = "no existe";

		for(var i = 0; i < vecPalabras.length; i++){
			if(vecPalabras[i] == palabra){
			resultado.push(vecPalabras[i]);
			nPos = i;
			break;
			}

		}
	return nPos;

}


function ventaPorMes(vecVentas,mes,monto){
  var resultado = [];

    for(var i = 0; i < vecVentas.length; i++){
       if(i == mes){
         resultado.push(vecVentas[i]+ monto);
        }

    } 
return resultado;
}
