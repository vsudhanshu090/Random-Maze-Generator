function Cell(i, j){
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true];
    this.visited = false;

    this.drawline = function (a,b,x,y){
        //draws a straight line from (a,b) to (x,y)
        c.strokeStyle = 'black';   
        c.lineWidth = 3;       
        c.beginPath();
        c.moveTo(a, b);    
        c.lineTo(x, y);  
        c.stroke();  
    }

    this.index = function (x,y){
        //returns index of (x,y) in 2-d grid array
        if (x<0 || y<0 || y>=rows || x>=cols)
            return -1;
        return x + y*cols;
    }

    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;

        if (this.visited) {
            c.fillStyle = "gray";
            c.fillRect(x, y, w, w);
        }
    
        if (this.walls[0]) {
            this.drawline(x, y, x + w, y);
        }
        if (this.walls[1]) {
            this.drawline(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            this.drawline(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            this.drawline(x, y + w, x, y);
        }
    }

    this.highlight = function() {
        c.fillStyle = "red";
        c.fillRect(this.i*w,this.j*w,w,w);
    }
    

    this.checkNeighbours = function(){
        var neighbours = [];

        var top = grid[this.index(i,j-1)];
        var left = grid[this.index(i-1,j)];
        var right = grid[this.index(i+1,j)];
        var bottom = grid[this.index(i,j+1)];

        if (top && top.visited==false){
            neighbours.push(top);
        }
        if (bottom && bottom.visited==false){
            neighbours.push(bottom);
        }
        if (right && right.visited==false){
            neighbours.push(right);
        }
        if (left && left.visited==false){
            neighbours.push(left);
        }

        if (neighbours.length > 0){
            var ran = Math.floor(Math.random()*neighbours.length);
            return neighbours[ran];
        }
        else
            return undefined;
    }

    this.allNeighbours = function(){
        var neighbours = [];

        var top = grid[this.index(i,j-1)];
        var left = grid[this.index(i-1,j)];
        var right = grid[this.index(i+1,j)];
        var bottom = grid[this.index(i,j+1)];

        if (top && top.visited==false){
            neighbours.push(top);
        }
        if (bottom && bottom.visited==false){
            neighbours.push(bottom);
        }
        if (right && right.visited==false){
            neighbours.push(right);
        }
        if (left && left.visited==false){
            neighbours.push(left);
        }

        if (neighbours.length > 0){
            return neighbours;
        }
        else
            return undefined;
    }

    this.resetCell = function(){
        this.walls = [true,true,true,true];
        this.visited = false;
    }
}