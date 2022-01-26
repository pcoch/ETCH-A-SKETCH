window.onload = () => {

    //Create grid function
    const createGrid = () => {
        const createCell = () => {
            const cell = document.createElement('div');
            const container = document.querySelector('.grid-container');
            cell.className = 'cell'
            container.appendChild(cell)
        }
        for (i = 0; i < 400; i++) {
            createCell()
        }
    }
    createGrid()

    //Sketch function
    const gridCell = document.querySelectorAll('.cell');

    for (i = 0; i < gridCell.length; i++) {
        gridCell[i].addEventListener('mouseover', function (event) {
            event.target.classList.add('sketch')
        })
    }

    // Clear sketch function
    function clearSketch() {
        const cellElements = document.querySelectorAll('.cell');
        for (i = 0; i < cellElements.length; i++) {
            cellElements[i].classList.remove('sketch');
        }
    }


    const btn = document.querySelector('.btn');
    btn.addEventListener('click', clearSketch)

}