/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//ACA VALIDAMOS EL NUMERO******************************************************
	function validar(dias,horas,costo,asistente,resultado){

        	if(dias == "0" || costo == "0" || asistente == "empty" ){
			resultado.html("Ingrese valores!!").addClass("importante");
        		$(this).addClass("btn btn-danger");
        		$("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
			return;

    			}else{

  			 $(this).removeClass(" btn btn-danger");
    			$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
    //*************************************************************************************
    			};
	};