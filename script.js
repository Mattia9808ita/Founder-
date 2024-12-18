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
  newListItem.textContent = nomeCompleto;

  // Aggiungi la nuova scheda alla lista "Database"
  document.getElementById("database-list").appendChild(newListItem);

  // Chiudi il modulo
  closeAddForm();
});

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
