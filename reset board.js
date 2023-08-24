
function resetBoard(){
    resetAllCells();
    c.clearRect(0, 0, width, height);
    showgrid();
    stack = [];
    q = [];
}