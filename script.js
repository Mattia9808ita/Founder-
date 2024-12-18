// Funzione di login simulato
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Simula login
  const username = document.getElementById("username").value;
  currentUser = username; // Imposta l'utente loggato

  // Mostra la schermata di caricamento
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("loading-screen").style.display = "block";

  // Simula caricamento per 2 secondi
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("dashboard").style.display = "block";
  }, 2000);
});

// Funzione per mostrare una sezione
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.style.display = "none");

  document.getElementById(sectionId).style.display = "block";
}

// Funzione per mostrare la sottosezione
function showSubSection(subSectionId) {
  const subSections = document.querySelectorAll(".subsection");
  subSections.forEach(sub => sub.style.display = "none");

  document.getElementById(subSectionId).style.display = "block";
}

// Mostra il form per aggiungere una nuova scheda
function showAddForm() {
  document.getElementById("add-form").classList.add('show');
}

// Chiudi il form di aggiunta
function closeAddForm() {
  document.getElementById("add-form").classList.remove('show');
}

// Aggiungi una nuova scheda al database
document.getElementById("form-scheda").addEventListener("submit", function(event) {
  event.preventDefault();

  // Ottieni i dati dal modulo
  const nomeCompleto = document.getElementById("nome-completo").value;
  const dataNascita = document.getElementById("data-nascita").value;
  const luogoNascita = document.getElementById("luogo-nascita").value;
  const comuneResidenza = document.getElementById("comune-residenza").value;
  const precedentiPenali = document.getElementById("precedenti-penali").value;
  const reatiStradali = document.getElementById("reati-stradali").value;

  // Creiamo l'oggetto con i dati
  const newItem = {
    nomeCompleto,
    dataNascita,
    luogoNascita,
    comuneResidenza,
    precedentiPenali,
    reatiStradali,
    createdBy: currentUser // Nome utente che ha creato la scheda
  };

  // Crea una nuova lista con la scheda
  const newListItem = document.createElement("li");
  newListItem.textContent = nomeCompleto;

  // Aggiungi un evento di click per aprire il modal con le informazioni
  newListItem.addEventListener("click", function() {
    showInfoModal(newItem);
  });

  // Aggiungi la scheda alla lista del database
  document.getElementById("database-list").appendChild(newListItem);

  // Chiudi il form dopo aver salvato la scheda
  closeAddForm();
});

// Mostra il modal con i dettagli della scheda
function showInfoModal(item) {
  const modal = document.getElementById("info-modal");
  const infoContent = document.getElementById("info-content");

  // Popola il modal con le informazioni della scheda
  infoContent.innerHTML = `
    <p><strong>Nome Completo:</strong> ${item.nomeCompleto}</p>
    <p><strong>Data di Nascita:</strong> ${item.dataNascita}</p>
    <p><strong>Luogo di Nascita:</strong> ${item.luogoNascita}</p>
    <p><strong>Comune di Residenza:</strong> ${item.comuneResidenza}</p>
    <p><strong>Precedenti Penali:</strong> ${item.precedentiPenali}</p>
    <p><strong>Reati Stradali:</strong> ${item.reatiStradali}</p>
    <p><strong>Creato da:</strong> ${item.createdBy}</p> <!-- Mostra solo l'utente che ha creato la scheda -->
  `;

  // Mostra il modal
  modal.style.display = "block";
}

// Chiudi il modal delle informazioni
function closeInfoModal() {
  document.getElementById("info-modal").style.display = "none";
}

// Funzione per cercare una scheda
function searchDatabase() {
  const query = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll("#database-list li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
