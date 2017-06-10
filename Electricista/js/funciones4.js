/*
Aqui las funciones para el practico 4 en un archivo separado.

*/


//funcion que le da un color al azar al body
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
	//con click mostrar el ejercicio

	$(nombre).on("click", function(){
		if(ventana){
		  var colRojo = Math.floor((Math.random() * 256));
       var colVerde = Math.floor((Math.random() * 256));
       var colAzul = Math.floor((Math.random() * 256));
		$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
		ventana = false;
		$(this).parent().siblings().hide("800");
		$(this).nextAll().eq(1).show("800");


	}else if(!ventana){
		 var colRojo = Math.floor((Math.random() * 256));
      var colVerde = Math.floor((Math.random() * 256));
      var colAzul = Math.floor((Math.random() * 256));
	  $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
	  ventana = true;

	$(this).nextAll().eq(1).hide("900");
	$(this).parent().siblings().show("800");
	}

	});


};
	//************************************************************************



//ejercicio 9
	/*El electrista cobra un valor fijo de $U 200(doscientos pesos) por hora.Si utiliza un asistente,
	 este asistente cobra $U150(ciento cincuenta pesos) por hora y trabaja la misma centidad de horas y
	 dias que el electricista en caso de ser parte del proyecto. */

	 /*Al costo que haya de compra de materiales, el electricista le agrega un %10(diez por ciento) por concepto de compra y
	 traslado de los materiales hasta el lugar de la obra. */

	 function costoElectricista(horas){
		var costo = 200 * horas;
		return costo;
	 }
	  function costoAsistente(horas){
		var costo = 150 * horas;
		return costo;
	 }

	   function costoAsistente(horas){
		var costo = 150 * horas;
		return costo;
	 }
	 function  costoMateriales(materiales){
		var costo = materiales + (materiales * 10 / 100);
		return costo;
	 }

	 function costoTotal(dias,horas,materiales,personal){
		 var resultado = 0;
		 var horasTrabajo = costoElectricista(horas);
		 if(personal == 'Asistente'){
			 horasTrabajo += costoAsistente(horas);
		 }
		 var diasTrabajo = dias * horasTrabajo;
		 var totalMateriales = costoMateriales(materiales);
		 resultado = diasTrabajo + totalMateriales;
		 return resultado;

	 }
