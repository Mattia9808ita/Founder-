const registri = [];

// Verifica login all'avvio
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('utenteLoggato')) {
        mostraDatabase();
    } else {
        document.getElementById('login-registrazione').style.display = 'block';
    }
});

function mostraLogin() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    document.getElementById('registrazione').style.display = 'none';
}

function mostraRegistrazione() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('registrazione').style.display = 'block';
}

function mostraDatabase() {
    document.getElementById('login-registrazione').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('registrazione').style.display = 'none';
    document.getElementById('database').style.display = 'block';
}

function logout() {
    localStorage.removeItem('utenteLoggato');
    location.reload();
}

document.getElementById('form-registro').addEventListener('submit', function (event) {
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
