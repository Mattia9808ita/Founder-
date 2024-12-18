const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Per servire file statici come HTML e CSS

// Simulazione di un database in memoria
const users = [
    { username: 'admin', password: 'admin123' }
];

const data = [
    { id: 1, name: "Giovanni Rossi", role: "Agente" },
    { id: 2, name: "Francesca Bianchi", role: "Ispettore" },
    { id: 3, name: "Marco Verdi", role: "Commissario" }
];

// Endpoint per login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send({ success: true });
    } else {
        res.status(401).send({ success: false, message: "Credenziali non valide!" });
    }
});

// Endpoint per ottenere i dati
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
