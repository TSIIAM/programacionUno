/*
Aqui las funciones para el practico 6 en un archivo separado.

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

//funcion para reloj da hora y dia
setInterval(tempo,1);
		function  tempo(){
		var fechaHora = new Date();
		var horas = fechaHora.getHours();
		var minutos = fechaHora.getMinutes();
		var segundos = fechaHora.getSeconds();
		var dia  = fechaHora.getDay();
		switch(dia){
			case 0: dia = "Domingo";
			break;
			case 1: dia = "Lunes";
			break;
			case 2: dia = "Martes";
			break;
			case 3: dia = "Miercoles";
			break;
			case 4: dia = "Jueves";
			break;
			case 5: dia = "Viernes";
			break;
			case 6: dia = "Sabado";
			break;
		}
		if(horas < 10){ horas = "0" +horas;}
		if(minutos < 10) { minutos = "0"+minutos;}
		if(segundos < 10){segundos = "0" +segundos;}

		$("#tempo").html( "Hoy es " + dia + " y son las " + horas+"hs"+":"+minutos+"mns"+":"+segundos+"segs");
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
	resultado.val();
	}

	});

	
	
	

};



	//************************************************************************
	//funcion ingresarAlias para ejercicio 1.
	function ingresarAlias(resultado,users,nombres,apellidos,aliases,nombre,apellido,alias){
		
		//tabla para visualizar
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><td>" + "Nombres" + "</td><td>" + "Apellidos" +"</td><td>" + "Alias" + "</td></tr>";
		var noEsta = true;
		
		//si esta vacio ingresar
		if(users.length == 0){
			users.push(alias);
			nombres.push(nombre);
			apellidos.push(apellido);
			aliases.push(alias);
		}
		
		
		//corroborar si esta
		//loop para verificar si alias esta
		for(var i = 0 ; i  < users.length; i++){
				if(alias == users[i]){
				noEsta = false;
				}
		}	
				for(var i = 0 ; i  < users.length; i++){
					if(noEsta){
					
					users.push(alias);
					nombres.push(nombre);
					apellidos.push(apellido);
					aliases.push(alias);
			
					}
					
					for(var i = 0 ; i  < users.length; i++){
					if(noEsta || users.length == 1 ){
					table +=  "<tr><td>" + nombres[i]+"</td><td>" + apellidos[i]  +"</td><td>" +  aliases[i]  + "</td></tr>";
					}else if(!noEsta){
						table = false;
						resultado.addClass("alert");
						
					}
				}
		}
				
			
			if(!table){
				return table;
			}else{
			table += "</table>";
			return table;	
			}
			

			
		
		}
	





	//************************************************************************
	//funcion contarLetras para ejercicio 2.
	function contarLetras(palabras){
		var palabras = palabras.split(" ");
		var letras = [];
		console.log(palabras);
		for(var i = 0 ; i < palabras.length; i++){
			letras.push(palabras[i].length + " ");
			
			
		}
		
		
		return letras;
		
	}
	
	//********************************************************
	//funcion numeroMayor para ejercicio 3
	function ingresarNumeros(numbers,ingreso){
			numbers.push(Number(ingreso));

		var resultado = numbers;

		console.log(resultado);
		return resultado;
	}
	
	function Ascendentes(a,b){
		return a - b;
	}
	//para  ejercicio 3  mostrar el mayor numero del array
	function mostrarMayor(input){

		var resultado;
		
		input.sort(Ascendentes);
		resultado = input[input.length-1];
		

		return resultado;
	}
	
		//para  ejercicio 5  mostrar el promedio de un array de numeros
	function promedio(input){
		var numeros = input;
		var resultado;
		resultado = numeros.reduce(function(a,b){ return a + b;}, 0);
		resultado /=  input.length;
		console.log(resultado);
		

		return resultado;
	}
	
			//para  ejercicio 6  mostrar numeros mayores a 20 
	function mayores20(input){
		var numeros = input;
		var mayores = [];
		for(var i = 0; i < numeros.length; i++){
			if( numeros[i] >= 20){
				mayores.push(numeros[i]);
			}
			
		}
		
		var resultado;
		resultado = mayores;

		return resultado;
	}
	// function para ejercicio 7
	function  pasosEJ7(resultadoA,resultadoB,nombres,input){
		
		var  tamaño  = nombres.length;
		var  primero =  nombres[0];
		var  ultimo  = nombres[nombres.length -1];
		var nuevoNombre;
		var renglones = " ";
		var esta;
		var nPos = 0;
		console.log(nPos);
			for(var i = 0 ; i < nombres.length; i++){
						if(input == nombres[i] ){
							console.log(nPos);
						esta = true;
						nPos = i;
						break;
				
						}else{
							console.log(nPos);
						esta = false;
						nPos = false;
						}
			}
		
		if(esta == true){
			console.log(nPos);
			esta = " estaba";
			nuevoNombre = prompt("El nombre ya existe, puede modificarlo por uno nuevo.");
				if(!nuevoNombre){
					//
				}else{
				nombres[nPos] = nuevoNombre;
				}
			
		
		}else{

			esta = " no esta";
			nombres.push(input);
		}
		
		if(!nPos){

			nPos = " ninguna";
		}
		
		renglones += "Los nombres son " + "<br >";
		for(var i = 0 ; i < nombres.length; i++){
			renglones += nombres[i] + "<br >";
		}
		

		var resultado = "La cantidad de nombres  " + tamaño + " nombres" + ", El primer nombre es " + primero + " y El ultimo nombre es " + ultimo + " el nombre " + input + esta + " en la posicion " + nPos +".";

		resultadoA.html(resultado);
		resultadoB.html(renglones);
		
		
	}
	
	//function para ejercicio 8
	function buscarFibonacci(fibonacci,input){
		var sucesiones = input;
		 		 
		var resultado = [];
		for(var i = fibonacci.length; i < sucesiones; i++){
			fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
			
		}
		for(var i = 0; i < fibonacci.length; i++){
			if(i != fibonacci.length - 1){
			resultado.push(fibonacci[i] + " , ");	
			}else{
				resultado.push(fibonacci[i] + ".");
			}
			
		}
		return resultado;
	}
	
	
	//function para ejercicio 9
	function maximoFibonacci(fibonacci,input){
		  var fin = input;

		var resultado = [];
		
			for(var i = fibonacci.length; i <= fin; i++){
			fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
			if(fibonacci[i] >= fin){
				break;
			}
			
		}
		
		for(var i = 0; i < fibonacci.length; i++){
			if(i != fibonacci.length - 1){
			resultado.push(fibonacci[i] + " , ");	
			}else{
				resultado.push(fibonacci[i] + ".");
			}
			
		}
		return resultado;
	}
	



	
	