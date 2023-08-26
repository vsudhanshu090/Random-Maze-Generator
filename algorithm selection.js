const algorithm = document.getElementById('selectAlgorithm');
const generate = document.getElementById('generateMaze');

var selectedAlgo;
generate.addEventListener('click', function() {
    selectedAlgo = algorithm.value;
    fun();
    //dfs();
    //generateMazeDFS();
    //generateMazeBFS();
});


function fun(){
    if (selectedAlgo === 'dfs') {
        generateMazeDFS();
    } else if (selectedAlgo === 'bfs') {
        generateMazeBFS();
    }
    return;
    //setTimeout(fun(count - 1), 100);
}