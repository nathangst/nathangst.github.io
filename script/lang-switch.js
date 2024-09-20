document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll("[data-lang]");
    const langTexts = {
        'en': {
            'title': 'GOSET Nathan',
            'welcome': 'Welcome to my portfolio!',
            'download': 'Download my CV (pdf)',
            'nav-home': 'Home',
            'nav-works': 'Works',
            'nav-certifications': 'Certifications',
            'nav-cv': 'Resume',
            'lang-en': 'English',
            'lang-fr': 'Français',
            'project-title-hp': 'Honeypot Project',
            'project-description-hp': 'Discover a project where I explored cybersecurity concepts using a honeypot.',
            'project-title-asbl': 'ASBL Project (WIP)',
            'project-description-asbl': 'Discover a project where I developed a website for an ASBL for practice.'

        },
        'fr': {
            'title': 'GOSET Nathan',
            'welcome': 'Bienvenue sur mon portfolio !',
            'download': 'Téléchargez mon CV (pdf)',
            'nav-home': 'Accueil',
            'nav-works': 'Travaux',
            'nav-certifications': 'Certifications',
            'nav-cv': 'CV',
            'lang-en': 'Anglais',
            'lang-fr': 'Français',
            'project-title-hp': 'Projet Honeypot',
            'project-description-hp': 'Découvrez un projet où j\'ai exploré les concepts de cybersécurité avec un honeypot.',
            'project-title-asbl': 'Projet ASBL (WIP)',
            'project-description-asbl': 'Découvrez un projet où j\'ai développé un site web d\'entrainement pour une ASBL.'
        }
    };

    const changeLanguage = (lang) => {
        langElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (langTexts[lang] && langTexts[lang][key]) {
                if(el.tagName === "IMG") {
                    el.classList.toggle('active', el.id === lang);
                } else if(el.classList.contains('btn-cv')) {
                    el.innerHTML = `<i class="fa-solid fa-circle-down"></i> ${langTexts[lang][key]}`;
                } else {
                    el.textContent = langTexts[lang][key];
                }
            }
        });
        localStorage.setItem('preferredLanguage', lang); // Sauvegarder la langue
    };

    document.querySelectorAll('.language').forEach(langSelector => {
        langSelector.addEventListener('click', () => {
            changeLanguage(langSelector.id);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'fr'; // Charger la langue sauvegardée
    changeLanguage(savedLang);
});
