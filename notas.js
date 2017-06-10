		window.onload = function(){
		
		//Comienza ejercicio 10
			//resultado
				var btn10 = document.getElementById("btn10");
		btn10.addEventListener("click", ejercicio10);	
	
		
		
			//variables globales
				var total = 0;
				var resultado=0;
			
				var resultados=[];
				var cantidad = 0;
				var promedio = 0;
				var maximo = 0;
				var minimo = 0;
				var aprueban = 0;
				var reprueban = 0;
				
				
					function ejercicio10(){
					var numero10 = Number(document.getElementById("num10").value);
					
					
					if( numero10 >= 90 ){
					resultado = "  es bueno muy bueno. ";
					aprueban++;
					}else if(numero10  >= 70){
					resultado = " es aprobado. ";
					aprueban++;
					}else if(numero10  < 70){
					resultado = " es reprobado. ";
					reprueban++;
					};
			
					
					
					
				
						//incrementar cantidad y realizar promedio
						cantidad++;
						total += numero10;
					promedio = total / cantidad;
					
				resultados.push(numero10);
		
				//ordenar el array
				resultados.sort(function(a,b){return a-b});
			
				// obtener el maximo y el minimo 
				var ultimaNota = resultados.length - 1;
				maximo = resultados[ultimaNota];
				minimo = resultados[0];
					
			
			
			
			
			document.getElementById("resultado10").innerHTML = resultado;
			document.getElementById("resultado10a").innerHTML = resultados;
			document.getElementById("resultado100").innerHTML = cantidad  ;
			document.getElementById("resultado101").innerHTML = promedio.toFixed(2);
			
					document.getElementById("resultado10b").innerHTML = aprueban;
					document.getElementById("resultado10c").innerHTML = reprueban;
			
			document.getElementById("resultado102").innerHTML = maximo;
			document.getElementById("resultado103").innerHTML = minimo;
			//End ejercicio 10
			};
		
		
			};
	