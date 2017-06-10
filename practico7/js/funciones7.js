/*
Aqui las funciones para el practico 7 en un archivo separado.

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
			$(this).parent().siblings().slideUp("slow");
			ejercicio.fadeOut();
			$(this).nextAll().eq(1).slideDown("slow");
		


			}else if(!ventana){
				 var colRojo = Math.floor((Math.random() * 256));
			  var colVerde = Math.floor((Math.random() * 256));
			  var colAzul = Math.floor((Math.random() * 256));
			  $("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul + ")");
			  ventana = true;
			
			$(this).closest(btn).removeClass("cerrar");
			
			$(this).nextAll().eq(1).slideUp("slow");
			$(this).parent().siblings().slideDown("slow");
			resultado.val();
			}

	});


};
//variables con texto informativo para los ejercicios
	function infoData(){
	var info2 = $("#info2");
	var info3 = $("#info3");
	var info4 = $("#info4");
	var info5 = $("#info5");
	var informacion2 = 
	{
	"texto2a"  :	"<p> A)Crear la interfaz HTML que permita el ingreso de los datos solicitados.El dato correspondiente al género se debe capturar a traves de un combo desplegable.</p>",
	"texto2b" : 	"<p> B)Crear la funcionalidad que permita almacenar peliculas, teniendo en cuenta que se debe validad que el año sea numerico y que el nombre sea unico( que no exista otra pelicula con ese nombre).</p>",
	"texto2c" : 	"<p> C)Agregar a la interfaz HTML a un botón y una tabla de datos y listar en ella todas las peliculas que tengan un promedio mayor o igual a 4. El promedio se obtendrá de la division del total de puntos recibidos entre la cantidad de votantes. Al hacer click en el boton  se cargara la  tabla.</p>",
	"texto2d" : 	"<p> D)Crear un nuevo campo de texto en el que se pueda ingresar el nombre de una pelicula y un boton que al ser presionado busque en el listado de las peliculas esa pelicula ingresada   en el campo de texto y muestre un parrafo en el HTML toda la informacion disponible de la pelicula(nombre,año, genero, cantidad de votantes y total de puntos).En caso de que la pelicula no este en el listado informar al usuario que esa pelicula no se encuentra en el listado.</p>"
	}
		for(x in informacion2){
	 info2.append(informacion2[x]);
	}
	
	var text3a ="<p> A)Crear la interfaz HTML y toda la funcionalidad para registrar ventas. Para cada venta se debe ingresar un numero de tipo de guitarra(1-clasica,2-electrica y 3-electroacustica) y la cantidad de guitarras que se compran.Solo se comprara un tipo de guitarra por venta.Esas ventas deberan quedar registradas en arrays asociativos dentro de un array indexado llamado ventas.Se debe validad que ambos valores(tipo y cantidad) sean numericos.	</p>"; 
	var text3b ="<p> B)Crear una funcion que reciba como parametro un tipo de guitarra y devuelva el total de pesos generados en total por la venta de ese tipo de guitarras. </p>"; 
	var text3c = "<p> C)Utilizando la funcion de la parte b, crear la interfaz HTML y la funcionalidad para listar en una tabla los totales generados por la venta de cada tipo de guitarra. </p>"; 
	var informacion3 = 
	{
	"texto3a"  :	text3a,
	"texto3b" : 	text3b,
	"texto3c" :		text3c
	}
		for(x in informacion3){
	 info3.append(informacion3[x]);
	}
	
	
		var text4a = "<p> A)Crear la interfaz HTML que permita el ingreso de los datos solicitados.El dato correspondiente a la marca se debe capturar a traves de un combo desplegable.	</p>"; 
		var text4b = "<p> B)Crear la funcionalidad javascript que permita almacenar ventas, teniendo en cuenta que se debe validad que el predcio sea numerico y el modelo no este vacio. </p>"; 
		var text4c = "<p> C)Agregar a la interfaz HTML un buton y una tabla de datos y listar en ella todas las ventas que superen los dos mil pesos.El total de una venta se obtendra de la multiplicacion del precio por la cantidad de unidades.Al hacer click en el boton se cargara la tabla </p>";
	
	
	
	var informacion4 = 
	{
	"texto4a"  :	text4a,
	"texto4b" : 	text4b,
	"texto4c" :		text4c,
	}
	informacion4.texto4d = "<p> D)Crear un nuevo campo de texto en el que se pueda ingresar un modelo y un boton que al ser presionado permita calcular el total de unidades vendidas para ese modelo. Mostrar en un parrafo nuevo en el HTML la cantidad de unidades obtenida.</p>";
			for(x in informacion4){
	 info4.append(informacion4[x]);
	}
	
	var informacion5 = {};
	informacion5.text5a = "<p>B)Crear la funcionalidad javascript para almacenar los datos que se ingresan validando que el nombre no este vacio y que el talle sea un valor numerico y este entre 30 y 46. Se valorara que el dato de nacional o importado se obtenga a partir de combo desplegable.</p>";
	informacion5.text5b = "<p>C)Crear una funcion que reciba como parametro un array de zapatos (con el formato del ejercicio b) y un valor (nacional o importado) y devuelva la cantidad de zapatos con talle mayor a 38 que esten en el array recibido y sean del tipo recibido en el segundo parametro.</p>";
	informacion5.text5c = "<p>Atencion, se solicita que la funcion reciba como parametro el array a trabajar, no se debe trabajar consultando una variable global.</p>";
	informacion5.text5d = "<p>D)Utilizando la funcion creada en la parte c, y el array de zapatos disponible, informar en un nuevo parrafo si hay mas zapatos nacionales de talle mayor a 38 o si hay mas importados de talle mayor a 38.</p>"
			for(x in informacion5){
	 info5.append(informacion5[x]);
	}
		
}
//constructor de objeto para el ejercicio 1
	function user(nombre,edad,nacionalidad){
this.nombre = nombre;
this.edad = edad;
this.nacionalidad = nacionalidad;
}

//constructor objeto para el ejercicio 2
	function peliculas(nombre,año,genero,votantes,puntos){
this.nombre = nombre;
this.año = año;
this.genero = genero;
this.votantes = votantes;
this.puntos = puntos;
this.promedio = puntos / votantes;
this.promedio.toFixed(2);
}
//constructor objeto para el ejercicio 3
	function guitar(tipo,cantidad){
		this.tipo = tipo;
		this.cantidad = cantidad;
		
		if(tipo == "Clásicas" ){
				this.precio = 300;
			}else if(tipo == "Electricas" ){
				this.precio = 450;
			}else{
				this.precio = 500;
			}
		
		this.total = cantidad *  this.precio;
		
		
}
//constructor objeto para el ejercicio 4
function celular(marca,modelo,precio,cantidad){
	this.marca = marca;
	this.modelo = modelo;
	this.precio = precio;
	this.cantidad = cantidad;
	this.total = precio * cantidad;
}
//constructor objeto para el ejercicio 5
function zapato(marca,talle,color,origen){
	this.marca = marca;
	this.talle = talle;
	this.color = color;
	this.origen = origen;
}







//	funcion para crear la tabla con los  parametros de los objetos
	function tablaUsers(users){
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><td>" + "Nombres" + "</td><td>" + "Edad" +"</td><td>" + "Nacionalidad" + "</td></tr>";
			for(var i = 0; i < users.length ; i++){
				table +=  "<tr>";
					for(x in users[i]){
					table +=  "<td>" + users[i][x]+  "</td>";
					} 
				table +=  "</tr>";
			}
			table += "</table>";
			return table;
	
	}
	//idem a crear la tabla pero solo muestra los mayores igual de 18
		function UsersMayores (users){
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><td>" + "Nombres" + "</td><td>" + "Edad" +"</td><td>" + "Nacionalidad" + "</td></tr>";
			for(var i = 0; i < users.length ; i++){
				console.log(users[i]);
				table +=  "<tr>";
					if(users[i].edad >= 18){
						for(x in users[i]){
						table +=  "<td>" + users[i][x]+  "</td>";
						} 
					}	
				table +=  "</tr>";
			}
			table += "</table>";
			return table;
	
	}
	

	
	//funciones para ejercicio 2
		function tablaPeliculas(peliculas){
		var table = "<table class='table table-striped table-hover'>";
		table +=   "<tr><th>" + "Pelicula" + "</th><th>" + "Año" +"</th><th>" + "Genero" + "</th><th>" +  "Votantes" + "</th><th>" + "Puntos" + "</th><th>" + "Promedio" + "</th></tr>";
			for(var i = 0; i < peliculas.length ; i++){
				table +=  "<tr>";
					for(x in peliculas[i]){
					table +=  "<td>" + peliculas[i][x]+  "</td>";
					} 
				table +=  "</tr>";
			}
			table += "</table>";
			return table;
	
	}
	
	//funcion para ejercicio 2
		function peliculasMejores (peliculas){
			var table = "<table class='table table-striped table-hover'>";
			table +=  "<tr><th>" + "Pelicula" + "</th><th>" + "Año" +"</th><th>" + "Genero" + "</th><th>" +  "Votantes" + "</th><th>" + "Puntos" + "</th><th>" + "Promedio" + "</th></tr>";
				for(var i = 0; i < peliculas.length ; i++){

					table +=  "<tr>";
						if(peliculas[i].promedio >= 4){
							for(x in peliculas[i]){
							table +=  "<td>" + peliculas[i][x]+  "</td>";
							} 
						}	
					table +=  "</tr>";
				}
			table += "</table>";
			return table;
	
	}
	//buscar pelicula ejercicio 2
		function existePelicula(titulos,nombre){
			var noEsta = true;
			
			if(titulos.length == 0){
				titulos.push(nombre);
			}
			
			for(var i = 0 ; i  < titulos.length; i++){
						if(nombre == titulos[i]){
						noEsta = false;
				}
		}	
			

			for(var i = 0 ; i  <= titulos.length ; i++){
				if(nombre == titulos[i]){
					console.log(nombre);
					noEsta =  false;
					break;
				}else{
					titulos.push(nombre);
					
				}
				
				return noEsta;
			
			}
		}
		 
		//funcion para buscar la pelicula 2
		
		function buscarPelicula(titulos,peliculas,input,resultado){
		var table = "<table class='table table-striped table-hover'>";
				table +=  "<tr><th>" + "Pelicula" + "</th><th>" + "Año" +"</th><th>" + "Genero" + "</th><th>" +  "Votantes" + "</th><th>" + "Puntos" + "</th><th>" + "Promedio" + "</th></tr>";
				

			var esta;
			var nPos = 0;

			for(var i = 0 ; i < titulos.length; i++){
						if(input == titulos[i] ){
			
						esta = true;
						nPos = i;
			
						break;
				
						}else{
						esta = false;
						nPos = false;
						}
			}

			if(esta == true){
				table +=  "<tr>";
				nPos--;
					for(x in peliculas[nPos]){
						table +=  "<td>" +  peliculas[nPos][x]  +"</td>"
					}
				table +=  "</tr>";
			}else{
				table = "No existe esa pelicula";
			}
		resultado.html(table);
	}
		
//***************************************************************
//	funcion para crear la tabla con los  parametros de las guitarras ej3
	function tablaVentas(guitarras){
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><th>" + "Tipo" + "</th><th>" + "Cantidad" +"</th><th>" + "Precio" + "</th><th>" + "Total" +  "</th></tr>";
		var Total = 0;
			for(var i = 0; i < guitarras.length ; i++){
				table +=  "<tr>";
					for(x in guitarras[i]){
						if(guitarras[i].total == guitarras[i][x]){
							table +=  "<td>" + "$" + guitarras[i][x]+  "</td>";
							Total += guitarras[i][x];
							}else{
							table +=  "<td>" + guitarras[i][x]+  "</td>";
							}
					} 
				table +=  "</tr>";
			}
			table +=  "<tr><th>" + "Modelo" + "</th><th>" + "Marca" +"</th><th>" + "Precio" + "</th><th>" + "Cantidad" +  "</th><th>" + "$"+Total +  "</th></tr>";
			
			table += "</table>";
			return table;
	}

	
//*****************************************ejercicio 4

//	funcion para crear la tabla con los  parametros de los objetos
	function tablaCelulares(celulares){
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><th>" + "Modelo" + "</th><th>" + "Marca" +"</th><th>" + "Precio" + "</th><th>" + "Cantidad" +  "</th><th>" + "Total" +  "</th></tr>";
		var Total = 0;
			for(var i = 0; i < celulares.length ; i++){
				table +=  "<tr>";
					for(x in celulares[i]){
						if(celulares[i].total == celulares[i][x]){
							table +=  "<td>" + "$" + celulares[i][x]+  "</td>";
							Total += celulares[i][x];
							}else{
							table +=  "<td>" + celulares[i][x]+  "</td>";
							}
					} 
				table +=  "</tr>";
			}
			table +=  "<tr><th>" + "Modelo" + "</th><th>" + "Marca" +"</th><th>" + "Precio" + "</th><th>" + "Cantidad" +  "</th><th>" + "$"+Total +  "</th></tr>";
			
			table += "</table>";
			return table;
	}
	//	funcion para crear la tabla con los  parametros de los objetos que total sea mayor a 2000
	function mayor2000Celulares(celulares){
		var table = "<table class='table  table-hover'>";
		table +=  "<tr><th>" + "Modelo" + "</th><th>" + "Marca" +"</th><th>" + "Precio" + "</th><th>" + "Cantidad" +  "</th><th>" + "Total" +  "</th></tr>";
		var Total = 0;
			for(var i = 0; i < celulares.length ; i++){
				table +=  "<tr>";
				if(celulares[i].total >= 2000){
					for(x in celulares[i]){
						if(celulares[i].total == celulares[i][x]){
								table +=  "<td>" + "$" + celulares[i][x]+  "</td>";
								Total += celulares[i][x];
								}else{
								table +=  "<td>" + celulares[i][x]+  "</td>";
								}
					} 
				table +=  "</tr>";
				}
				
			}
			table +=  "<tr><th>" + "Modelo" + "</th><th>" + "Marca" +"</th><th>" + "Precio" + "</th><th>" + "Cantidad" +  "</th><th>" +  "$"+Total +  "</th></tr>";
			
			table += "</table>";
			return table;
	
	}
	//funcion para buscar el modelo
	function buscarModelo(celulares,input,resultado){
			var esta = false;
			var nPos = [];
			var total = 0;
			var resultados = 0;
				for(var i = 0 ; i < celulares.length; i++){
					for(x in celulares[i]){
							  if(celulares[i][x]== input){
									esta = true;
									nPos.push(i);
									resultados +=  celulares[i]["total"];
								}					
					}
				}
				if(esta){
				resultados = "El total de ventas del modelo " + input + " es : $" + resultados +".";
				}else{
					resultados = "Lo siento no  existe ese modelo.";
				}

		resultado.html(resultados);
	}
	
	//funciones para ejercicio 5
	//	funcion para crear la tabla con los  parametros de los objetos
	function tablaZapatos(zapatos){
		var table = "<table class='table table-striped table-hover'>";
		table +=  "<tr><td>" + "Marca" + "</td><td>" + "Talle" +"</td><td>" + "Color" + "</td><td>" + "Origen" + "</td></tr>";
			for(var i = 0; i < zapatos.length ; i++){
				table +=  "<tr>";
					for(x in zapatos[i]){
					table +=  "<td>" + zapatos[i][x]+  "</td>";
					} 
				table +=  "</tr>";
			}
			table += "</table>";
			return table;
	
	}
	
			function mostrarZapatos(zapatos){
			var table = "<table class='table table-striped table-hover'>";
			table +=  "<tr><th>" + "Marca" + "</th><th>" + "Talle" +"</th><th>" + "Color" + "</th><th>" +  "Origen" + "</th></tr>";
				for(var i = 0; i < zapatos.length ; i++){

					table +=  "<tr>";
					
						if(zapatos[i].talle >= 38){
							for(x in zapatos[i]){
								
							table +=  "<td>" + zapatos[i][x]+  "</td>";
							} 
						}	
					table +=  "</tr>";
				}
			table += "</table>";
			return table;
	
	}
	
			function informeZapatos(zapatos,input,resultado){
			var origen = input;
			var cantidadOrigen = 0;
			var cantidadResto = 0;
			var resultados = 0;
			var informe = "";
				for(var i = 0 ; i < zapatos.length; i++){
					console.log(zapatos,input);
					for(x in zapatos[i]){
							  if(zapatos[i][x] == origen){
									cantidadOrigen++;
								}else if(zapatos[i][x] == zapatos[i]["origen"]){
									cantidadResto++;	
								}			
					}
				}
				

				resultados = "El total de ventas de origen " + origen + " es " + cantidadOrigen + " pedidos.";
				console.log(cantidadOrigen, cantidadResto);
			if(cantidadOrigen > cantidadResto){
				informe = " es " + origen;
			}else{
				informe = " no es " + origen;
			}
			
		resultado.html(resultados +"<br>" + "El origen de mayor pedidos " + informe + ".");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		//Funcion para ejercicio extra 1
	function cargarForm(){
		
		var d = $("#contenido");
		var linex1A = "<label  for=\"inex1A\" >Numeros</label>";
		var inex1A = "<input type=\"number\"  class=\"form-control\" id=\"inex1A\">";
		d.append(linex1A);
		d.append(inex1A + "<br>");
		
		var  btnex1a = "<input type=\"button\"  class=\"form-control\" value=\"Ingresar\" id=\"btnex1a\">";
		var  btnex1b = "<input type=\"button\" class=\"form-control\" value=\"Alert\" id=\"btnex1b\">";

		d.append(btnex1a);
		d.append(btnex1b);
			
			
			var divCenter = "<div class=\"text-center\"  id=\"dex\"> </div>";
			d.append(divCenter);
			var errorex1 =   "<p class=\"panel panel-default error\" id=\"errorex1\"></p>";
			var resultadoEX1 =  "<p class=\"panel panel-default resultado\"  id=\"resultadoex1A\"></p>";
				var dex = $("#dex");
				dex.append(errorex1);
				dex.append(resultadoEX1);
			
			
	}
	extra1A = extra1AA();
	function extra1AA(){
		var users = [];
		
		return function(){
			var input = Number($("#inex1A").val());
			var resultado = $("#resultadoex1A");
			users.push(input);
			
			resultado.html(users);	
		}
		
	}
	function extra1B(){
		alert(" congratulations creaste tu primer div desde jscript");
		
	}



