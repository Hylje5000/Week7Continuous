let teksti = "hei maailma";
let numero = 10;
let desimaali = 5.555;
let bool = true;
let array = ["banaani 🍌", "mansikka 🍓", "kirsikka 🍒"];
const objekti = {
    banaani: "🍌",
    mansikka: "🍓",
    kirsikka: "🍒"
};

function Task() {
    let id = document.getElementById('ID').value;
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let timetomaster = document.getElementById('timetomaster').value;
    let timespent = document.getElementById('timespent').value;
    let source = document.getElementById('source').value;
    let startlearningdate = document.getElementById('startlearningdate').value;
    let inprogress = document.getElementById('inprogress');
    
    if(inprogress.checked){
        inprogress = "✅"
    }
    else {
        inprogress = "❌"
    }

    let table = document.getElementById('table');

    let row = table.insertRow(0)

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    cell1.innerHTML = id;
    cell2.innerHTML = title;
    cell3.innerHTML = desc;
    cell4.innerHTML = timespent;
    cell5.innerHTML = timetomaster;
    cell6.innerHTML = source;
    cell7.innerHTML = startlearningdate;
    cell8.innerHTML = inprogress;


    //document.getElementById('id_list').innerHTML = id;
    //document.getElementById('title_list').innerHTML = title;
    //document.getElementById('desc_list').innerHTML = desc;
    //document.getElementById('timetomaster_list').innerHTML = timetomaster;
    //document.getElementById('timespent_list').innerHTML = timespent;
    //document.getElementById('source_list').innerHTML = source;
    //document.getElementById('startlearningdate_list').innerHTML = startlearningdate;
    //document.getElementById('inprogress_list').innerHTML = inprogress;

    document.getElementById('ID').value = "";
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
    document.getElementById('timetomaster').value = "";
    document.getElementById('timespent').value = "";
    document.getElementById('source').value = "";
    document.getElementById('startlearningdate').value = "";
    document.getElementById('inprogress').checked = false;
}





