const agenti = ["Mario Rossi", "Luca Bianchi", "Giulia Verdi"];
const registri = [];

// Verifica login all'avvio
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('utenteLoggato')) {
        mostraDatabase();
    } else {
        document.getElementById('login-registrazione').style.display = 'block';
    }
});

// Mostra il modulo di login
function mostraLogin() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('registrazione').style.display = 'none';
}

// Mostra il modulo di registrazione
function mostraRegistrazione() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('registrazione').style.display = 'block';
}

// Mostra il database dopo il login
function mostraDatabase() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('registrazione').style.display = 'none';
    document.getElementById('database').style.display = 'block';
}

// Logout
function logout() {
    localStorage.removeItem('utenteLoggato');
    location.reload();
}

// Gestione della registrazione
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
        mostraLogin();
    }
});

// Gestione del login
document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const savedPassword = localStorage.getItem(username);
    if (savedPassword && savedPassword === password) {
        localStorage.setItem('utenteLoggato', username);
        mostraDatabase();
    } else {
        document.getElementById('login-messaggio').textContent = "Nome utente o password errati!";
    }
});

// Funzioni per la gestione del database
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
