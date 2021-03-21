const button = document.getElementById('burgerbtn');
const navUl = document.getElementById('nav-ul');

button.addEventListener ('click', function(event) {
    navUl.classList.toggle('show');
})

// page Contact

const nom = document.getElementById("Nom");
const email = document.getElementById("Email");
const bouton = document.getElementById("btn-envoi");

bouton.addEventListener('click', function(){
    alert(`Merci pour votre Message ${nom.value} ! Nous vous répondrons sur votre messagerie ${email.value} . `)
})