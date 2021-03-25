const messageComment = document.getElementById("commentaire");
const pageAvis = document.getElementById("bloc-avis");
const boutonComment = document.getElementById("comment");
const nom = document.getElementById('Name')

    
boutonComment.addEventListener('click', function(event){
    const addAvis = document.createElement('div');
    addAvis.classList.add('avis');
    const addNom = document.createElement("h4");
    const addMessage = document.createElement("p");
    addNom.innerHTML = nom.value;
    addMessage.innerHTML = messageComment.value   
    addAvis.appendChild(addNom);
    addAvis.appendChild(addMessage); 
    pageAvis.appendChild(addAvis);   
});