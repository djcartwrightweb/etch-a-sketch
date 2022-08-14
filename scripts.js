//create board
function createBoard() {
    const board = document.getElementById('board');

    let row = createRow;
}

function createRow() {
    let newRow = document.createElement('div');
    newRow.classList.add('row');

    //create loop to create 10 columns per row
    for (let i = 0; i < 10; i++) {
        //left off here Davey
    }
}

function createCol() {
    let newCol = document.createElement('div');
    newCol.classList.add('col');

    return newCol;
}

createBoard();
