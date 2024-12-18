document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Grazie, ${name}! Il tuo messaggio è stato inviato con successo.`);
            form.reset();
        } else {
            alert('Per favore, compila tutti i campi del modulo.');
        }
    });
});
