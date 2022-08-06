/**
* JS - Aula 3: Calculadora Flex
* @author André Marques da Silva
*/

var etanol, gasolina;

function calculadora(){
	
	etanol = parseFloat(frmFlex.txtEtanol.value);
	gasolina = parseFloat(frmFlex.txtGasolina.value);
	if (etanol*0.7>gasolina){
		document.getElementById("status").src="gasolina.png";
	}
	else{
		document.getElementById("status").src="etanol.png";
	}
}

function resetar(){
	document.getElementById("status").src="neutro.png";
}