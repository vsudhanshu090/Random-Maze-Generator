function generateMazeDFS() {
    //reset grid
    resetAllCells();
    c.clearRect(0, 0, width, height);
    showgrid();
    stack = [];
    q = [];

    current = grid[0];
    stack.push(current);

    function dfs(){
        if (stack.length>0) {
            c.clearRect(0, 0, width, height);
            showgrid();

            if (!current)
                return;
            current.visited = true;
            current.highlight();

            var next = current.checkNeighbours();

            if (next) {
                next.visited = true;
                stack.push(next);
                removeWall(current,next);
                current = next;
            }
            else if (stack.length > 0){
                current = stack.pop();
                if (stack.length == 0){
                    current = undefined;
                    showgrid();
                    return;
                }
            }

            console.log("dfs");

            setTimeout(dfs, 10); // Call the function recursively after milliseconds delay
        }
    }
    dfs();
}


canvas.addEventListener('click', function(event) {
    // Get the mouse coordinates relative to the canvas
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    mouseX = Math.floor(mouseX/20);
    mouseY = Math.floor(mouseY/20);

    // Now mouseX and mouseY hold the coordinates of the clicked point
    console.log('Clicked at:', mouseX, mouseY);
});


