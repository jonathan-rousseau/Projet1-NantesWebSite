const button = document.getElementById('burgerbtn');
const navUl = document.getElementById('nav-ul');
let menuIcon = document.getElementById('menuicon');

button.addEventListener ('click', function(event) {
    navUl.classList.toggle('show');

        if (menuIcon.className === "fas fa-bars") {
            menuIcon.className = "fas fa-times";
        }
        else {
            menuIcon.className = "fas fa-bars";
        }
}

);

ScrollReveal().reveal('#titrearticleaccueil', { duration: 2000 });
ScrollReveal().reveal('.blockarticle', { duration: 2000 });
ScrollReveal().reveal('#block-dev', { duration: 2000 });
ScrollReveal().reveal('#accueilcontainer1', { duration: 2000 });
ScrollReveal().reveal('#bouffay', { duration: 2000 });
ScrollReveal().reveal('#lieu-unique', { duration: 2000 });
ScrollReveal().reveal('#chateau', { duration: 2000 });
ScrollReveal().reveal('#cathedrale', { duration: 2000 });
ScrollReveal().reveal('.container', { duration: 2000 });
ScrollReveal().reveal('#bloc-avis-comment', { duration: 2000 });

