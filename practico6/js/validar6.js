/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//ACA VALIDAMOS EL NUMERO******************************************************
	function validarVacio(error,resultado,btn,inputA,inputB,inputC){

        	if(inputA.length == 0 ||  inputB.length ==  0 || inputC.length == 0 ){
			error.html("Ingrese valores!!").addClass("importante");
        		btn.addClass("btn btn-danger");
        		$("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
				error.show();
			return false;

    			}else{

  			 btn.removeClass(" btn btn-danger");
    			$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
				resultado.html("Valores ingresados").addClass("importante");
				error.hide();
				return true;
    //*************************************************************************************
    			};
	};
	
	function validarPositivo(error,resultado,btn,inputA,inputB,inputC){

        	if(inputA <= 0 ||  inputB <= 0  || inputC <= 0  ){
			error.html("Ingrese valores positivos!!").addClass("importante");
        		btn.addClass("btn btn-danger");
        		$("body").css("backgroundColor", "rgb(" + 255 + "," + 0 + "," + 0 + ")");
				error.show();
			return false;

    			}else{

  			 btn.removeClass(" btn btn-danger");
    			$("body").css("backgroundColor", "rgb(" + colRojo + "," + colVerde + "," + colAzul   + ")");
				resultado.html("Valores ingresados").addClass("importante");
				error.hide();
				return true;
    //*************************************************************************************
    			};
	};