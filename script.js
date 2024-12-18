// Variabili globali per gestire l'accesso
let loggedInUser = null;
let records = [];

// Funzione per gestire il login
function login() {
    const username = document.getElementById("username").value;
    const rpName = document.getElementById("rp-name").value;
    const password = document.getElementById("password").value;

    // Verifica credenziali (per ora un semplice controllo)
    if (username && rpName && password) {
        loggedInUser = username; // Simula un login con l'utente
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("loading-screen").style.display = "flex";

        // Finta una breve attesa prima di aprire il contenuto
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").style.display = "flex";
            showSection('database');
        }, 2000);
    } else {
        alert("Per favore, compila tutti i campi.");
    }
}

// Funzione per mostrare la sezione selezionata
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('show'));
    document.getElementById(sectionId).classList.add('show');
}

// Funzione per aprire il modulo di aggiunta scheda
function showAddForm() {
    document.getElementById("add-form").style.display = "flex";
}

// Funzione per chiudere il modulo di aggiunta
function closeAddForm() {
    document.getElementById("add-form").style.display = "none";
}

// Funzione per salvare una nuova scheda
document.getElementById("record-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const birthDate = document.getElementById("birthDate").value;
    const birthPlace = document.getElementById("birthPlace").value;
    const residence = document.getElementById("residence").value;
    const penalties = document.getElementById("penalties").value;
    const trafficOffenses = document.getElementById("trafficOffenses").value;

    if (fullName && birthDate && birthPlace && residence && penalties && trafficOffenses) {
        const record = {
            id: records.length + 1,
            fullName,
            birthDate,
            birthPlace,
            residence,
            penalties,
            trafficOffenses,
            createdBy: loggedInUser
        };

        records.push(record);
        closeAddForm();
        renderRecords();
    } else {
        alert("Per favore, completa tutti i campi del modulo.");
    }
});

// Funzione per renderizzare le schede nel database
function renderRecords() {
    const recordList = document.getElementById("database-list");
    recordList.innerHTML = ''; // Pulisce la lista

    records.forEach(record => {
        const listItem = document.createElement("li");
        listItem.className = "record-item";
        listItem.innerHTML = `
            <strong>${record.fullName}</strong><br>
            Creato da: ${record.createdBy}<br>
            <button onclick="showRecordDetails(${record.id})">Dettagli</button>
            <button onclick="editRecord(${record.id})">Modifica</button>
            <button onclick="deleteRecord(${record.id})">Elimina</button>
        `;
        recordList.appendChild(listItem);
    });
}

// Funzione per visualizzare i dettagli di una scheda
function showRecordDetails(id) {
    const record = records.find(r => r.id === id);
    const infoDetails = document.getElementById("info-details");

    if (record) {
        infoDetails.innerHTML = `
            <p><strong>Nome Completo:</strong> ${record.fullName}</p>
            <p><strong>Data di Nascita:</strong> ${record.birthDate}</p>
            <p><strong>Luogo di Nascita:</strong> ${record.birthPlace}</p>
            <p><strong>Comune di Residenza:</strong> ${record.residence}</p>
            <p><strong>Precedenti Penali:</strong> ${record.penalties}</p>
            <p><strong>Reati Stradali:</strong> ${record.trafficOffenses}</p>
            <p><strong>Creato da:</strong> ${record.createdBy}</p>
        `;
    }

    document.getElementById("info-modal").style.display = "flex";
}

// Funzione per chiudere il modal con i dettagli
function closeModal() {
    document.getElementById("info-modal").style.display = "none";
}

// Funzione per cercare una scheda nel database
document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRecords = records.filter(record => record.fullName.toLowerCase().includes(searchTerm));
    
    const recordList = document.getElementById("database-list");
    recordList.innerHTML = ''; // Pulisce la lista

    filteredRecords.forEach(record => {
        const listItem = document.createElement("li");
        listItem.className = "record-item";
        listItem.innerHTML = `
            <strong>${record.fullName}</strong><br>
            Creato da: ${record.createdBy}<br>
            <button onclick="showRecordDetails(${record.id})">Dettagli</button>
            <button onclick="editRecord(${record.id})">Modifica</button>
            <button onclick="deleteRecord(${record.id})">Elimina</button>
        `;
        recordList.appendChild(listItem);
    });
});

// Funzione per modificare una scheda
function editRecord(id) {
    const record = records.find(r => r.id === id);
    if (record) {
        document.getElementById("fullName").value = record.fullName;
        document.getElementById("birthDate").value = record.birthDate;
        document.getElementById("birthPlace").value = record.birthPlace;
        document.getElementById("residence").value = record.residence;
        document.getElementById("penalties").value = record.penalties;
        document.getElementById("trafficOffenses").value = record.trafficOffenses;
        document.getElementById("record-form").onsubmit = function(e) {
            e.preventDefault();
            updateRecord(id);
        };
        showAddForm();
    }
}

// Funzione per aggiornare la scheda
function updateRecord(id) {
    const record = records.find(r => r.id === id);
    const fullName = document.getElementById("fullName").value;
    const birthDate = document.getElementById("birthDate").value;
    const birthPlace = document.getElementById("birthPlace").value;
    const residence = document.getElementById("residence").value;
    const penalties = document.getElementById("penalties").value;
    const trafficOffenses = document.getElementById("trafficOffenses").value;

    if (fullName && birthDate && birthPlace && residence && penalties && trafficOffenses) {
        record.fullName = fullName;
        record.birthDate = birthDate;
        record.birthPlace = birthPlace;
        record.residence = residence;
        record.penalties = penalties;
        record.trafficOffenses = trafficOffenses;

        closeAddForm();
        renderRecords();
    } else {
        alert("Per favore, completa tutti i campi del modulo.");
    }
}

// Funzione per eliminare una scheda
function deleteRecord(id) {
    if (confirm("Sei sicuro di voler eliminare questa scheda?")) {
        records = records.filter(record => record.id !== id);
        renderRecords();
    }
}
