const button = document.getElementById('burgerbtn');
const navUl = document.getElementById('nav-ul');

button.addEventListener ('click', function(event) {
    navUl.classList.toggle('show');
})