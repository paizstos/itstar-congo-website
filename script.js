document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for the CTA button
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Gestion du formulaire
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche le rechargement de la page

      // Récupère les données du formulaire
      const name = document.getElementById("name").value;
      const contact = document.getElementById("contact").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Données à envoyer à EmailJS
      const payload = {
        service_id: "service_eip0lei", // Remplacez par votre Service ID
        template_id: "template_7izxe49", // Remplacez par votre Template ID
        user_id: "0itHGT0RE2JJZzn8U", // Remplacez par votre clé publique
        template_params: {
          name: name,
          contact: contact,
          subject: subject,
          message: message,
        },
      };

      // Envoi de la requête HTTP avec Fetch
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Email envoyé avec succès !");
            alert("Votre message a été envoyé !");
            contactForm.reset(); // Réinitialise le formulaire
          } else {
            console.error("Erreur lors de l'envoi :", response.statusText);
            alert("Une erreur s'est produite. Veuillez réessayer.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la requête :", error);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        });
    });
  } else {
    console.error("Formulaire non trouvé : Vérifiez l'ID 'contactForm' dans le DOM.");
  }
  

  // Chatbot
  const chatbotButton = document.getElementById('chatbot-btn');
  if (chatbotButton) {
    chatbotButton.addEventListener('click', () => {
      const chatbotWindow = document.getElementById('chatbot-window');
      const isVisible = chatbotWindow.style.display === 'block';
      chatbotWindow.style.display = isVisible ? 'none' : 'block';

      // Charger le bot seulement si la fenêtre est ouverte
      if (!isVisible) {
        const iframe = document.getElementById('chatbot-frame');
        iframe.src = 'URL_DE_VOTRE_BOTPRESS_EN_LIGNE';
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".scroll-container");

  container.addEventListener("wheel", function (event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector('.about');
  const toggleBtn = document.querySelector('.toggle-btn');

  toggleBtn.addEventListener('click', function () {
    const isOpen = aboutSection.classList.contains('open');
    aboutSection.classList.toggle('open');

    // Change the button text
    toggleBtn.textContent = isOpen ? '+' : '-';
  });
});
