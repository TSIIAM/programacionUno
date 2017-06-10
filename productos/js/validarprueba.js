/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//ACA VALIDAMOS EL NUMERO******************************************************
	function validarVacio(resultado,error,btn,inputA,inputB){

        	if(inputA == "empty" || inputB <= 0  ){
			error.html("Ingrese valores!!").addClass("importante");
        		btn.addClass("btn btn-danger");
        		$("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
				resultado.hide();
			return false;

    			}else{

  			 btn.removeClass(" btn btn-danger");
    			$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
				resultado.html("Valores ingresados").addClass("importante");
				error.hide();
				resultado.show();
				return true;
    //*************************************************************************************
    			};
	};