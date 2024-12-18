document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Simulate login process
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("loading-screen").style.display = "block";

  // Simulate loading for 2 seconds
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

function addDenuncia() {
  alert('Funzione per aggiungere denuncia non implementata.');
}
