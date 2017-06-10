/*
Ejercicios del practico 3, archivo javascript, con libreria jQuery 

Cada funcion comienza en lineas divisibles entre 10.
*/
//al cargar completamente practico3.html
$(document).ready(main);




//funcion principal
function main(){
	//random backgroundColor del body al iniciar
		  colRojo = Math.floor((Math.random() * 256));
       colVerde = Math.floor((Math.random() * 256));
       colAzul = Math.floor((Math.random() * 256));
	$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
	
	var ejer = $(".ejerbtn");
	//funcion para mostrar los ejercicios
	mostrar(ejer);
	//**********************************************
        /*
	$("#num7").blur(validoVacio);
	$("#num8A").blur(validoVacio);
	$("#num8B").blur(validoVacio);
        $("#num9A").blur(validoVacio);
        $("#num9B").blur(validoVacio);
        $("#num10A").blur(validoVacio);
        $("#num10B").blur(validoVacio);
        $("#num11A").blur(validoVacio);
        $("#num11B").blur(validoVacio);
	
	*/
	
	//
	
	
	//*********************************************
	//procesos de estructuras de control repetitivas
	$("#btn1").on("click", ejer1);	
	$("#btn2").on("click", ejer2);
	$("#btn3").on("click", ejer3);
	$("#btn4").on("click", ejer4);
	$("#btn5").on("click", ejer5);
	$("#btn6").on("click", ejer6);
	$("#btn7").on("click", ejer7);
	$("#btn8").on("click", ejer8);
	$("#btn9").on("click", ejer9);
	$("#btn10").on("click", ejer10);
	$("#btn11").on("click", ejer11);
	$("#btn12").on("click", ejer12);
	$("#btn13").on("click", ejer13);
	$("#btn14").on("click", ejer14);
	$("#btn15").on("click", ejer15);
	$("#btn16").on("click", ejer16);
	$("#btn17").on("click", ejer17);
	$("#btn18").on("click", ejer18);
	
	
}
//*********************************************************************

//esta funcion toma una clase  ejer y busca la clase dentro .ejercicio
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
	
//*****************************************************************
function ejer1(){
	var resultado = $("#resultado1");
	var total = "";
	
	for(var i = 1; i <1001; i++){
		total += i + "<br />";
	};//ingresamos todo dentro p  del div resultado 
	resultado.html(total);

};
//*********************************************************************
//*********************************************************************
function ejer2(){
	var resultado = $("#resultado2");
	var total = "";
	for(var i = -100; i < 11; i++){
		total +=  i + " → ";
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	resultado.addClass("importante");

};
//*********************************************************************
//*********************************************************************
function ejer3(){
	var resultado = $("#resultado3");
	var total = "";
	for(var i = 40; i > 11; i--){
		total +=  i + " ♫ ";
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	
};
//*********************************************************************
//*********************************************************************
function ejer4(){
	var resultado = $("#resultado4");
	var total = "";
	for(var i = 20; i > -31; i--){
		total +=  i + " → ";
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	resultado.addClass("importante");
	
};
//*********************************************************************
//*********************************************************************
function ejer5(){
	var resultado = $("#resultado5");
	var total = "";
	for(var i = 1; i < 451 ; i++){
		if( i % 5 == 0){
		total +=  i + " → ";
		};
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	resultado.addClass("importante");
	
};
//*********************************************************************
function ejer6(){
	var resultado = $("#resultado6");
	var total = "";
	for(var i = -33; i < 231 ; i++){
		if( i % 4 === 0){
		total +=  i + " → ";
		};
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	resultado.addClass("importante");
	
};
//*********************************************************************
//*********************************************************************
function ejer7(){
	var input = $("#num7").val();
	var resultado = $("#resultado7");
	var total = "";
	var boton = $("btn7");
        boton.removeAttr("disabled"); 
        
        //ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(input <2  || input >50){
        resultado.html("Ingrese numero mayor a 2 o menor a 50!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
    
		boton.val("Ingresar"); 
	for(var i = 0; i < input ; i++){
		total +=  "-";
		
	};//ingresamos todo dentro p  del div resultado 
	total += " fin ";
	resultado.html(total);
	resultado.addClass("importante");
	
};
//*********************************************************************
//*********************************************************************
function ejer8(){
	var inputA = Number($("#num8A").val());
	var inputB = Number($("#num8B").val());
	var resultado = $("#resultado8");
	var total =  "";
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});

	
	if(numeros[0] == numeros[1]){
			total = " Son iguales. ";
			
		}else if(numeros[1]- numeros[0] == 1){
			total = "No hay numeros entre esto dos numeros";
		}else{
	for(var i = numeros[0]+1; i <	numeros[1] ; i++){
		total +=  i + ".";
		
		
		
	};
	};//ingresamos todo dentro p  del div resultado 
	resultado.html(total);
	resultado.addClass("importante");
	
};
//*********************************************************************
//*********************************************************************
function ejer9(){
	var inputA = Number($("#num9A").val());
	var inputB = Number($("#num9B").val());
	var resultado = $("#resultado9");
	var total =  "";
	

	
	for(var i = 0; 		i   <=	inputA ;  i++){
		for(var j = 0 ; j 	<=  inputB  ; j++){
			total += " * ";
		}
		total += " * " + "<br>" ;
		
		
	};//ingresamos todo dentro p  del div resultado 
	resultado.html(total);
	resultado.addClass("importante");
};
//*********************************************************************
//Pedir dos números y mostrar el primer número incluido entre ellos que sea múltiplo de 4 y 6 a la vez.
function ejer10(){
	var inputA = Number($("#num10A").val());
	var inputB = Number($("#num10B").val());
	var resultado = $("#resultado10");
	var total =  "";
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});

		
		
		//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA < 1){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
		
		
		
		
	for(var i = numeros[0]; i <=	numeros[1] ; i++){
		if(( i % 4 == 0 )&&( i % 6 == 0)){
		total +=  i + " → ";
		break;
		};
		

	};//ingresamos todo dentro p  del div resultado 
	total += "fin" ;
	resultado.html(total);
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Utilizando solamente sumas, implementar el producto de dos números.
function ejer11(){
	var inputA = Number($("#num11A").val());
	var inputB = Number($("#num11B").val());
	var resultado = $("#resultado11");
		
		
		
		
		//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA < 1){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
		
		
		
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});
	var total = 0;
        
    
        
	for( var i = 1;  i <=  numeros[0]; i++){
		total += numeros[1];
		
	};//ingresamos todo dentro p  del div resultado 
	resultado.html("El producto de ambos números es " + total + "." );
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Pedir dos números, y mostrar el producto de los números comprendidos entre ellos (inclusive). 
//Sólo se realizarán pruebas donde el primer número sea menor al segundo, no es necesario controlarlo.
function ejer12(){
	var inputA = Number($("#num12A").val());
	var inputB = Number($("#num12B").val());
	var resultado = $("#resultado12");
		
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});
	var total = 1;
    
    
	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA > inputB){
        resultado.html("Ingrese Primer numero menor al segundo!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
    var losNum = [];

   
	for( var i = numeros[0] ; i <= numeros[1]; i++){
		   losNum.push(i);
	};
	for(var i = 1 ; i <= losNum.length; i++){
		total *= losNum[i-1];
		
	};
	//ingresamos todo dentro p  del div resultado 
	resultado.html("Los numeros son: " + losNum + "<br >" + " y el producto es " + total);
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Pedir dos números, y mostrar el producto de los números comprendidos entre ellos (inclusive). 
//Sólo se realizarán pruebas donde el primer número sea menor al segundo, no es necesario controlarlo.
function ejer12(){
	var inputA = Number($("#num12A").val());
	var inputB = Number($("#num12B").val());
	var resultado = $("#resultado12");
		
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});
	var total = 1;
    
    
	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA > inputB){
        resultado.html("Ingrese Primer numero menor al segundo!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
    var losNum = [];

   
	for( var i = numeros[0] ; i <= numeros[1]; i++){
		   losNum.push(i);
	};
	for(var i = 1 ; i <= losNum.length; i++){
		total *= losNum[i-1];
		
	};
	//ingresamos todo dentro p  del div resultado 
	resultado.html("Los numeros son: " + losNum + "<br >" + " y el producto es " + total);
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Ingresar tres números y al presionar un boton mostrar todos los numeros multiplos del tercero que estan entre los dos primeros numeros,
// contemplar el caso que los dos primeros numeros se ingresen invertidos ( primero el mayor y despues el menor)
function ejer13(){
	var inputA = Number($("#num13A").val());
	var inputB = Number($("#num13B").val());
	var inputC = Number($("#num13C").val());
	var resultado = $("#resultado13");
		
	var numeros = [];
	numeros.push(inputA);
	numeros.push(inputB);
	numeros.sort(function(a,b){ return a-b});
	var total = [];
    
    
	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA > inputB){
        resultado.html("Ingrese Primer numero menor al segundo!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
    var losNum = [];
	
	for( var i = numeros[0] ; i <= numeros[1]; i++){
		   losNum.push(i );
	};
	for(var i = 1 ; i <= losNum.length; i++){
		if(losNum[i] % inputC === 0){
		total.push(losNum[i] );
		};
	};
	//ingresamos todo dentro p  del div resultado 
	resultado.html("Los numeros son: " + losNum + "<br >" +" y los multiplos de " + inputC + "<br >" + " son " + total+ ".");
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Ingresar un número y calcular su factorial .
function ejer14(){
	var inputA = Number($("#num14").val());
	var resultado = $("#resultado14");

	
	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA < 1){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	
	
	
	var total = 1;
    var losNum = [];
	
	for( var i = inputA ; i >= 1 ; i--){
		   losNum.push(i);
		   total *= i;
	};
 
	resultado.html("Los numeros son: " + losNum + " y el factorial es " + total);
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Pedir un numero y devolver la cantidad de digitos que tiene.
function ejer15(){
	var inputA = Number($("#num15").val());
	var resultado = $("#resultado15");

	
	
	
		//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA < 1){
        resultado.html("Ingrese un numero mayor a 0!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	
	var num = inputA;
	
	var total = 0;
	while(true){
		if(num < 10){
			total++;
			break;
		}else if(num >= 10)
			num /= 10;
			total++;
	};

		
	
	

	//ingresamos todo dentro p  del div resultado 
	resultado.html("Los digitos que tiene son " + total);
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Pedir un numero y dividirlo entre 20 hasta que el resultado sea menor a 100, mostrar el resultado. 
//Se debe validar que el numero ingresado sea mayor a 2000, en caso contrario avisarle al usuario y volver a solicitar el número.
function ejer16(){
	var inputA = Number($("#num16").val());
	var resultado = $("#resultado16");

	
	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA < 2000){
        resultado.html("Ingrese un numero mayor a 2000!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	
	var total = inputA;
	while(total > 100){
		total /= 20;
	}
	
		
	
	

	//ingresamos todo dentro p  del div resultado 
	resultado.html("El resultado " + total + ".");
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Utilizando solamente sumas y restas, obtener el cociente y resto de la division entera entre un dividendo y un divisor.
function ejer17(){
	var inputA = Number($("#num17A").val());
	var inputB = Number($("#num17B").val());
	var resultado = $("#resultado17");


	
	
	var cociente = 0;
	var resto = 0;
	
	
while(true){
		inputA -= inputB ;
		cociente++;
		
		if(inputA < inputB){
			if(inputA == inputB){
				resto = 0;
				
			}else{
				resto= inputA;
			}
			break;
		}
	}
	
	

	//ingresamos todo dentro p  del div resultado 
	resultado.html("Cociente es: " + cociente + "<br>" + "El resto es: " + resto );
	resultado.addClass("importante");
		
	};
//*********************************************************************
//*********************************************************************
//Solicitar un numero al usuario e imprimir en un párrafo todos los números mayores a 30 y menores a 200 que sean multiplos del numero ingresado por el usuario y pares simultaneamente.
function ejer18(){
	var inputA = Number($("#num18").val());
	var resultado = $("#resultado18");


	//ACA VALIDAMOS Y HACEMOS MAGIA ******************************************************
        if(inputA > 15){
        resultado.html("Ingrese un numero menor a 15!!").addClass("importante");
        $(this).addClass("btn btn-danger");
        $("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
		return;
    }
    //estilo 
    $(this).removeClass(" btn btn-danger");
    $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
	var resultados = "";
	
	var losNum = [];
	var total = 1;
	while(total < 200){
		total *= inputA ;
		
		if(total > 30 && total < 200){
			losNum.push(total);
			
		}
	}
	
	if(losNum.length == 1){
		resultados ="El resultado es: ";
		
	}else if( losNum.length > 1){
		resultados = "Los  resultados son: ";
		
	}
		
	
	

	//ingresamos todo dentro p  del div resultado 
	resultado.html(resultados + losNum + ".");
	resultado.addClass("importante");
		
	};
//*********************************************************************