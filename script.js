const agenti = ["Mario Rossi", "Luca Bianchi", "Giulia Verdi"];
const registri = [];

// Funzione per gestire la registrazione
document.getElementById('form-registrazione').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    if (localStorage.getItem(username)) {
        document.getElementById('reg-messaggio').textContent = "Nome utente già registrato!";
    } else {
        localStorage.setItem(username, password);
        document.getElementById('reg-messaggio').textContent = "Registrazione completata con successo!";
        document.getElementById('form-registrazione').reset();
    }
});

// Funzione per gestire il login
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const savedPassword = localStorage.getItem(username);
    if (savedPassword && savedPassword === password) {
        document.getElementById('login-messaggio').textContent = "Accesso effettuato con successo!";
    } else {
        document.getElementById('login-messaggio').textContent = "Nome utente o password errati!";
    }
});

// Funzione per cercare agenti
function cercaAgente() {
    const nome = document.getElementById('nome-agente').value.toLowerCase();
    const risultati = agenti.filter(agente => agente.toLowerCase().includes(nome));
    const listaRisultati = document.getElementById('risultati-agenti');
    listaRisultati.innerHTML = risultati.length 
        ? risultati.map(r => `<li>${r}</li>`).join('') 
        : '<li>Nessun risultato trovato</li>';
}

// Funzione per caricare i registri criminali
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

// Funzione per aggiungere un registro criminale
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-criminale').value;
    const crimine = document.getElementById('crimine').value;
    const data = document.getElementById('data-crimine').value;
    registri.push({ nome, crimine, data });
    document.getElementById('form-registro').reset();
    alert('Registro aggiunto con successo!');
});
