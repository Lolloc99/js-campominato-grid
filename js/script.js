/*
Consegna:
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Bonus:
Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
*/

// Assegno il numero di griglie necessarie
const cellsNumber = 100;

// Genero la griglia di gioco
// Generare 100 celle all'interno della griglia

for (let i = 1; i <= cellsNumber; i++) {
    const gridCont = document.getElementById("gridContainer");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<span>${i}</span>`
    newDiv.classList.add("cell");

    // Cliccando su una casella si aggiunge la classe "active"
    newDiv.addEventListener("click", function() {
        this.classList.add("active");
    });

    gridCont.append(newDiv);
}


// FUNCTIONS