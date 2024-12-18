// Simulazione di un database per l'esempio
const fakeDatabase = [
    { id: 1, name: "Giovanni Rossi", role: "Agente" },
    { id: 2, name: "Francesca Bianchi", role: "Ispettore" },
    { id: 3, name: "Marco Verdi", role: "Commissario" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulazione login
    if (username === 'admin' && password === 'admin123') {
        document.getElementById('loginError').style.display = 'none';
        document.getElementById('data').style.display = 'block';
        populateDataTable();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

function populateDataTable() {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    fakeDatabase.forEach(data => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.role}</td>
            <td><button onclick="deleteRow(${data.id})">Elimina</button></td>
        `;
    });
}

function deleteRow(id) {
    const index = fakeDatabase.findIndex(data => data.id === id);
    if (index !== -1) {
        fakeDatabase.splice(index, 1);
        document.getElementById('dataTable').deleteRow(index + 1);
    }
}
