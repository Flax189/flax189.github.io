var list = [];
var black=true;
var compteurCoup = 0;
document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
	createCanvas(668,668);
	background(242,176,109);
	stroke(0);
	
	for(var i = 17; i<=665; i+=35) {
		for(var j = 17; j<=665; j+=35) {
			list.push([i,j]);
		}
		line(i,17,i,647);
	}
	
	for(var i = 17; i<=665; i+=35) {
		line(17,i,647,i);
	}
	
}

function dropStone() {
	if(mouseIsPressed) {
		
		list.forEach(function(element) {
			if( (element[0]-7 <= mouseX && element[0]+7 >= mouseX) &&
			(element[1]-7 <= mouseY && element[1]+7 >= mouseY)) {
				
				if(mouseButton == LEFT) {
					fill(0);
					stroke(0);
				}
				else if(mouseButton == RIGHT) {
					fill(255);
					stroke(255);
				}
				ellipse(element[0],element[1],25,25);
				compteurCoup += 1;
			}
		});
	}
}


function draw() {
	dropStone();
}

