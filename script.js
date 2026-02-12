function sendWhatsApp(e){
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let numero = "221782186007"; // mets ton numéro WhatsApp ici

    let texte = `Bonjour MASTERCLEANER 👋%0A
Nom: ${nom}%0A
Email: ${email}%0A
Message: ${message}`;

    let url = `https://wa.me/${numero}?text=${texte}`;
    window.open(url, "_blank");
}


let clientLocation = "Non fournie";

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            clientLocation = `https://www.google.com/maps?q=${lat},${lon}`;
            document.getElementById("locationStatus").innerText = "📍 Localisation détectée";
        },
        function() {
            document.getElementById("locationStatus").innerText = "❌ Localisation refusée";
        }
    );
}

function sendWhatsApp(e){
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let numero = "221782186007"; // ⚠️ TON numéro WhatsApp ici

    let texte = `Bonjour MASTERCLEANER 👋%0A
Nom: ${nom}%0A
Email: ${email}%0A
Message: ${message}%0A
Localisation du client: ${clientLocation}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;
    window.open(url, "_blank");
}


let commentaires = JSON.parse(localStorage.getItem("commentaires")) || [];

function afficherCommentaires(){
    const zone = document.getElementById("commentList");
    zone.innerHTML = "";
    commentaires.forEach(c => {
        zone.innerHTML += `
        <div class="card">
            ⭐⭐⭐⭐⭐
            <p>${c.texte}</p>
            <strong>- ${c.nom}</strong>
        </div>`;
    });
}

function addComment(e){
    e.preventDefault();
    let nom = document.getElementById("commentNom").value;
    let texte = document.getElementById("commentTexte").value;

    commentaires.push({nom: nom, texte: texte});
    localStorage.setItem("commentaires", JSON.stringify(commentaires));

    document.getElementById("commentNom").value = "";
    document.getElementById("commentTexte").value = "";

    afficherCommentaires();
}

// Afficher au chargement
afficherCommentaires();