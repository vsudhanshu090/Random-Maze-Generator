function makegrid(){
    //makes cells for the grid
    for (var j=0;j<rows;j++){
        for (var i=0;i<cols;i++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
}
makegrid();


function showgrid(){
    //displays the whole grid
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function resetAllCells(){
    //resets all cell values to default value
    for (var i = 0; i < grid.length; i++) {
        grid[i].resetCell();
    }
}


function removeWall(a, b){
    //removes wall between a and b
    var i_diff = a.i-b.i;
    if (i_diff == 1){
        a.walls[3] = false;
        b.walls[1] = false;
    }
    else if (i_diff == -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    var j_diff = a.j-b.j;
    if (j_diff == 1){
        a.walls[0] = false;
        b.walls[2] = false;
    }
    else if (j_diff == -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
