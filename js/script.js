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

// Bottone da cliccare per iniziare il gioco 
document.getElementById("play-btn").addEventListener("click",
    function () {
        // Genero la griglia di gioco
        const gridContainerMaker = document.getElementById("gridContainer");
        gridContainerMaker.innerHTML = "";

        const challenge = document.getElementById('difficulty').value;
        console.log(challenge);

        let cellsNumber = 0;

        // Assegno il numero di griglie necessarie
        if (challenge === "easy") {
            cellsNumber = 100;
        } else if (challenge === "medium") {
            cellsNumber = 81;
        } else if (challenge === "hard") {
            cellsNumber = 49;
        }

        // Generare le celle all'interno della griglia a seconda della difficoltà scelta
        for (let i = 1; i <= cellsNumber; i++) {
            const gridCont = document.getElementById("gridContainer");
            const newDiv = document.createElement("div");
            newDiv.innerHTML = `<span>${i}</span>`
            // L'if decide quali classi affidare alle caselle a seconda della challenge (ergo la difficoltà impostata)
            if (challenge === "easy") {
                newDiv.classList.add("cell-standard");
            } else if (challenge === "medium") {
                newDiv.classList.add("cell-medium");
            } else if (challenge === "hard") {
                newDiv.classList.add("cell-hard");
            }

            // Cliccando su una casella si aggiunge la classe "active"
            newDiv.addEventListener("click", function() {
                this.classList.add("active");
            });

            gridCont.append(newDiv);
        }

        // Per sostituire la scritta iniziale con la griglia:
        document.getElementById("game-main").classList.remove("d-none")
        document.getElementById("start-title").classList.add("d-none")
    }
);


// FUNCTIONS