let currentUser = "admin";  // Simuliamo un utente loggato (modifica se necessario)

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Simula login
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("loading-screen").style.display = "block";

  // Simula caricamento per 2 secondi
  setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("dashboard").style.display = "block";
  }, 2000);
});

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.style.display = "none");

  document.getElementById(sectionId).style.display = "block";
}

function showSubSection(subSectionId) {
  const subSections = document.querySelectorAll(".subsection");
  subSections.forEach(sub => sub.style.display = "none");

  document.getElementById(subSectionId).style.display = "block";
}

function showAddForm() {
  document.getElementById("add-form").classList.add('show');
}

function closeAddForm() {
  document.getElementById("add-form").classList.remove('show');
}

document.getElementById("form-scheda").addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("nome-completo").value;
  const dataNascita = document.getElementById("data-nascita").value;
  const luogoNascita = document.getElementById("luogo-nascita").value;
  const comuneResidenza = document.getElementById("comune-residenza").value;
  const precedentiPenali = document.getElementById("precedenti-penali").value;
  const reatiStradali = document.getElementById("reati-stradali").value;

  const newListItem = document.createElement("li");
  newListItem.textContent = `${nomeCompleto} (Creato da: ${currentUser})`;

  // Attach click event to show the details of the created record
  newListItem.addEventListener("click", function() {
    showInfoModal({
      nomeCompleto,
      dataNascita,
      luogoNascita,
      comuneResidenza,
      precedentiPenali,
      reatiStradali,
      createdBy: currentUser
    });
  });

  // Aggiungi la nuova scheda alla lista "Database"
  document.getElementById("database-list").appendChild(newListItem);

  // Chiudi il modulo
  closeAddForm();
});

function showInfoModal(info) {
  const modal = document.getElementById("info-modal");
  const infoContent = document.getElementById("info-content");

  // Popola il contenuto del modal con le informazioni della scheda
  infoContent.innerHTML = `
    <p><strong>Nome Completo:</strong> ${info.nomeCompleto}</p>
    <p><strong>Data di Nascita:</strong> ${info.dataNascita}</p>
    <p><strong>Luogo di Nascita:</strong> ${info.luogoNascita}</p>
    <p><strong>Comune di Residenza:</strong> ${info.comuneResidenza}</p>
    <p><strong>Precedenti Penali:</strong> ${info.precedentiPenali}</p>
    <p><strong>Reati Stradali:</strong> ${info.reatiStradali}</p>
    <p><strong>Creato da:</strong> ${info.createdBy}</p>
  `;

  // Mostra il modal
  modal.style.display = "block";
}

function closeInfoModal() {
  document.getElementById("info-modal").style.display = "none";
}

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
