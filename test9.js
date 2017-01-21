var list = [];
var black=true;
var compteurCoup = 0;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
	createCanvas(410,410);
	background(242,176,109);
	stroke(0);
	
	for(var i = 25; i<405; i+=45) {
		for(var j = 25; j<405; j+=45) {
			list.push([i,j]);
		}
		line(i,25,i,385);
	}
	
	for(var i = 25; i<405; i+=45) {
		line(25,i,385,i);
	}
	
	fill(0);
	ellipse(25+45*2,25+45*2,7,7);
	ellipse(25+45*2,25+45*6,7,7);
	ellipse(25+45*6,25+45*2,7,7);
	ellipse(25+45*6,25+45*6,7,7);
}

function dropStone() {
	if(mouseIsPressed) {
		
		list.forEach(function(element) {
			if( (element[0]-10 <= mouseX && element[0]+10 >= mouseX) &&
			(element[1]-10 <= mouseY && element[1]+10 >= mouseY)) {
				
				if(mouseButton == LEFT) {
					fill(0);
					stroke(0);
				}
				else if(mouseButton == RIGHT) {
					fill(255);
					stroke(255);
				}
				ellipse(element[0],element[1],30,30);
				compteurCoup += 1;
			}
		});
	}
}


function draw() {
	dropStone();
}

