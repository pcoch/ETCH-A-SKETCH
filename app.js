//global variables
const sizeSelector = document.getElementById('size-selector');
const container = document.querySelector('.grid-container');
const btn = document.querySelector('.btn');
const colorBtn = document.querySelector('.btn-2');
const cell = document.createElement('div');

//Sketch function
function sketch() {

    const gridCells = document.querySelectorAll('.cell');

    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'black';
        })
    }
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function colorSketch() {
    const gridCells = document.querySelectorAll('.cell');

    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = getRandomColor();
        })
    }
};

//color button click event
colorBtn.addEventListener('click', colorSketch)

//color selector function
function selectColor() {
    const colorValue = document.getElementById('color');
    const gridCells = document.querySelectorAll('.cell');

    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = colorValue.value;
        })
    }
}

//select color btn
const colorValue = document.getElementById('color');
colorValue.addEventListener('click', selectColor)

//create grid function
function createGrid() {

    container.innerHTML = ''; //clearing divs before creating new div

    let gridSize = sizeSelector.value;
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`)
    let gridSquareUnit = gridSize * gridSize;
    for (i = 0; i < gridSquareUnit; i++) {
        const cell = document.createElement('div');
        const container = document.querySelector('.grid-container');
        cell.className = 'cell';
        container.appendChild(cell);
    }
};

//Update grid with size selector
sizeSelector.addEventListener('mouseup', createGrid);
sizeSelector.addEventListener('mouseup', sketch);

// Clear sketch function
function clearSketch() {
    const cellElements = document.querySelectorAll('.cell');
    for (i = 0; i < cellElements.length; i++) {
        cellElements[i].removeAttribute('style');
    }
    sketch();
}

//clear sketch on button click
btn.addEventListener('click', clearSketch)

//default grid on load
window.onload = createGrid(), sketch();