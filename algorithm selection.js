const algorithm = document.getElementById('selectAlgorithm');
const generate = document.getElementById('generateMaze');

var selectedAlgo;
generate.addEventListener('click', function() {
    selectedAlgo = algorithm.value;
    fun(1);
    forcestop = true;
});


function fun(count){
    if (count == 0){
        resetBoard();
        forcestop = false;
    }
    else{
        if (selectedAlgo === 'dfs') {
            generateMazeDFS();
        } else if (selectedAlgo === 'bfs') {
            generateMazeBFS();
        }
        return;
    }
    setTimeout(fun(count - 1), 100);
}