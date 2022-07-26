
function Kuormaaja() {

    let kuormaaja = [];
    let kaikki = [];

    let id = document.getElementById('ID').value;
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let kuivapaino = document.getElementById('kuivapaino').value;
    let markapaino = document.getElementById('markapaino').value;
    let linja = document.getElementById('linja').value;
    let aloitus = document.getElementById('aloitus').value;
    let lopetus = document.getElementById('lopetus').value;
    let viimeistely = document.getElementById('viimeistely');
    
    if(viimeistely.checked){
        viimeistely = "✅"
    }
    else {
        viimeistely = "❌"
    }

    kuormaaja = [id, title, desc, kuivapaino, markapaino, linja, aloitus, lopetus, viimeistely];
    kaikki.push(kuormaaja);

    let table = document.getElementById('table');

    let row = table.insertRow(0)

    
    kaikki.forEach(function(row) {
        let newRow = document.createElement('tr');
        table.appendChild(newRow);

        if(row instanceof Array) {
            row.forEach(function(cell) {
                let newCell = document.createElement('td');
                newCell.innerHTML = cell;
                newRow.appendChild(newCell);
                });
            }
        else {
            newCell = document.createElement('td');
            newCell.innerHTML = row;
            newRow.appendChild(newCell);
        }
    });

    document.getElementById('ID').value = "";
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
    document.getElementById('kuivapaino').value = "";
    document.getElementById('markapaino').value = "";
    document.getElementById('linja').value = "";
    document.getElementById('aloitus').value = "";
    document.getElementById('lopetus').value = "";
    document.getElementById('viimeistely').checked = false;
}





