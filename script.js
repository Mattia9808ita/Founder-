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

// Gestione della registrazione
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();

    const registro = {
        nome: document.getElementById('nome-completo').value,
        dataNascita: document.getElementById('data-nascita').value,
        luogoNascita: document.getElementById('luogo-nascita').value,
        comuneResidenza: document.getElementById('comune-residenza').value,
        reatiPenali: document.getElementById('reati-penali').value,
        reatiStradali: document.getElementById('reati-stradali').value,
        professione: document.getElementById('professione-attuale').value,
    };

    registri.push(registro);

    document.getElementById('form-registro').reset();
    document.getElementById('registro-messaggio').textContent = "Registro aggiunto con successo!";
    mostraRegistri();
});

// Funzione per visualizzare i registri
function mostraRegistri() {
    const lista = document.getElementById('lista-registri');
    lista.innerHTML = registri.map(registro => `
        <div class="registro">
            <h3>${registro.nome}</h3>
            <p><strong>Data di Nascita:</strong> ${registro.dataNascita}</p>
            <p><strong>Luogo di Nascita:</strong> ${registro.luogoNascita}</p>
            <p><strong>Comune di Residenza:</strong> ${registro.comuneResidenza}</p>
            <p><strong>Reati Penali:</strong> ${registro.reatiPenali}</p>
            <p><strong>Reati Stradali:</strong> ${registro.reatiStradali}</p>
            <p><strong>Professione:</strong> ${registro.professione}</p>
        </div>
    `).join('');
}
