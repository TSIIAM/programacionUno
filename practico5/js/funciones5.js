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
	//function para ejercicio 2 contarLetras
function contarLetras(inputA,inputB){
		var  letrasVeces = 0;
	for(var i = 0; i < inputA.length-1;i++){
		if(inputA[i] == inputB){
		letrasVeces++;
		}

	}
	return letrasVeces;
}
		//************************************************************************
		//Solicitar un texto e indicar cuantas vocales presenta.
	//function para ejercicio 3 contarVocales
function contarVocales(inputA){

var vocales =["a","e","i","o","u"];
	var cantidadVocales = 0;
	for(var i = 0; i <  inputA.length;i++){
		for(var j = 0; j < vocales.length; j++){
				if(inputA[i] == vocales[j]){
				cantidadVocales++;
				}
		}

	}
	return 	cantidadVocales;

}
			//************************************************************************
		//Ingresar un texto y al presionar un botón convertir todo el texto a minúsculas y solo la primera letra de la primera palabra a mayúsculas.
	//function para ejercicio 6 Capitalizar
function capitalizar(texto){
	var resultados = texto[0].toUpperCase() ;
	for(var i = 1; i < texto.length; i++ ){
		resultados += texto[i].toLowerCase();
	}
	return resultados;
}
	//************************************************************************
		//Ingresar dos textos y verificar si el segundo es una subcadena del primero.
	//function para ejercicio 7 esSubcadena()
function esSubcadena(texto,subcadena){
	var result = texto.indexOf(subcadena) > -1;
	return result;
}

	//************************************************************************
		//Dado un texto contar la cantidad de palabras que contiene.
		//Para separar en esta estapa consideraremos como separador de palabras únicamente los espacios en blanco.
	//function para ejercicio 8 cantidadPalabras()
function cantidadPalabras(texto){
	var result = texto.split(" ").length;
	return result;
}

	//************************************************************************
		//Dado un texto indicar si comienza y termina con la misma letra.
	//function para ejercicio 9 comienzoFinal()
function comienzoFinal(texto){
	var result;
	var palabra = texto;
	var fin = [];
	for(var i = texto.length-1 ; i > -1 ; i--){
		fin.push(texto[i]);
	}
	if(palabra[0] == fin[0]){
		result = true;
	}else{
		result = false;
	}

	return result;
}

//************************************************************************
//Sabiendo que la primera letra de una matrícula indica el departamento al que pertenece el vehículo.
//Ingresar una matrícula(formato:AAA-1111) e informar a que departamento pertenece ese vehiculo.
//EJERCICIO 10
function matricula(texto,btn)
{
var matricula = texto.toUpperCase();
	btn.removeClass(" btn btn-danger");
    var letras = matricula.split("");
    var codigo = "";
    switch (letras[0]) {
        case "S":
            codigo = "La matricula es de Montevideo.";
            break;
        case "A":
            codigo = "La matricula es de Canelones.";
            break;
        case "B":
            codigo = "La matricula es de Maldonado.";
            break;
        case "C":
            codigo = "La matricula es de Rocha.";
            break;
        case "D":
            codigo = "La matricula es de Treinta y Tres.";
            break;
        case "E":
            codigo = "La matricula es de Cerro Largo.";
            break;
        case "F":
            codigo = "La matricula es de Rivera.";
            break;
        case "G":
            codigo = "La matricula es de Artigas.";
            break;
        case "H":
            codigo = "La matricula es de Salto.";
            break;
        case "I":
            codigo = "La matricula es de Paysandu.";
            break;
        case "J":
            codigo = "La matricula es de Rio Negro.";
            break;
        case "K":
            codigo = "La matricula es de Soriano.";
            break;
        case "L":
            codigo = "La matricula es de Colonia.";
            break;
        case "N":
            codigo = "La matricula es de San Jose.";
            break;
        case "O":
            codigo = "La matricula es de Flores.";
            break;
        case "P":
            codigo = "La matricula es de Lavalleja.";
            break;
        case "Q":
            codigo = "La matricula es de Durazno.";
            break;
        case "R":
            codigo = "La matricula es de Tacuarembo.";
            break;
        default:
            codigo = "Ingrese una matricula correcta.";
			btn.addClass("btn btn-danger");
    }

	return codigo;
}
//************************************************************************
	/*Hacer un programa que ingrese una cadena de caracteres y determine el número de mayúsculas y el número de minúsculas.

Se deberán eliminar los espacios en blanco antes de hacer el cálculo y se puede considerar cualquier caracter que no sea a-z o A-Z como mayúscula o minúscula.

En caso de generar una solución más compleja se puede consultar la siguiente tabla.*/
//funcion para ejercicio 11 contarMinusMayus()
function contarMinusMayus(texto){
var mayus = 0;
var minus = 0;
var resultado = "";


		for(var i = 0; i < texto.length; i++){
				if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
					mayus++;
				}else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
					minus++
				}

				}

resultado = "La cantidad de Mayusculas es " + mayus + " y la cantidad de minusculas es " + minus +".";

return resultado;
}



	//************************************************************************
		//Dado un texto Indicar si es un palíndromo.Tener en cuenta que no se tienen en cuenta los espacios en blanco.
	//function para ejercicio 12 palindromo()
function palindromo(input){
	//voy a utilizar regular expresion para remover caracteres en blanco, si uno es igual al otro, es palindromo
	return input.replace(/[\W_]/g, '').toLowerCase() ===  input.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
	/*
el parametro input hago un remplazo del espacios en blanco y a minuscula, si es estrictamente igual al input remplazadonde los espacios blancos,
en minuscula, e invertido  split reverse join, entonces es palindromo
	*/
}
	//************************************************************************
		//Dado un texto y una letra mostrar el texto ingresado, remplazando la letra indicada por "*"
	//function para ejercicio 13 remplazar()
function remplazar(input,remplazo){

	var nuevaPalabra = [];
for(var i = 0 ; i < input.length; i++){
	nuevaPalabra.push(input[i].replace(remplazo,"*"));
}
	var resultado = nuevaPalabra;
	return resultado;
}

//************************************************************************
//Crear una función que reciba como parámetro un texto y devuelva la posición en la que se encuentra la penúltima ocurrencia de la letra "a" dentro de ese texto.
//En caso de que haya una sola "a" o no haya ninguna, devolver -1.
//function para ejercicio 14 indexpenultima()
function indexpenultima(input,letra){
var posLetra = 0;

var resultado;
for(var i = input.length; i > 0 ; i-- ){
	if(posLetra == 2){
		break;
	}
	if(input[i] == letra){
		resultado = i;
		posLetra++;
	}else{
		resultado = -1;
	}

}


return resultado;
}
//************************************************************************
//Escribir una función que reciba como parámetro una palabra y devuelva la cantidad de veces que se aparece la primera letra de esa palabra en toda la palabra.
//function para ejercicio 15 cantidadPrimeraLetra()
function cantidadPrimeraLetra(input){
var primeraLetra = input[0];
var contador = 0;
var resultado = "";
for(var i = 0; i < input.length; i++){
	console.log(input[i]);
	if(input[i] == primeraLetra){
		contador++;
	}

}



return resultado = "La cantidad de veces que " + "<span style='color:green'>" + primeraLetra.toUpperCase() + "</span>" + " aparece en " + "\"" + input + "\"" + " es " + contador + ".";
}
//************************************************************************
//Ingresar una cédula de identidad uruguaya en un campo de texto con formato 1.111.111-1.
//Utilizando el algoritmo de cálculo del dígito verificador ( el posterior a la barra), verificar si la ingresada es una cédula válida.

//Se toman los primeros siete numeros y se multiplican cada uno(respetando el lugar, es decir: primero por primero, segundo por segundo) por 2987634.
//function para ejercicio 16 verificarCedula();

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
	for(var numeral = digito ; numeral % 10 !== 0 + 1; numeral++){
		resultado   =  numeral - digito;

	}
	

	
return resultado = "El digito verificador:"  + resultado +" y la cedula es " + input + "-"+  resultado ;
}

//************************************************************************
/*
	La fórmula verifica un número contra su digito de chequeo incluido, el cual usualmente agregado a un número de cuenta parcial para generarl el número completo.Este número de cuenta debe pasar la siguiente prueba:
A partir del dígito de chequeo incluido, el cual está a la derecha de todo el número, ir de derecha a izquierda duplicando cada segundo dígito.
Sumar los digitos del resultado:(ejemplo: 10 = 1+0 = 1,14 = 1+4 = 5) juntos con los digitos sin duplicar del numero original.
Si el total de modulo 10 es igual a 0(si el total termina en cero), entonces el número es valido de acuerdo con la fórmula Luhn, de lo contrario no es válido.
Supongamos un ejemplo de un numero de cuenta "7992739871", que contará con un digito de control adicional, por lo que es de la forma 799273981x:
*/
//functionS para ejercicio 17 verificarLuhn();
function plus(a, b) { return a + b; };

function sumarDigitos(input){
	var sumaDigitos = input
		//lo pasamos a texto
		
        .toString()
		//a array 
        .split('')
		// a numeros
        .map(Number)
		// sumamos cada valor
        .reduce(plus);
		return sumaDigitos;
}


function obtenerVerificador(input){
		// almacenar el numero de cuenta en un array
	var cuenta = input.split("");
	// segundo paso duplicar  los numeros de derecha a izquierda
	var duplicado = [];
	var indiceImpar;
	//variable para sumar los digitos de los impares
	var sumaImpares = 0;
	//variable para sumar todos los digitos
	var sumDigitos = 0;
	//variable para  almacenar el ultimo digitos
	var digitoVerificador = 0;
	//recorrer el array, ingresar los valores de la multiplicacion de la cuenta
	for(var i = 0 ; i < cuenta.length; i++){
		//solo se duplican cada segundo digito, estos son los impares del array
		if( i % 2 != 0)
		{
		indiceImpar =(cuenta[i] * 2);
		//a ese numero se le suma sus digitos
		sumaImpares = sumarDigitos (indiceImpar);
		duplicado.push(sumaImpares);	
		}else{
			duplicado.push(cuenta[i]*1);	
		}	
	}	
	//Paso 1 Calculamos la suma de los digitos
	sumDigitos =  duplicado.reduce(plus);
	//Paso 2. Multiplicamos por 9
	sumDigitos *= 9; 
	//Paso 3. Tomar el ultimo digito
	
	digitoVerificador = Number(sumDigitos.toString().slice(-1));
return digitoVerificador;
}

//function para verificar
function verificarCodigo(input){
	var correcto;
	//almacenar numero a verificar
	var ultimoNumero = input.toString().charAt( input.length - 1 );
	//almacenar el codigo sin el ultimo numero del input
	var codigo = input.substr(0, input.length - 1);
	//obtener el verificador del codigo
	var verificador = obtenerVerificador(codigo);
if(ultimoNumero == verificador){
		correcto = true;
	}else{
		correcto = false;
	}
	return correcto;
}