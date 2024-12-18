const officers = ["John Doe", "Jane Smith", "Jake Peralta"];
const records = [];

function searchOfficer() {
    const name = document.getElementById('officer-name').value.toLowerCase();
    const results = officers.filter(officer => officer.toLowerCase().includes(name));
    const resultsList = document.getElementById('officer-results');
    resultsList.innerHTML = results.length ? results.map(r => `<li>${r}</li>`).join('') : '<li>No results found</li>';
}

function loadRecords() {
    const tableBody = document.getElementById('records-table').querySelector('tbody');
    tableBody.innerHTML = records.length 
        ? records.map(record => `
            <tr>
                <td>${record.name}</td>
                <td>${record.crime}</td>
                <td>${record.date}</td>
            </tr>`).join('') 
        : '<tr><td colspan="3">No records found</td></tr>';
}

document.getElementById('record-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('criminal-name').value;
    const crime = document.getElementById('crime').value;
    const date = document.getElementById('crime-date').value;
    records.push({ name, crime, date });
    document.getElementById('record-form').reset();
    alert('Record added successfully!');
});
