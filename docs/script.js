var Number_of_moves = 0;
var time = 0;
var timer;

function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function updateDisplay() {
    document.getElementById("moves").textContent = Number_of_moves;
    document.getElementById("time").textContent = time;
}

function shuffle() {
	Number_of_moves = 0;
	time = 0;

	clearInterval(timer);
	timer = setInterval(function() {
		time++;
		document.getElementById("time").textContent = time;
	}, 1000)
	//Use nested loops to access each cell of the 4x4 grid
	for(var row=1; row <=4; row++) //foreach row of the 4x4 grid
	{
		//foreach column in this row
		for (var column=1; column <=4; column++) {
			//pick a random row from 1 to 4
			
			var row2=Math.floor(Math.random()*4+1);
			
			//pick a random column from 1 to 4
			var column2=Math.floor(Math.random()*4+1);
			
			swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells
		}
	}
}

function clickTile(row, column) {
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile16") {
		//check if the white tile is on the right
		if(column<4) {
			if(document.getElementById("cell"+row+(column+1)).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+row+(column+1));
				Number_of_moves++;
				updateDisplay();
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
		//check if the white tile is on the left
		if(column>1) {
			if(document.getElementById("cell"+row+(column-1)).className=="tile16") {
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				Number_of_moves++;
				updateDisplay();
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
		//check if the white tile is above
		if(row > 1) {
			if(document.getElementById("cell"+(row-1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				Number_of_moves++;
				updateDisplay();
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
		
		//check if the white tile is below
		if(row < 4) {
			if(document.getElementById("cell"+(row+1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				Number_of_moves++;
				updateDisplay();
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
	}
}

function Win() {
	//Write some code logic here that determines if the tiles are all in order, hence the puzzle is won. If so, alert to the user that they won.
	if(document.getElementById("cell11").className=="tile1"
	&&
	document.getElementById("cell12").className=="tile2"
	&&
	document.getElementById("cell13").className=="tile3"
	&& 
	document.getElementById("cell14").className=="tile4"
	&& 
	document.getElementById("cell21").className=="tile5"
	&& 
	document.getElementById("cell22").className=="tile6"
	&& 
	document.getElementById("cell23").className=="tile7"
	&& 
	document.getElementById("cell24").className=="tile8"
	&& 
	document.getElementById("cell31").className=="tile9"
	&& 
	document.getElementById("cell32").className=="tile10"
	&& 
	document.getElementById("cell33").className=="tile11"
	&& 
	document.getElementById("cell34").className=="tile12"
	&& 
	document.getElementById("cell41").className=="tile13"
	&& 
	document.getElementById("cell42").className=="tile14"
	&& 
	document.getElementById("cell43").className=="tile15"
	&&
	document.getElementById("cell44").className=="tile16")
	{
	clearInterval(timer);
	window.alert("Congratulations!!\n Amount spent on current game in seconds: " + time +"\n Number of moves so far: " + Number_of_moves+"\nWould you like to play again?")
	window.location.reload(); //Reload page upon confirmation
	}
}

function simpleGame() {
	Number_of_moves = 0;
	time = 0;

	clearInterval(timer);
	timer = setInterval(function() {
		time++;
		document.getElementById("time").textContent = time;
	}, 1000);

	var count = 1;
	for(var row=1; row <=4; row++) {
		for (var column=1; column <= 4; column++) {
			document.getElementById("cell"+row+column).className = "tile" + count;
			count++;
		}
	}

	var choice = Math.floor(Math.random() * 3);

	if (choice == 0) {
		swapTiles("cell43", "cell44");
	}
	else if (choice == 1) {
		swapTiles("cell34", "cell44");
	}
	else {
		swapTiles("cell42", "cell44")
	}
}

window.onload = function() {
	shuffle();
};