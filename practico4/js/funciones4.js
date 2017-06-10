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

// Funciones para el practico 4
// numeros pares para ejercicio 1
	function numerosPares(a,b){
	 var losNumeros =[]
	 losNumeros.push(a);
	 losNumeros.push(b);
	 losNumeros.sort(function(a,b){return a-b});
	 var losResultados =[]
	 var primero = losNumeros[0];
	 var segundo = losNumeros[1];
	 //Loop para obtener pares valores a y b incluidos
	 for(var i = primero; i  <= segundo; i++){
		 if(i % 2 === 0){
		 losResultados.push(i);
		 }

	 }
	 var resultados = losResultados;
	 return  resultados;
}
//**********************************************************************
//*********************************************************************
//Funcion de esMayor(edad,tope) para el ejercicio 2.
	function esMayor(edad,tope){
		var resultados;
		if(edad > tope){
			resultados = true;
		}else{
			resultados = false;
		}
		return resultados;
	}
//*********************************************************************
//  Funcion de esBisiesto para el ejercicio 3
	function esBisiesto(año){
		var bisiesto = false;
		//si es multiplo de 4 no es multiplo de 100 y si es multpiplo de 400)
		if(año % 4 == 0  && año % 100 != 0){
			bisiesto = true;
		}else if(año % 400 == 0){
			bisiesto = true;

		}

		return bisiesto;
	}
	//*********************************************************************
//  Funcion de calcularAreaTriangulo para el jercicio 4
	function calcularAreaTriangulo(base, altura){

		// la base por la altura dividido por 2
		var resultado = (base * altura) / 2 ;
		return resultado;
	}
		//*********************************************************************
//  Funcion de calcularAreaRectangulo para el jercicio 5
	function calcularAreaRectangulo(ancho, alto){

		//  area de rectangulo la base por la altura
		var resultado = ancho * alto;
		return resultado;
	}
	//  Funcion de calcularCelciusAFahreinheit para el jercicio 5




	//*********************************************************************
	//ESTA FUNCION DECIDE QUE DEBE CONVERTIR E INVOCA AL CALCULO

	function convertidor(de,a,temp){
		var origen  = de;
		var destino = a;
		var temperatura = temp;

		var resultado = "";

		//control de conversiones
		if(origen =="Fahrenheit" && destino =="Celsius"){

			resultado = calcularFahrenheitACelsius(temperatura);

		}else if(origen =="Celsius" && destino =="Fahrenheit"){

			resultado = calcularCelsiusAFahreinheit(temperatura);

		}else if(origen =="Fahrenheit" && destino =="Kelvin"){

			resultado = calcularFahrenheitAKelvin(temperatura);

		}else if(origen =="Kelvin" && destino =="Fahrenheit"){

			resultado = calcularKelvinAFahrenheit(temperatura);

		}else if(origen =="Fahrenheit" && destino =="Rankine"){

			resultado = calcularFahrenheitARankine(temperatura);

		}else if(origen =="Rankine" && destino =="Fahrenheit"){

			resultado = calcularRankineAFahreinheit(temperatura);

		}else if(origen =="Fahrenheit" && destino =="Reaumur"){

			resultado = calcularFahrenheitAReaumur(temperatura);

		}else if(origen =="Reaumur" && destino =="Fahrenheit"){

			resultado = calcularReaumurAFahrenheit(temperatura);

		}
		//*********************Celsius************************ */
		else if(origen =="Celsius" && destino =="Kelvin"){

			resultado = calcularCelsiusAKelvin(temperatura);

		}else if(origen =="Celsius" && destino =="Rankine"){

			resultado = calcularFahrenheitARankine(temperatura);

		}else if(origen =="Celsius" && destino =="Reaumur"){

			resultado = calcularCelsiusAReaumur(temperatura);

		}
		//******************Kelvin*************** */
		else if(origen =="Kelvin" && destino =="Celsius"){

			resultado = calcularKelvinACelsius(temperatura);

		}else if(origen =="Kelvin" && destino =="Rankine"){

			resultado = calcularKelvinARankine(temperatura);

		}else if(origen =="Kelvin" && destino =="Reaumur"){

			resultado = calcularKelvinAReaumur(temperatura);
		}
		//******************Rankine*************** */
		else if(origen =="Rankine" && destino =="Celsius"){

			resultado = calcularRankineACelsius(temperatura);

		}else if(origen =="Rankine" && destino =="Kelvin"){

			resultado = calcularRankineAKelvin(temperatura);

		}else if(origen =="Rankine" && destino =="Reaumur"){

			resultado = calcularRankineAReaumur(temperatura);
		}
		//******************Reaumur*************** */
		else if(origen =="Reaumur" && destino =="Celsius"){

			resultado = calcularReaumurACelsius(temperatura);

		}else if(origen =="Reaumur" && destino =="Kelvin"){

			resultado = calcularReaumurAKelvin(temperatura);

		}else if(origen =="Reaumur" && destino =="Rankine"){

			resultado = calcularReaumurARankine(temperatura);
		}




		return resultado;
	}

	//funciones convertidoras
		function calcularCelsiusAFahreinheit(celsius){

		//  area de rectangulo la base por la altura
		var f = 1.8 *  celsius + 32 ;
		return f;
	}
		function calcularFahrenheitACelsius(fahreinheit){

		//  area de rectangulo la base por la altura
		var c =  (fahreinheit - 32) / 1.8  ;
		return c;
	}
		function calcularFahrenheitAKelvin(fahreinheit){

		var k =  fahreinheit;
		k  +=  459,67;
		k  /=  1.8  ;
		return k;
	}
		function calcularKelvinAFahrenheit(kelvin){

		var f =     kelvin;
		f *=    1.8;
		f -=    459,67;
		return f;
	}
		function calcularFahrenheitARankine(fahreinheit){

		var rankine =     fahreinheit;
		rankine +=    459,67;
		return rankine;
	}
		function calcularRankineAFahreinheit(rankine){

		var fahreinheit =     rankine;
		fahreinheit -=    459,67;
		return fahreinheit;
	}
		function calcularFahrenheitAReaumur(fahreinheit){
		var Reaumur =     fahreinheit;
		Reaumur -=    32;
		Reaumur /= 2.25;
		return Reaumur;
	}
		function calcularReaumurAFahrenheit(Reaumur){
		var fahreinheit =     Reaumur;
		fahreinheit *=      2,25;
		fahreinheit += 		32;
		return fahreinheit;
	}

	//****************************Aqui se utiliza una funcion intermediaria para convertir valor origen a fahreinheit a destino */
		function calcularCelsiusAKelvin(celsius){
			var  caf    = calcularCelsiusAFahreinheit(celsius)
			var  kelvin = calcularFahrenheitAKelvin(caf);
			return kelvin;

	}
		function calcularCelsiusARankine(celsius){
			var  caf    = calcularCelsiusAFahreinheit(celsius)
			var  rankine = calcularFahrenheitARankine(caf);
			return rankine;

	}
		function calcularCelsiusAReaumur(celsius){
			var  caf    = calcularCelsiusAFahreinheit(celsius)
			var  Reaumur = calcularFahrenheitAReaumur(caf);
			return Reaumur;

		}
		//*********************Kelvin********************** */
		function calcularKelvinACelsius(kelvin){
			var  kaf    = calcularKelvinAFahrenheit(kelvin)
			var  celsius = calcularFahrenheitACelsius(kaf);
			return celsius;

		}
		function calcularKelvinARankine(kelvin){
			var  kaf    = calcularKelvinAFahrenheit(kelvin)
			var  rankine = calcularFahrenheitARankine(kaf);
			return rankine;

		}
		function calcularKelvinAReaumur(kelvin){
			var  kaf    = calcularKelvinAFahrenheit(kelvin)
			var  Reaumur = calcularFahrenheitAReaumur(kaf);
			return Reaumur;

		}
		//*********************Rankine********************** */
		function calcularRankineACelsius(rankine){
			var  raf    = calcularRankineAFahreinheit(rankine)
			var  celsius = calcularFahrenheitAReaumur(raf);
			return celsius;

		}
		function calcularRankineAKelvin(rankine){
			var  raf    = calcularRankineAFahreinheit(rankine)
			var  kelvin = calcularFahrenheitAReaumur(raf);
			return kelvin;

		}
		function calcularRankineAReaumur(rankine){
			var  raf    = calcularRankineAFahreinheit(rankine)
			var  Reaumur = calcularFahrenheitAReaumur(raf);
			return Reaumur;

		}
		//*********************Reaumur********************** */
		function calcularReaumurACelsius(Reaumur){
			var  raf    = calcularReaumurAFahrenheit(Reaumur)
			var  celsius = calcularFahrenheitACelsius(raf);
			return celsius;

		}
		function calcularReaumurAKelvin(Reaumur){
			var  raf    = calcularReaumurAFahrenheit(Reaumur)
			var  kelvin = calcularFahrenheitAKelvin(raf);
			return kelvin;

		}
		function calcularReaumurARankine(Reaumur){
			var  raf    = calcularReaumurAFahrenheit(Reaumur)
			var  rankine = calcularFahrenheitARankine(raf);
			return rankine;

		}





	//*********************************************************************
	//***************Funcion exponente para ejercicio 8********************
		function calcularExponente(base,exp){
	      var resultado = 1;
			 for(var i = 1; i <=  exp; i++){
			 resultado *=   base  ;
			 }
			return resultado;
		}



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
