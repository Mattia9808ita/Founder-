// Variabili globali
let currentUser = null;
let records = [];

// Funzione di login
function login() {
    const username = document.getElementById('username').value;
    const rpname = document.getElementById('rpname').value;
    const password = document.getElementById('password').value;

    if (username && rpname && password) {
        currentUser = { username, rpname };
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('loading-screen').style.display = 'block';

        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 2000);
    } else {
        alert("Compila tutti i campi.");
    }
}

// Funzione per cambiare sezione
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('show'));

    document.getElementById(section).classList.add('show');
}

// Funzione per tornare alla schermata principale
function backToDashboard() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('show'));
    document.getElementById('dashboard').classList.add('show');
}

// Funzione per mostrare il modulo di aggiunta
function showAddForm() {
    document.getElementById('add-form').classList.add('show');
}

// Funzione per salvare un record
function saveRecord() {
    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const residence = document.getElementById('residence').value;
    const penalties = document.getElementById('penalties').value;
    const trafficOffenses = document.getElementById('trafficOffenses').value;

    if (fullName && birthDate && birthPlace && residence && penalties && trafficOffenses) {
        const record = {
            fullName,
            birthDate,
            birthPlace,
            residence,
            penalties,
            trafficOffenses,
            creator: currentUser.username
        };

        records.push(record);
        document.getElementById('add-form').classList.remove('show');
        displayRecords();
    } else {
        alert("Compila tutti i campi.");
    }
}

// Funzione per visualizzare i record
function displayRecords() {
    const databaseList = document.getElementById('database-list');
    databaseList.innerHTML = '';
    records.forEach(record => {
        const li = document.createElement('li');
        li.textContent = record.fullName;
        li.onclick = () => showRecordInfo(record);
        databaseList.appendChild(li);
    });
}

// Funzione per mostrare i dettagli di un record
function showRecordInfo(record) {
    const modal = document.getElementById('info-modal');
    const infoContent = document.getElementById('info-details');

    infoContent.innerHTML = `
        <strong>Nome Completo:</strong> ${record.fullName} <br>
        <strong>Data di Nascita:</strong> ${record.birthDate} <br>
        <strong>Luogo di Nascita:</strong> ${record.birthPlace} <br>
        <strong>Comune di Residenza:</strong> ${record.residence} <br>
        <strong>Precedenti Penali:</strong> ${record.penalties} <br>
        <strong>Reati Stradali:</strong> ${record.trafficOffenses} <br>
        <strong>Creato da:</strong> ${record.creator}
    `;

    modal.style.display = 'flex';
}

// Funzione per chiudere il modal
function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}
