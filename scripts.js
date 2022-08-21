/*
    * Created by DJ Cartwright 
    * Etch-A-Sketch assignment for The Odin Project
    *
    * Completed August 21, 2022
*/

//create board
let size = 32;
function createBoard() {
    for (let i = 0; i < size; i++) {
        let row = createRow();
        console.log(row);
        document.getElementById('board').appendChild(row);
    }   
}
    
function createRow() {

    let newRow = document.createElement('div');
    newRow.classList.add('row');
    // create loop to create 10 columns per row
    for (let i = 0; i < size; i++) {
        newRow.appendChild(createCol());
    }
    return newRow;
}

let mouseDown = false;
function createCol() {
    let newCol = document.createElement('div');
    newCol.classList.add('col');
    newCol.addEventListener('mousedown',() => {
        newCol.style.backgroundColor = 'black';
        mouseDown = true;
    });
    newCol.addEventListener('mousemove',() => {
        if (mouseDown == true) {
            newCol.style.backgroundColor = 'black';
        }
    });
    newCol.addEventListener('mouseup', () => {
        mouseDown = false;
    });
    return newCol;
}

function clearBoard() {
    document.getElementById('board').textContent = '';
    document.getElementById('clear').innerHTML = `clear<br>${size}` + ' x ' + `${size}`;
    createBoard();
}

let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clearBoard();
});

let downSize = document.getElementById('control1');
downSize.addEventListener('click', () => {
    if (size != 16) {
        size -= 8;
        clearBoard();
    }
});

let upSize = document.getElementById('control2');
upSize.addEventListener('click', () => {
    if (size != 48) {
        size += 8;
        clearBoard();
    }
});

createBoard();
