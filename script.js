// Variabili per la gestione degli elementi DOM
const loginForm = document.getElementById('login-form');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const databaseSection = document.getElementById('database');
const addForm = document.getElementById('add-form');
const searchInput = document.getElementById('search');
const recordList = document.getElementById('database-list');
const infoModal = document.getElementById('info-modal');
const infoContent = document.getElementById('info-details');

// Funzione per gestire il login
function login() {
    // Mostra la schermata di caricamento
    loginForm.style.display = 'none';
    loadingScreen.style.display = 'block';

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000);  // Simula il tempo di login, lo puoi adattare secondo necessità
}

// Funzione per cambiare la sezione mostrata
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('show'));

    document.getElementById(section).classList.add('show');
}

// Funzione per tornare alla schermata principale
function backToDashboard() {
    mainContent.style.display = 'block';
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('show'));
}

// Funzione per aggiungere una nuova scheda
function showAddForm() {
    addForm.classList.add('show');
}

// Funzione per salvare una nuova scheda nel database
document.getElementById('record-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const birthDate = document.getElementById('birthDate').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const residence = document.getElementById('residence').value;
    const penalties = document.getElementById('penalties').value;
    const trafficOffenses = document.getElementById('trafficOffenses').value;
    
    const recordId = Date.now(); // Usa un timestamp unico per identificare la scheda

    const record = {
        id: recordId,
        fullName,
        birthDate,
        birthPlace,
        residence,
        penalties,
        trafficOffenses,
        createdBy: 'admin' // Qui puoi aggiungere un sistema per identificare l'utente loggato
    };

    // Crea una nuova scheda nel DOM
    const newRecord = document.createElement('li');
    newRecord.classList.add('record-item');
    newRecord.setAttribute('data-id', recordId);
    newRecord.innerHTML = `
        <strong>${fullName}</strong> - ${birthDate} <br>
        <small>Creato da: ${record.createdBy}</small>
    `;
    newRecord.addEventListener('click', () => openRecordDetails(record));
    
    recordList.appendChild(newRecord);

    // Resetta il modulo e nasconde il form
    document.getElementById('record-form').reset();
    addForm.classList.remove('show');
});

// Funzione per visualizzare i dettagli di una scheda
function openRecordDetails(record) {
    const detailsHtml = `
        <strong>Nome Completo:</strong> ${record.fullName} <br>
        <strong>Data di Nascita:</strong> ${record.birthDate} <br>
        <strong>Luogo di Nascita:</strong> ${record.birthPlace} <br>
        <strong>Comune di Residenza:</strong> ${record.residence} <br>
        <strong>Precedenti Penali:</strong> ${record.penalties} <br>
        <strong>Reati Stradali:</strong> ${record.trafficOffenses} <br>
        <strong>Creato da:</strong> ${record.createdBy} <br>
    `;
    
    infoContent.innerHTML = detailsHtml;
    infoModal.style.display = 'flex';
}

// Funzione per chiudere il modal
function closeModal() {
    infoModal.style.display = 'none';
}

// Funzione di ricerca schede nel database
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const records = document.querySelectorAll('.record-item');
    
    records.forEach(record => {
        const recordText = record.textContent.toLowerCase();
        if (recordText.includes(searchTerm)) {
            record.style.display = 'block';
        } else {
            record.style.display = 'none';
        }
    });
});
