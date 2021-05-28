var menor3 = function( num1, num2, num3){
	 var num1 = parseInt(document.getElementById('num1').value);

	 var num2 = parseInt(document.getElementById('num2').value);

	 var num3 = parseInt(document.getElementById('num3').value);

	 var lectura = document.getElementById('lectura');

	  if (num1<num2 && num1<num3) 
		{
			 return lectura.innerHTML =   num1   ;
		}
		else
		{
			if (num2<num3) 
			{
				return lectura.innerHTML =   num2  ;
			}			
			else
			{
	 
	                return lectura.innerHTML =  num3  ;
	            }
	        }
        }


var cm = function (c){

	 var c = parseFloat(document.getElementById("c").value);

	 var conv = (c*0.39);

	 var lectura2 = document.getElementById('lectura2');

	 return lectura2.innerHTML = "<mark>"+ c + " Cm son " + conv + " In </mark>";
}

var mts = function(m){
	 var m = parseFloat(document.getElementById('m').value);

	 var conv2 = (m*1.09361);

	 var lectura3 = document.getElementById('lectura3');

	 return lectura3.innerHTML = "<mark>"+ m + " M son " + conv2 + " Yd </mark>";
}
