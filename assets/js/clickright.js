    // Sélectionnez l'image par son ID
    var logoImage = document.getElementById("logoIImage");
    
    // Ajoutez un gestionnaire d'événements pour le clic droit
    logoImage.addEventListener("contextmenu", function(event) {
      // Empêchez le menu contextuel par défaut de s'afficher
      event.preventDefault();
      
      // Redirigez vers l'URL souhaitée (remplacez "URL_DE_REDIRECTION" par l'URL de votre choix)
      window.location.href = "https://github.com/haade-administrator/assets";
    });