/**
* JS - Aula 7: Slide
* @author André Marques da Silva
*/

var check = false;

function xequeMate(){
	if(check == false){
		var timer1 = setInterval(function(){contagem()}, 1000);
		var cont = 10;
		function contagem(){
			soundBeep();
			document.getElementById("time").innerHTML = cont;
		
			if(cont == 0){
				clearInterval(timer1);
				soundThunder();
				document.getElementById("fire").src = "explosion.gif";
				document.getElementById("fire").innerHTML = "GAME OVER";
			}
			cont--;
		}
		check = true;
	}
	
}

function soundThunder(){
	var beep = new Audio();
	beep.src = "aulas_countdown_Thunder_Crack.mp3";
	beep.play();
}

function soundBeep(){
	var beep = new Audio();
	beep.src = "aulas_countdown_Beep_Short.mp3";
	beep.play();
}