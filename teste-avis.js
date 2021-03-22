const messageComment = document.getElementById("commentaire");
const pageAvis = document.getElementById("bloc-avis");
const boutonComment = document.getElementById("comment");


boutonComment.addEventListener('click', function(event){
    const addAvis = document.createElement('div');
    addAvis.classList.add('avis')
    addAvis.innerHTML = messageComment.value;
    pageAvis.appendChild(addAvis);
});
