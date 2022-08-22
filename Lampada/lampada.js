/**
* JS - Aula 6: Lampada
* @author André Marques da Silva
*/

function ligar(){

	document.getElementById("status").src="on.jpg";

}

function desligar(){

	document.getElementById("status").src="off.jpg";

}

function piscar(){

	var tempo = 0;
	var cont = 0;

	while(cont <100){
		tempo += 25;
		setTimeout("document.getElementById('status').src='on.jpg';", tempo);

		tempo += 25;
		setTimeout("document.getElementById('status').src='off.jpg';", tempo);

		cont++;
	}
}