/*
Ejercicios del practico 2, archivo javascript, con libreria jQuery

Cada funcion comienza en lineas divisibles entre 10.
*/



// comienza ejercicio 1
function ejercicio1() {
    var res1 = $("#resultado1");
    var num1 = Number($("#num1").val());

	if(num1== !isNaN){
		res1.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res1.removeClass("alert");
    if (num1 < 0) {
        num1 = "negativo";
    } else if (num1 === 0) {
        num1 = "cero";
    } else {
        num1 = "positivo";

    };
	res1.html("El resultado es " + num1);
		};
    //este valor lo agregamos al resultado.

};
//ejercicio 1 ends



/* **************************************************************************** */

// comienza ejercicio 2
function ejercicio2() {
    var res2 = $("#resultado2");
    var num2 = Number($("#num2").val());


    //controlar si es negativo o positivo

	if(num2== !isNaN){
		res2.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res1.removeClass("alert");
    if (num2 < 10) {
        num2 = "Menor a Diez";
    } else if (num2 === 10) {
        num2 = "Diez";
    } else {
        num2 = "Mayor a Diez";
    }
    //este valor lo agregamos al resultado.

    res2.html("El resultado es " + num2);
		};
};
//ejercicio 2 ends



/* **************************************************************************** */






// comienza ejercicio 3
function ejercicio3() {
    var res3 = $("#resultado3");
    var num3 = Number($("#num3").val());


    //controlar si es negativo o positivo
		if(num1== !isNaN){
		res3.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res3.removeClass("alert");
    if (num3 < 20) {
        num3 = "Menor a Veinte";
    } else if (num3 === 20) {
        num3 = "Veinte";
    } else {
        num3 = "Mayor a Veinte";
    }
    //este valor lo agregamos al resultado.

    res3.html("El resultado es " + num3);
		};
};
//ejercicio 3 ends
//********************************************
// comienza ejercicio 4
function ejercicio4() {
    var res4 = $("#resultado4");
    var num4 = Number($("#num4").val());

	if(num4 == !isNaN){
		res4.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res4.removeClass("alert");
    //controlar si es negativo o positivo
    if (num4 > 0) {
        num4 += ", Si es Positivo! ";
    } else if (num4 == 0) {
        num4 = "Cero";
    } else {
        num4 *= -1;
    }
    //este valor lo agregamos al resultado.

    res4.html("El resultado es " + num4);
		};
};
//ejercicio 5 ends
//********************************************
// comienza ejercicio 5
function ejercicio5() {
    var res5 = $("#resultado5");
    var num5 = Number($("#num5").val());


    //controlar si esta entre 10 a 20 mayor o menor.
	if(num5== !isNaN){
		res5.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res5.removeClass("alert");
    if (num5 > 20) {
        num5 += "y es mayor a  20";
    } else if (num5 == 20) {
        num5 = "  Veinte";
    } else if (num5 == 10) {
        num5 = "  Diez";
    } else if (num5 < 20 && num5 > 10) {
        num5 += " y es mayor a  diez y menor a veinte";
    } else if (num5 < 10) {
        num5 += " y es menor a 10";
    }
    //este valor lo agregamos al resultado.

    res5.html("El resultado es " + num5);
		};
};
//ejercicio 5 ends






//********************************************
// comienza ejercicio 6
function ejercicio6() {
    var res6 = $("#resultado6");
    var num6 = Number($("#num6").val());
    //controlar si esta entre 10 a 20 mayor o menor.
	if(num6 == !isNaN){
		res6.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res6.removeClass("alert");
    if (num6 % 7 == 0 && num6 % 3 == 0) {
        num6 += " es divisible entre 7 y 3";
    } else if (num6 % 7 == 0) {
        num6 += "  es divisible entre 7";
    } else if (num6 % 3 == 0) {
        num6 += "  es divisible entre 3";
    } else {
        num6 += " no es divisible entre 7 o 3";
    }
    //este valor lo agregamos al resultado.

    res6.html("El resultado es " + num6);
		};
};
//ejercicio 6  ends
//********************************************
// comienza ejercicio 7
function ejercicio7() {
    var res7 = $("#resultado7");
    var num7 = Number($("#num7").val());

	//validar variables
	if(num7 == !isNaN){
		res7.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res7.removeClass("alert");
    //controlar si esta entre -20 a 20.
    if (num7 < -20) {
        num7 += " CUMPLE ";
    } else if (num7 > 20) {
        num7 += " CUMPLE ";
    } else {
        num7 += " NO CUMPLE";
    }
    //este valor lo agregamos al resultado.

    res7.html("El resultado es " + num7);
		};
};
//ejercicio 7 ends
//********************************************
// comienza ejercicio 8
function ejercicio8() {
    var res8 = $("#resultado8");
    var num8 = Number($("#num8").val());

	//validar variable
	if(num8== !isNaN){
		res8.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res8.removeClass("alert");
    //controlar si esta entre 10 a 20 mayor o menor.
    if (num8 > 30) {
        num8 += " es mayor que treinta ";
    } else if (num8 < 10) {
        num8 += " es menor que 10 ";
    } else {
        num8 += " entre diez y treinta";
    }
    //este valor lo agregamos al resultado.

    res8.html("El resultado es " + num8);
		};
};
//ejercicio 8 ends
//********************************************
// comienza ejercicio 9
function ejercicio9() {
    var res9 = $("#resultado9");
    var num9a = $("#num9a").val().toLowerCase();
    var num9b = Number($("#num9b").val());
    var num9 = 0;
    //controlar temperatura
    if (num9b > 20) {
        num9b = "  ponerse ropa cómoda ";
    } else if (num9b < 10) {
        num9b = "  abrigarse mucho ";
    } else {
        num9b = "  ponerse abrigo moderado";
    }
    // el dia
    switch (num9a) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        case "sabado":
            num9a = " e Ir al trabajo.";
            break;
        case "domingo":
            num9a = " y Quedarse en casa, hoy no trabaja. ";
            break;
        default:
            num9a = " e ingresa un dia correcto.";
    }




    num9 = num9b + num9a;
    res9.html("El resultado es " + num9);
};
//ejercicio 9 ends

//********************************************
// comienza ejercicio 10a
function ejercicio10Notas() {
    var total = 0;
    var resultado = 0;
    var resultados = [];
    var cantidad = 0;
    var promedio = 0;
    var maximo = 0;
    var minimo = 0;
    var aprueban = 0;
    var reprueban = 0;
    var buenoMuyBueno = 0;
    // variables globales del ejercicio

    return function() {


        var res10 = $("#resultado10");
        //
        var res10a = $("#resultado10a");
        var res10b = $("#resultado10b");
        var res10c = $("#resultado10c");
        //
        var res10d = $("#resultado10d");
        var res10e = $("#resultado10e");
        var res10f = $("#resultado10f");
        //
        var res10g = $("#resultado10g");
        var res10h = $("#resultado10h");

        var num10 = Number($("#num10").val());

	if(num10== !isNaN){
		res10.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res10.removeClass("alert");
        if (num10 >= 0 && num10 <= 100) {

            //controla aprueba o reprueban
            if (num10 >= 90) {
                resultado = "  es bueno muy bueno. ";
                buenoMuyBueno++;
                aprueban++;
            } else if (num10 >= 70) {
                resultado = " es aprobado. ";
                aprueban++;
            } else if (num10 < 70) {
                resultado = " es reprobado. ";
                reprueban++;
            };



            //incrementar cantidad y realizar promedio
            cantidad++;
            total += num10;
            promedio = total / cantidad;
            resultados.push(num10);
            console.log(resultados);

            //ordenar el array
            resultados.sort(function(a, b) { return a - b });

            // obtener el maximo y el minimo
            var ultimaNota = resultados.length - 1;
            maximo = resultados[ultimaNota];
            minimo = resultados[0];



            //este valor lo agregamos al resultado.


            res10.html(resultado);
            //
            res10a.html(resultados + ",");
            res10b.html(cantidad);
            res10c.html(promedio.toFixed(2));
            //
            res10d.html(buenoMuyBueno);
            res10e.html(aprueban);
            res10f.html(reprueban);
            //
            res10g.html(maximo);
            res10h.html(minimo);

            $("#btn10b").show();

        } else {
            res10.html("Por favor Ingrese un numero de 1 a 100");
        };
    };
	};
};
ejercicio10 = ejercicio10Notas();
//ejercicio 10a ends
//********************************************
//ejercicio 11
function ejer11Sueldos() {
    // variables de ejercicio 11
    var totalDeSueldos = 0;
    var ordenarSueldos = [];
    var cantidadSueldos = 0;
    var sueldoMasBajo = 0;
    const IMPUESTOS = 21;
    var descuentos = 0;


    return function() {
        var res11a = $("#resultado11a");
        var res11b = $("#resultado11b");
        var res11c = $("#resultado11c");
        var res11d = $("#resultado11d");
        var res11e = $("#resultado11e");
        var num11 = Number($("#num11").val());

		//validar formulario
	if(num11== !isNaN){
		res11a.text("Ingrese un numero").addClass("alert");

	}
		else{
	  res11a.removeClass("alert");


        totalDeSueldos += num11;
        cantidadSueldos++;
        ordenarSueldos.push(num11);
        ordenarSueldos.sort(function(a, b) { return a - b });
        sueldoMasBajo = ordenarSueldos[0];
        descuentos = (totalDeSueldos * IMPUESTOS) / 100;
        //este valor lo agregamos al resultado.
        res11a.html("El total a pagar " + totalDeSueldos);
        res11b.html("Cantidad de sueldos " + cantidadSueldos);
        res11c.html("El sueldo más bajo " + sueldoMasBajo);
        res11d.html("Los sueldos a pagar " + ordenarSueldos);
        res11e.html("Los descuentos " + descuentos.toFixed(2));

    };
	};
};
ejercicio11 = ejer11Sueldos();

//**************************************************************
// comienza ejercicio12
function ejercicio12() {
    var res12 = $("#resultado12");
    var num12a = Number($("#num12a").val());
    var num12b = Number($("#num12b").val());

    //controlar si esta entre 10 a 20 mayor o menor.

		if(num12a == !isNaN ||  num12b == !isNaN ){
		res12.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res12.removeClass("alert");

    var resultado = 0;
    if (num12a > num12b) {
        resultado = num12a - num12b;
    } else if (num12a < num12b) {
        resultado = num12b - num12a;
    }

    //este valor lo agregamos al resultado.

    res12.html("El resultado es " + resultado);
		};
};
//ejercicio 12 ends





//******************************************************************************
// comienza ejercicio13




function ejercicio13() {
    var res13 = $("#resultado13");
    var num13a = Number($("#num13a").val());
    var num13b = Number($("#num13b").val());
	var num13c = $("#num13c").val();
	var resultado13;

	if(num13a == !isNaN ||  num13b == !isNaN ||  num13c == !isNaN   ){
		res13.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res13.removeClass("alert");


	if(num13c =="Sumar"){resultado13 = num13a + num13b};
    if(num13c =="Restar") {resultado13 = num13a - num13b};
	if(num13c =="Multiplicar") {resultado13 = num13a * num13b};
	if(num13c =="Dividir") {resultado13 = num13a / num13b};


    res13.html("El resultado es " + resultado13);
		};
    //End sumar13
};

//END EJERCICIO 13


/* **************************************************************************** */
// comienza ejercicio 14
function ejercicio14() {
    var res14 = $("#resultado14");
    var num14 = $("#num14").val().toLowerCase();



    var letras = num14.split("");
    var vocal = 0;
    switch (letras[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vocal = "  es vocal.";
            break;
        default:
            vocal = " no es vocal.";

    }




    //este valor lo agregamos al resultado.
    res14.html("La primera letra de " + num14 + " , " + letras[0] + vocal);

};
//ejercicio 14 ends


/* **************************************************************************** */
// comienza ejercicio 15
function ejercicio15() {
    var res15 = $("#resultado15");
    var num15a = Number($("#num15a").val());
    var num15b = Number($("#num15b").val());
    var resultado15 = 0;

		if(num15a == !isNaN ||  num15b == !isNaN   ){
		res15.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res15.removeClass("alert");

    if (num15a % num15b == 0) {
        resultado15 = " Es multiplo!";
    } else {
        resultado15 = " No es multiplo!";
    }






    //este valor lo agregamos al resultado.
    res15.html(resultado15);
		};
};
//ejercicio 15 ends





/* **************************************************************************** */


// comienza ejercicio 16
function ejercicio16() {
    var res16 = $("#resultado16");
    var num16a = Number($("#num16a").val());
    var num16b = $("#num16b").val()
    var plus = " no eres miembro plus ";
    var destino = 0;

	//validar formulario
		if(num16a == !isNaN   ){
		res16.text("Ingrese millas en numero!").addClass("alert");

	}
		else{
	  res16.removeClass("alert");

    if (num16b == "si") {
        num16a *= 2;
        plus = "  eres miembro plus ";
    }
    if (num16a >= 60000) {
        destino = " Puedes viajar a Europa.";
    } else if (num16a >= 30000 && num16a <= 60000) {
        destino = " Puedes viajar a America del Norte.";
    } else if (num16a >= 15000 && num16a <= 30000) {
        destino = " Puedes viajar por America del Sur.";
    } else {
        destino = "Necesitas más millas.";
    }



    //este valor lo agregamos al resultado.
    res16.html("Tienes " + num16a + " millas, " + plus + " : " + destino);
		};
};
//ejercicio 16 ends


/* **************************************************************************** */
// comienza ejercicio 17
function ejercicio17() {
    var res17 = $("#resultado17");
    var num17 = $("#num17").val();

    num17 = num17.toUpperCase();

    var letras = num17.split("");
    var codigo = 0;
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

    }




    //este valor lo agregamos al resultado.
    res17.html(codigo);
};
//ejercicio 17 ends
/* **************************************************************************** */
// comienza ejercicio 18
function ejercicio18() {
    var res18a = $("#resultado18a");
    var res18b = $("#resultado18b");
    var num18a = Number($("#num18a").val());
    var num18b = Number($("#num18b").val());
    var num18c = Number($("#num18c").val());
    var resultado18 = 0;
    var codigo = 0;

	//validar formulario
		if(num18a == !isNaN ||  num18b == !isNaN ||  num18c == !isNaN   ){
		res18a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res18a.removeClass("alert");

    if (num18a > num18b && num18a > num18c) {
        resultado18 = num18a += " es el mayor de los tres";
    } else if (num18b > num18a && num18b > num18c) {
        resultado18 = num18b += " es el mayor de los tres";
    } else if (num18c > num18a && num18c > num18b) {
        resultado18 = num18c += " es el mayor de los tres";
    } else {
        resultado18 = " Ingresa numeros diferentes.";

    }




    //este valor lo agregamos al resultado.
    res18a.html(resultado18);
    res18b.show();
		};
};
//ejercicio 18 ends
/* **************************************************************************** */



/* **************************************************************************** */
// comienza ejercicio 19
function ejercicio19() {
    var res19a = $("#resultado19a");
    var res19b = $("#resultado19b");
    var num19 = Number($("#num19").val());
    var resultado19 = 0;
    var codigo = 0;
	//validar formulario
		if(num19 == !isNaN  ){
		res19a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res19a.removeClass("alert");


	// control flow  &&

    if (num19 > 0 && num19 < 10) {
        resultado19 = num19 += "  esta dentro del rango";
    }else{
		resultado19 = num19 += " 	 esta fuera del rango";
	};




    //este valor lo agregamos al resultado.
    res19a.html(resultado19);
    res19b.show();
		};
};
//ejercicio 19 ends
/* **************************************************************************** */






/* **************************************************************************** */
// comienza ejercicio 20
function ejercicio20Numeros() {

	var numeros =[];
	var total =0;
	var contador = 6; //cantidad de ingresos que permite
	 // variables globales del ejercicio






	return function(){
    var res20a = $("#resultado20a");
    var res20b = $("#resultado20b");
	// donde van los resultados
    var num20 = Number($("#num20").val());

	//validar formulario
		if(num20 == !isNaN  ){
		res20a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res20a.removeClass("alert");

	if(contador > 0 ){
	numeros.push(num20);
	console.log(numeros)
	total = numeros.reduce(function(a,b){ return a + b;}, 0);
	contador--;
	}
	else if(confirm("Permitir un ingreso más?")){
		numeros.push(num20);
	console.log(numeros)
	total = numeros.reduce(function(a,b){ return a + b;}, 0);
	contador--;
	};



    //este valor lo agregamos al resultado.
    res20a.html(numeros + ",");
	res20b.html(total);
	};
	};


};
//ejercicio 20 ends
/* **************************************************************************** */
ejercicio20 = ejercicio20Numeros();





/* **************************************************************************** */
// comienza ejercicio 21
function ejercicio21Numeros() {

	var numeros =[];
	var total        = 0;
	var contador     = 5;
	var mayor20      = 0;
	var multiplos5   = 0;
	var ambos        = 0;
	var i = 0;

	//cantidad de ingresos que permite
	 // variables globales del ejercicio

	/*Indicar cuantos son multiplos de 5,
				 cuantos son mayores que 20 y cuantos cumplieron ambas condiciones en simultaneo.*/




	return function(){
    var res21a = $("#resultado21a");
    var res21b = $("#resultado21b");
	var res21c = $("#resultado21c");
	var res21d = $("#resultado21d");
	// donde van los resultados
    var num21 = Number($("#num21").val());



	//validar formulario
		if(num21 == !isNaN  ){
		res21a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res21a.removeClass("alert");

	if(contador > 0 ){
	numeros.push(num21);



	contador--;
	}
	else if(confirm("Permitir un ingreso más?")){
		numeros.push(num21);

	};

	for(i ; i <numeros.length; i++){
		if(numeros[i] % 5 === 0){
			multiplos5++;
		}
		if(numeros[i] > 20 && numeros[i] % 5 === 0  ){
			ambos++;
		}
		if(numeros[i] > 20 ){
			mayor20++;
		}

	};

    //este valor lo agregamos al resultado.
    res21a.html(numeros + ",");
	res21b.html(mayor20 + " Son mayores de 20 ");
	res21c.html(multiplos5 + " Son multiples de 5");
	res21d.html(ambos + " Son mayores de 20 y multiplos de 5");

	};
	};

};
//ejercicio 21 ends
/* **************************************************************************** */
ejercicio21 = ejercicio21Numeros();

/* **************************************************************************** */
// comienza ejercicio 22
function ejercicio22() {




//respuestas
	var res22a = $("#resultado22a");
	var res22b = $("#resultado22b");
	//variables de materiales
    var num22a = Number($("#num22a").val());
    var num22b = Number($("#num22b").val());
    var num22c = Number($("#num22c").val());
	var num22d = Number($("#num22d").val());

	//validar formulario
			if(num22a == !isNaN ||  num22b == !isNaN ||  num22c == !isNaN ||  num22d == !isNaN){
		res22a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res22a.removeClass("alert");

		var falta = "Para mas galletas Falta" ;
	var cantidad = 0;

	//RECETA
	const AZUCAR = 250;
	const HARINA = 100;
	const ACEITE = 50;
	const AGUA = 250;



	while(num22a  >= AZUCAR && num22b >= HARINA && num22c >= ACEITE && num22d >= AGUA){
			num22a  -=  AZUCAR;
			num22b  -=  HARINA;
			num22c  -=  ACEITE;
			num22d  -=  AGUA;
			cantidad++;

	};


		if(num22a < AZUCAR){
		falta  += " azucar ";
	}
	if(num22b < HARINA){
		falta  += "  harina ";
	}
	if(num22c < ACEITE){
		falta  += "  aceite ";
	}
	if(num22d < AGUA){
		falta  += "  agua ";
	}




    //este valor lo agregamos al resultado.

	res22a.html("Cantidad de Galletas " + cantidad);
	res22b.html(falta);
		};
};
//ejercicio 22 ends
/* **************************************************************************** */
// comienza ejercicio 23
function ejercicio23() {

	//respuestas
    var res23a = $("#resultado23a");
    var res23b = $("#resultado23b");
	var res23c = $("#resultado23c");
	var res23d = $("#resultado23d");
	var res23e = $("#resultado23e");

	// valores
    var num23a = Number($("#num23a").val());
	var num23b = Number($("#num23b").val());
	// variables

			if(num23a == !isNaN ||  num23b == !isNaN ){
		res23a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res23a.removeClass("alert");



	var total = "$" + num23a;
	var casa = num23a;
	console.log(casa);
	var sueldo = num23b;
	var porcentaje;
	var cantidad;
	var primer;
	var parcial;



	if(sueldo < 20000){
		porcentaje = "15%.";
		cantidad = " en 2 pagos.";
		primer = casa *15 / 100;
		parcial = (casa - primer) / 2;

	}else if(num23b >=20000){
		porcentaje = "30%.";
		cantidad = "  mensualmente por 7 años.";
		primer = casa * 30 / 100;
		parcial = (casa - primer) / 84 ;
	};








    //este valor lo agregamos al resultado.
    res23a.html("Paga inicialmente el " + porcentaje);
    res23b.html("Paga el resto  " + cantidad);
	res23c.html("Primera Cuota es de " + "$" + Math.floor(primer));
    res23d.html("El resto son cuotas de " + "$" + Math.floor(parcial) );
	res23e.html(total);
		};

};
//ejercicio 23 ends
/* **************************************************************************** */

// comienza ejercicio 24
function ejercicio24() {

	//respuestas

    var res24a = $("#resultado24a");
    var res24b = $("#resultado24b");
	var res24c = $("#resultado24c");


	// valores
    var num24 = Number($("#num24").val());
	var num24a = $("#num24a").val();
	// variables

	//validar formulario
		if(num24 == !isNaN  ){
		res24a.text("Ingrese numeros!").addClass("alert");

	}
		else{
	  res24a.removeClass("alert");

	var pago = num24;
	var tarjeta;
	var costo;

	if(num24a=="con"){
		tarjeta = true;

	}else if(num24a=="sin"){
		tarjeta = false ;

	}

	if(num24 >= 10000){
		costo = pago;

	}
	if(num24 < 10000 && tarjeta){
		costo =  pago - (pago * 4 / 100);

	}else if(num24 < 10000 && !tarjeta){
		costo = pago;
	}


    //este valor lo agregamos al resultado.
	res24a.html("Pago de " + "$" + pago);
	res24b.html(num24a + " Targeta");
	res24c.html("Costo Final: " +"$" + costo);
		};
};
//ejercicio 24 ends
/* **************************************************************************** */

//ejercicio 25 comienza
/* **************************************************************************** */
function ejercicio25Camaras() {
	var num25a = Number($("#num25a").val());
	var stock = num25a;
	var nombres =[];
	var nombresPedidos;
    var losPedidos =[];
	var pedidos = 0;
	var cantidadPedidos = 0;
	var mayorComprador = 0;
	var nombreMayorComprador;
	var i = 0;

	//cantidad de ingresos que permite
	 // variables globales del ejercicio



	return function(){
		// donde van los resultados
    var res25a = $("#resultado25a");
    var res25b = $("#resultado25b");
	var res25c = $("#resultado25c");
	var res25d = $("#resultado25d");
	var res25e = $("#resultado25e");
	//variables




	var num25b =  $("#num25b").val();
	var num25c = Number($("#num25c").val());

	//validar formulario
		if(num25a == !isNaN ||  num25c == !isNaN  ){
		res25a.text("Ingrese Valores!").addClass("alert");

	}
		else{
	  res25a.removeClass("alert");




	pedidos += num25c;

	if(num25c <= stock){
	stock -= num25c;
	cantidadPedidos++;
	i++;
	nombres.push(num25b);
	losPedidos.push(num25c);
				if(num25b == nombreMayorComprador ){
					mayorComprador += num25c;

				};


		if(num25c > mayorComprador){

			mayorComprador = num25c;
			nombreMayorComprador = num25b;

		};

	};








    //este valor lo agregamos al resultado.
    res25a.html("El resto del stock es: " + stock);
	res25b.html("Los nombres de los compradores y los pedidos:  " + nombres + "  " + " compro: " + "  "   + losPedidos);
	res25c.html("Los pedidos son: " + cantidadPedidos);
	res25d.html("El mayor comprador es: " + nombreMayorComprador + " Que compro: " + mayorComprador);
	res25e.html("Al momento el programa permite ingresar por primera vez un stock y solo permite modificarlo refrescando la pagina; el stock va decreciendo a medida que hay pedidos." +
	"<br> Los Compradores da el listado de nombres de los compradores y la cantidad que compro. <br > La cantidad de compras da cuantas compras se realizaron. " +
	"<br> El mayor comprador es una estructura de control si el numero de pedido es mayor, el mayor comprador da el numero y el nombre, tambien si el comprador es el mismo suma la cantidad de pedidos. Al momento no  almacena la cantidad que compra cada uno para poder sumar si un usario que realizo compras pequeñas realiza más compras que otro usuario que compra al mayor.");
	};

	};
};
//ejercicio 25 ends
/* **************************************************************************** */
ejercicio25 = ejercicio25Camaras();




/* **************************************************************************** */
// comienza ejercicio 26
function ejercicio26() {
    var res26a = $("#resultado26a");
	var res26b = $("#resultado26b");
	var res26c = $("#resultado26c");
	var res26d = $("#resultado26d");
	var res26e = $("#resultado26e");


	//variables
    var num26a = Number($("#num26a").val());
    var num26b = $("#num26b :selected").text();



	var PrecioTotal;
	var medioPago = num26b;
	var cantidadNoches = num26a;
	var cantidadGratis;
	var nochestotal;

	//validar formulario
		if(num26a == !isNaN){
		res26a.text("Ingrese un Numero!").addClass("alert");

	}
		else{
	  res26a.removeClass("alert");



    if (num26a >= 7 && num26b == "Targeta"){
        PrecioTotal =  40 *  num26a;
		cantidadGratis = 3;
		nochestotal = cantidadNoches + cantidadGratis;
    }else if (num26a >= 7  ){
        PrecioTotal =  40 *  num26a;
		cantidadGratis = 2;
		nochestotal = cantidadNoches + cantidadGratis;
    }else if(num26a >= 3) {
        PrecioTotal =  40 *  num26a ;
		cantidadGratis = 1;
		nochestotal = cantidadNoches + cantidadGratis;
    }else{
		PrecioTotal =  40 *  num26a ;
		cantidadGratis = "Ninguna.";
		nochestotal = cantidadNoches;
	};






    //este valor lo agregamos al resultado.
	res26a.html("Precio Total :" +"$"+PrecioTotal);
	res26b.html("Medio de Pago: " + medioPago);
	res26c.html("Cantidad de Noches: " + cantidadNoches);
	res26d.html("Cantidad de Noches Gratis: " + cantidadGratis);
	res26e.html("Cantidad de Noches Total: " + nochestotal);
		};

};
//ejercicio 26 ends


/* **************************************************************************** */
// comienza ejercicio 27
function ejercicio27Adivina() {
	//mostrar el input para jugador 2

	var num27a = Number($("#num27a").val());




	var numeroAdivinar;
	// comienza -1 al momento para no contar el ingreso del jugador 1.
	var cantidadIntentos = -1;
	var ayudaSistema;

	//mostrar los numeros elegidos
	var numeros =[];
	var respuesta;



		return function(){

			//esconder el input de crear numero
		var valor27 = $(".num27a");
		valor27.hide();

		//mostrar el input para adivinar el numero
		$(".num27b").show();
		$(".res27").show();



		// donde ingresar los resultados.
		//indica si fue correcto el ingreso
	    var res27a = $("#resultado27a");
		//cantidad de intentos
		var res27b = $("#resultado27b");
		//ayuda del sistema
		var res27c = $("#resultado27c");
		//***prueba
		var res27d= $("#resultado27d");
		//***prueba
		var res27e= $("#resultado27e");


		//variables de los valores de los inputs
		//valor de numero a adivinar
		var num27a = Number($("#num27a").val());
		//valor
		var num27b = Number($("#num27b").val());



		//validar formulario A
		// SI EL VALOR NO ES UN NUMERO, DAR ERROR
		if(num27a == !isNaN ||  num27a < 0 ||  num27a > 100  ){
		res27a.text("Ingrese un Numero del 1 al 100!").addClass("alert");
		$(".num27a").show();
		$(".num27b").hide();
	}

	//SI ES UN NUMERO PROCEDER
		else{
	  res27a.text("Cual es el numero?").removeClass("alert");

	 numeroAdivinar = num27a;
	 //validar formulario B
		// SI EL VALOR NO ES UN NUMERO, DAR ERROR
		if(num27b == !isNaN ||  num27b < 0 ||  num27b > 100  ){

		res27a.text("Ingrese un Numero del 1 al 100!").addClass("alert");

	 	}
	//SI ES UN NUMERO PROCEDER
		else{
	  res27a.text("Cual es el numero?").removeClass("alert");
	 numeros.push(num27b);


	  if(num27b == numeroAdivinar){
		  respuesta =  numeroAdivinar + " Es correcto!";
		   cantidadIntentos++;
		   res27a.addClass("correcto");
		   res27c.hide();

	  }else{
		  respuesta = " Intente un numero!";
		 cantidadIntentos++;
		  ayudaSistema = " Prueba otro numero";
		  // si el numero es mayor
		  if(num27a < num27b){
			  ayudaSistema = "Intenta un numero Menor!";
			  if(num27a - num27b  > 15 || num27b - num27a  > 15){
			  ayudaSistema += ", estas lejos!";

			  }else if((num27a - num27b  <= 4 && num27a - num27b  >= 1 )   ||  (num27b - num27a  <= 4 && num27b - num27a  >= 1 )){
			  ayudaSistema += ", muy pero muy cerca!!";
			  }
			  else if((num27a - num27b  <= 9 && num27a - num27b  >= 5 )   ||  (num27b - num27a  <= 9 && num27b - num27a  >= 5 )){
			  ayudaSistema += ", cada vez mas cerca!!";
			  }

			  else if((num27a - num27b  <= 15 && num27a - num27b  >= 10 ) ||  (num27b - num27a  <= 15 && num27b - num27a  >= 10 )){
			  ayudaSistema += ", te estas Acercando!";
			  }



		// si el numero es mayor
		  }else if(num27a > num27b){
			  ayudaSistema = "Intenta un numero Mayor!";
		  if(num27a - num27b  > 15 || num27b - num27a  > 15){
			  ayudaSistema += ", estas lejos!";

			  }else if((num27a - num27b  <= 4 && num27a - num27b  >= 1 )   ||  (num27b - num27a  <= 4 && num27b - num27a  >= 1 )){
			  ayudaSistema += ", muy pero muy cerca!!";
			  }
			  else if((num27a - num27b  <= 9 && num27a - num27b  >= 5 )   ||  (num27b - num27a  <= 9 && num27b - num27a  >= 5 )){
			  ayudaSistema += ", cada vez mas cerca!!";
			  }

			  else if((num27a - num27b  <= 15 && num27a - num27b  >= 10 ) ||  (num27b - num27a  <= 15 && num27b - num27a  >= 10 )){
			  ayudaSistema += ", te estas Acercando!";
			  }


			}
	  }
	  //GAME OVER
	  if(cantidadIntentos == 10){
		  $(".num27a").hide();
		  $(".num27b").hide();
		  respuesta = "GAME OVER!"
		  res27c.hide();
	  };


	  //respuesta
	  res27a.html( respuesta);
	  //cantidad de veces
	  res27b.html("La cantidad de intentos: " +cantidadIntentos);
	  //Ayuda del sistema
	  res27c.html(ayudaSistema);
	  //Numeros elegidos
	  res27d.html("Los numeros elegidos: " +numeros + ";");
	  // probar numero
	 // res27e.html(numeroAdivinar);
		};
		//TERMINA ELSE
		};
	};
	//TERMINA FUNCION ANIDADA
	};

	//TERMINA FUNCION ejercicio27Adivina
var ejercicio27 = ejercicio27Adivina();

//ejercicio 27 ends
//*********************************************************************
//comienza ejercicio 28
function ejercicio28(){
  //creo variables para ingresar variable input  y mostrar resultados, almacenar puntos.
  var equipoA = "Puntos Equipo A";
  var equipoB = "Puntos Equipo B";
  var val = $("#num28a");
  var puntosEquipoA = $("#resultado28a");
  var puntosEquipoB = $("#resultado28b");
  var puntos;
  var btn28 = $("#btn28");
  if(isNaN(Number(val.val()))){
    val.val("");
    val.attr("placeholder", "Ingrese numeros");
    return;
}



if(val.attr("placeholder") === equipoA){
    puntos = Number(puntosEquipoA.html());
    if(puntos + Number(val.val()) >= 30){
        puntosEquipoA.html("Ganadores!");
        btn28.attr("disabled", "true");
        return;
      };
      puntosEquipoA.html(puntos + Number(val.val()));
      val.val("");
      val.attr("placeholder", equipoB);
  }else{
      puntos = Number(puntosEquipoB.html());
      if(puntos + Number(val.val()) >= 30){
          puntosEquipoB.html("Ganadores!");
          btn28.attr("disabled", "true");
          return;
      }
      puntosEquipoB.html(puntos + Number(val.val()));
      val.val("");
      val.attr("placeholder", equipoA);
  }

};


//TERMINA FUNCION 28


function ejercicio29b() {
	$(".tateti").hide();
	$("#btn29a").val("Jugar");
};


	var jugador = "circulo";
	var ganador = "";

function ejercicio29a() {

	$(".tateti").show();
	 jugador = "circulo";
	 ganador = "";
	$("td img").attr("src", "blanco.png");

	$("td img").click(jugada);
    $("#pRes").html("Comienza jugando el " + jugador);




	function jugada() {
    if (ganador === "") {
        if ($(this).attr("src") === "blanco.png") {
            if (jugador === "circulo") {
                $(this).attr("src", "circulo.png");
                jugador = "cruz";
            } else
            {
                $(this).attr("src", "cruz.png");
                jugador = "circulo";
            }
        }
        evaluarGanador();
    }
	}
	function evaluarGanador() {
    var pos1 = levantarImagenDePos(1);
    var pos2 = levantarImagenDePos(2);
    var pos3 = levantarImagenDePos(3);
    var pos4 = levantarImagenDePos(4);
    var pos5 = levantarImagenDePos(5);
    var pos6 = levantarImagenDePos(6);
    var pos7 = levantarImagenDePos(7);
    var pos8 = levantarImagenDePos(8);
    var pos9 = levantarImagenDePos(9);

    var r1 = (pos1 === pos2) && (pos2 === pos3) && (pos1!=="blanco.png");
    var r2 = (pos4 === pos5) && (pos5 === pos6) && (pos4!=="blanco.png");
    var r3 = (pos7 === pos8) && (pos8 === pos9) && (pos7!=="blanco.png");
    var r4 = (pos1 === pos4) && (pos4 === pos7) && (pos1!=="blanco.png");
    var r5 = (pos2 === pos5) && (pos5 === pos8) && (pos2!=="blanco.png");
    var r6 = (pos3 === pos6) && (pos6 === pos9) && (pos3!=="blanco.png");
    var r7 = (pos1 === pos5) && (pos5 === pos9) && (pos1!=="blanco.png");
    var r8 = (pos3 === pos5) && (pos5 === pos7) && (pos3!=="blanco.png");

    var textoResultado = "";

    if (r1 || r2 || r3 || r4 || r5 || r6 || r7 || r8) {
        if (jugador === "circulo") {
            textoResultado = "Ganadora la cruz";
            ganador = "cruz";
			$("#btn29a").val("Rejugar");
        } else
        {
            textoResultado = "Ganador el circulo";
            ganador = "circulo";
			$("#btn29a").val("Rejugar");
        }
        $("#pRes").html(textoResultado);
    }
    else
    {
        $("#pRes").html("El turno es del jugador con " + jugador );
    }
}

function levantarImagenDePos(nPos) {
    return $("#pos" + nPos).attr("src");
}


};








/* Asignamos las funciones a los botones */

$(document).ready(function() {

    $("#btn10b").hide();
	$("#resultado18b").hide();
	$("#resultado19b").hide();
	$("#resultadoD24").hide();
	$(".res27").hide();
	$(".num27b").hide();
	//comenzar con valor 0 en ejercicio 27
	$("#num27b").val(0);
	//ejercicio 29
	$(".tateti").hide();

    //ejercicio 1
    $("#btn1").on("click", ejercicio1); // linea 10
    $("#btn2").on("click", ejercicio2); //linea 50
    $("#btn3").on("click", ejercicio3); //
    $("#btn4").on("click", ejercicio4); //
    $("#btn5").on("click", ejercicio5); //
    $("#btn6").on("click", ejercicio6); //
    $("#btn7").on("click", ejercicio7); //
    $("#btn8").on("click", ejercicio8); //
    $("#btn9").on("click", ejercicio9); //
    $("#btn10a").on("click", ejercicio10); //
    $("#btn11").on("click", ejercicio11); // linea 310
    $("#btn12").on("click", ejercicio12);
    // ejercicio 13
    $("#btn13").on("click", ejercicio13);;
    $("#btn14").on("click", ejercicio14);
    $("#btn15").on("click", ejercicio15);
    $("#btn16").on("click", ejercicio16);
    $("#btn17").on("click", ejercicio17);
    $("#btn18").on("click", ejercicio18);
    $("#btn19").on("click", ejercicio19);
	$("#btn20").on("click", ejercicio20);
	$("#btn21").on("click", ejercicio21);
	$("#btn22").on("click", ejercicio22);
	$("#btn23").on("click", ejercicio23);
	$("#btn24").on("click", ejercicio24);
	$("#btn25").on("click", ejercicio25);
	$("#btn26").on("click", ejercicio26);
	$("#btn27a").on("click", ejercicio27);
	$("#btn27b").on("click", ejercicio27);
  $("#btn28").on("click", ejercicio28);
	//ejercicio 28
	//29
	$("#btn29a").on("click", ejercicio29a);
	$("#btn29b").on("click", ejercicio29b);


});
