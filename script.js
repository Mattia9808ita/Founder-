const agenti = ["Mario Rossi", "Luca Bianchi", "Giulia Verdi"];
const registri = [];

function cercaAgente() {
    const nome = document.getElementById('nome-agente').value.toLowerCase();
    const risultati = agenti.filter(agente => agente.toLowerCase().includes(nome));
    const listaRisultati = document.getElementById('risultati-agenti');
    listaRisultati.innerHTML = risultati.length 
        ? risultati.map(r => `<li>${r}</li>`).join('') 
        : '<li>Nessun risultato trovato</li>';
}

function caricaRegistri() {
    const corpoTabella = document.getElementById('tabella-registri').querySelector('tbody');
    corpoTabella.innerHTML = registri.length 
        ? registri.map(registro => `
            <tr>
                <td>${registro.nome}</td>
                <td>${registro.crimine}</td>
                <td>${registro.data}</td>
            </tr>`).join('') 
        : '<tr><td colspan="3">Nessun registro trovato</td></tr>';
}

document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-criminale').value;
    const crimine = document.getElementById('crimine').value;
    const data = document.getElementById('data-crimine').value;
    registri.push({ nome, crimine, data });
    document.getElementById('form-registro').reset();
    alert('Registro aggiunto con successo!');
});

