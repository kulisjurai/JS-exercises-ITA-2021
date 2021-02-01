//dimenzije za kreiranje crtace table
const x = 120;
const y = 100;


//vrsta prekidaca s kojom ce se trigerovati draw(event) funkcija
let isMouseDown = false;

/* 
   funkcija koja formatira crtacu tablu 
   (iscrtava redove i kolone tabele i dodaje neophodne event atribute)
*/
function createPanel(xCoor, yCoor) {
    const table = document.createElement('table');
    table.setAttribute("cellspacing", "0px");
    for (let i = 0; i < yCoor; i++) {
        let tableRow = document.createElement('tr')
        for (let j = 0; j < xCoor; j++) {
            let tableColumn = document.createElement('td');
            tableColumn.setAttribute('onmousedown', 'isDown(event)');
            tableColumn.setAttribute('onmouseup', 'isUp()');
            tableColumn.setAttribute('onmousemove', 'draw(event)');
            tableRow.appendChild(tableColumn)
        }
        table.appendChild(tableRow);
    }
    document.body.appendChild(table);
}

function isDown(e) {
    e.currentTarget.setAttribute("style", "background-color: orange;");
    isMouseDown = true;
}
function isUp() {
    isMouseDown = false;
}
function draw(e) {
    if (isMouseDown) e.currentTarget.setAttribute("style", "background-color: orange;");
}

createPanel(x, y);