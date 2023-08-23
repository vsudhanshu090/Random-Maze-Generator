var canvas = document.getElementById("myCanvas");  
var w = 100; //width of one cell

var width = canvas.width;
var height = canvas.height;

var c = canvas.getContext("2d");  
c.fillStyle = "gray";  
c.fillRect(0,0,width,height);

var rows = Math.floor(height/w);
var cols = Math.floor(width/w);

var grid = [];

for (var i=0;i<rows;i++){
    for (var j=0;j<cols;j++){
        var cell = new Cell(i,j);
        grid.push(cell);
    }
}

function drawline(a,b,x,y){
    //draws a straight line from (a,b) to (x,y)
}

function Cell(i, j){
    this.i = i;
    this.j = j;

    this.show = function(){
        var x = this.i*w;
        var y = this.j*w;
        
        c.fillStyle = 'blue';
        c.fillRect(x,y,10,10);

        c.fillStyle = 'red';
        c.beginPath();
        c.moveTo(x, y);    // Starting point (x, y)
        c.lineTo(x+50, y+50);  // Ending point (x, y)
        c.stroke();    
    }
}

for (var i=0;i<grid.length;i++){
    console.log(grid[i]);
    grid[i].show();
}
