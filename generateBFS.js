current = grid[0];
q.push(current);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateMazeBFS() {
    if (q.length>0) {
        c.clearRect(0, 0, width, height);
        showgrid();

        current.visited = true;
        current.highlight();

        var sz = q.length;
        while(sz > 0){
            var cur = q[0];
            q.shift();

            var neigh = cur.allNeighbours();

            if (neigh != undefined){
                shuffleArray(neigh);
                for (var x=0;x<neigh.length;x++){
                    var curcell = neigh[x];
                    if (curcell.visited == false){
                        curcell.visited = true;
                        q.push(curcell);
                        removeWall(cur,curcell);
                        current = curcell;
                        current.highlight();
                    }
                }
            }
            sz--;
        }
        shuffleArray(q);

        if (q.length == 0){
            current = undefined;
            showgrid();
            stop = false;
            return;
        }

        setTimeout(generateMazeBFS, 10); // Call the function recursively after a 2-second delay
    }
}



