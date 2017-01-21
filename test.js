var list = [];
var black=true;
var compteurCoup = 0;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
	createCanvas(420,420);
	background(242,176,109);
	stroke(0);
	
	for(var i = 60; i<=360; i+=60) {
		for(var j = 60; j<=360; j+=60) {
			list.push([i,j]);
		}
		line(i,60,i,360);
	}
	
	for(var i = 60; i<=360; i+=60) {
		line(60,i,360,i);
	}
	
}

function dropStone() {
	if(mouseIsPressed) {
		
		list.forEach(function(element) {
			if( (element[0]-15 <= mouseX && element[0]+15 >= mouseX) &&
			(element[1]-15 <= mouseY && element[1]+15 >= mouseY)) {
				
				if(mouseButton == LEFT) {
					fill(0);
					stroke(0);
				}
				else if(mouseButton == RIGHT) {
					fill(255);
					stroke(255);
				}
				ellipse(element[0],element[1],40,40);
				compteurCoup += 1;
			}
		});
	}
}


function draw() {
	dropStone();
}
