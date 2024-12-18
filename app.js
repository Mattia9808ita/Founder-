document.addEventListener("DOMContentLoaded", function() {
    const criminali = [
        { nome: "Giovanni Rossi", crimine: "Furto", ricercato: true },
        { nome: "Lucia Bianchi", crimine: "Assalto", ricercato: false }
    ];

    const indagini = [
        { caso: "Caso 001", stato: "In corso" },
        { caso: "Caso 002", stato: "Chiuso" }
    ];

    const personale = [
        { nome: "Marco Verdi", grado: "Sergente" },
        { nome: "Laura Gialli", grado: "Capitano" }
    ];

    function caricaDati() {
        const criminaliTable = document.getElementById('criminali-table');
        criminali.forEach(criminale => {
            let row = criminaliTable.insertRow();
            row.innerHTML = `<td>${criminale.nome}</td><td>${criminale.crimine}</td><td>${criminale.ricercato ? "Sì" : "No"}</td>`;
        });

        const indaginiTable = document.getElementById('indagini-table');
        indagini.forEach(indagine => {
            let row = indaginiTable.insertRow();
            row.innerHTML = `<td>${indagine.caso}</td><td>${indagine.stato}</td>`;
        });

        const personaleTable = document.getElementById('personale-table');
        personale.forEach(poliziotto => {
            let row = personaleTable.insertRow();
            row.innerHTML = `<td>${poliziotto.nome}</td><td>${poliziotto.grado}</td>`;
        });
    }

    caricaDati();
});
