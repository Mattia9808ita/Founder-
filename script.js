let currentUser = ''; // Simula un utente che si è autenticato
let records = []; // Lista di schede

// Funzione di login (simulato per questo esempio)
function login() {
    currentUser = document.getElementById('username').value;
    if (currentUser) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('loading-screen').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 2000);
    }
}

// Mostra una sezione
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('show'));
    document.getElementById(section).classList.add('show');
}

// Aggiungi una nuova scheda
function showAddForm() {
    document.getElementById('add-form').style.display = 'block';
}

// Chiudi il modulo di aggiunta
function closeAddForm() {
    document.getElementById('add-form').style.display = 'none';
}

// Aggiungi una nuova scheda al database
document.getElementById('record-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newRecord = {
        id: Date.now(),
        name: document.getElementById('fullName').value,
        birthDate: document.getElementById('birthDate').value,
        birthPlace: document.getElementById('birthPlace').value,
        residence: document.getElementById('residence').value,
        penalties: document.getElementById('penalties').value,
        trafficOffenses: document.getElementById('trafficOffenses').value,
        createdBy: currentUser
    };

    records.push(newRecord);
    displayRecords();
    closeAddForm();
});

// Mostra le schede nel database
function displayRecords() {
    const list = document.getElementById('database-list');
    list.innerHTML = '';
    records.forEach(record => {
        const listItem = document.createElement('li');
        listItem.classList.add('record-item');
        listItem.innerHTML = `
            <strong>${record.name}</strong>
            <br>
            <button onclick="viewDetails(${record.id})">Visualizza</button>
            <button onclick="editRecord(${record.id})">Modifica</button>
            <button onclick="deleteRecord(${record.id})">Elimina</button>
        `;
        list.appendChild(listItem);
    });
}

// Visualizza i dettagli di una scheda
function viewDetails(id) {
    const record = records.find(r => r.id === id);
    const details = document.getElementById('info-details');
    details.innerHTML = `
        <h3>${record.name}</h3>
        <p><strong>Data di Nascita:</strong> ${record.birthDate}</p>
        <p><strong>Luogo di Nascita:</strong> ${record.birthPlace}</p>
        <p><strong>Comune di Residenza:</strong> ${record.residence}</p>
        <p><strong>Precedenti Penali:</strong> ${record.penalties}</p>
        <p><strong>Reati Stradali:</strong> ${record.trafficOffenses}</p>
    `;
    document.getElementById('info-modal').style.display = 'block';
}

// Chiudi la modale dei dettagli
function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

// Modifica una scheda (funzionalità semplificata)
function editRecord(id) {
    const record = records.find(r => r.id === id);
    document.getElementById('fullName').value = record.name;
    document.getElementById('birthDate').value = record.birthDate;
    document.getElementById('birthPlace').value = record.birthPlace;
    document.getElementById('residence').value = record.residence;
    document.getElementById('penalties').value = record.penalties;
    document.getElementById('trafficOffenses').value = record.trafficOffenses;
    showAddForm();
    deleteRecord(id);
}

// Elimina una scheda
function deleteRecord(id) {
    records = records.filter(r => r.id !== id);
    displayRecords();
}

