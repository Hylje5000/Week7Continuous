let kuormaaja = [];
let kaikki = [];
let labels = ['ID: ', 'Nimi: ', 'Mallikuvaus: ', 'Kuivapaino: ', 'Märkapaino: ', 'Valmistuslinja: ', 'Valmistus aloitettu: ', 'Valmistus lopetettu: ', 'Viimeistelty: '];


function Kuormaaja() {

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
    console.log(kaikki)

    
    // render kuormaaja to card
    let card = document.getElementById('kortit');
    let newCard = document.createElement('div');
    newCard.className = "card mb-3";
    newCard.style = "width: 18rem;";
    newCard.appendChild(document.createElement('div'));

    newCard.appendChild(document.createElement('ul'));
    newCard.childNodes[1].className = "list-group list-group-flush";
    for(let i = 0; i < kuormaaja.length; i++){
        newCard.childNodes[1].appendChild(document.createElement('li'));
        newCard.childNodes[1].childNodes[i].className = "list-group-item";
        newCard.childNodes[1].childNodes[i].innerHTML += labels[i] + kuormaaja[i] + " ";
        }
    card.appendChild(newCard);

    // save card to localStorage
    localStorage.setItem('kuormaajat', JSON.stringify(kaikki));

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

function Load() {
    // get data from localStorage
    let data = JSON.parse(localStorage.getItem('kuormaajat'));
    for(let i = 0; i < data.length; i++){
        kuormaaja = data[i];

        let card = document.getElementById('kortit');
        for(let x = 0; x < data.length-1; x++){
            let newCard = document.createElement('div');
            newCard.className = "card mb-3";
            newCard.style = "width: 18rem;";
            newCard.appendChild(document.createElement('div'));

            newCard.appendChild(document.createElement('ul'));
            newCard.childNodes[1].className = "list-group list-group-flush";
            for(let y = 0; y < kuormaaja.length; y++){
                newCard.childNodes[1].appendChild(document.createElement('li'));
                newCard.childNodes[1].childNodes[y].className = "list-group-item";
                newCard.childNodes[1].childNodes[y].innerHTML += labels[y] + kuormaaja[y] + " ";
                }
        card.appendChild(newCard);
    }
    }

    
}


