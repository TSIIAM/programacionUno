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
		//$(this).parent().siblings().hide("800");
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
	//$(this).parent().siblings().show("800");
	resultado.text("El resultado se vera aqui.");
	}

	});

	
	
	

};


function verificarCedula(input){
	
	var verificador = [2,9,8,7,6,3,4];
	var cedula = input.split("");
	var verificado = [];
	var digito = [];
	var resultado = [];
	//recorrer el array, ingresar los valores de la multiplicacion de la cedula por verificador
	for(var i = 0 ; i < cedula.length; i++){
		verificado.push(cedula[i] * verificador[i]);
	}
	//plus es la funcion que vamos a usar en el reduce para sumar los valores del array
	function plus(a, b) { return a + b; };
	digito = verificado.reduce(plus);
	console.log(digito);
	for(var numeral = digito ; numeral % 10 !== 0 + 1; numeral++){
		resultado   =  numeral - digito;

	}
	

	
return resultado = "El digito verificador:"  + resultado +" y la cedula es " + input + "-"+  resultado ;
}