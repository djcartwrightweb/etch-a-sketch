//create board
function createBoard() {
    for (let i = 0; i < 16; i++) {
        let row = createRow();
        console.log(row);
        document.getElementById('board').appendChild(row);
    }   
}
    

function createRow() {

    let newRow = document.createElement('div');
    newRow.classList.add('row');
    // create loop to create 10 columns per row
    for (let i = 0; i < 16; i++) {
        newRow.appendChild(createCol());
    }
    return newRow;
}


function createCol() {
    let newCol = document.createElement('div');
    newCol.classList.add('col');
    newCol.addEventListener('mouseenter',(e) => {
        newCol.style.backgroundColor = 'black';
    });
    newCol.addEventListener('mouseleave', (e) => {
        setTimeout(() => {newCol.style.backgroundColor = 'white'}, 200);
    });
    return newCol;
}

createBoard();
