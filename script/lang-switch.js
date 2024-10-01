document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll("[data-lang]");
    const langTexts = {
        'en': {
            'title': 'GOSET Nathan',
            'welcome': 'Welcome to my portfolio!',
            'download': 'Download my CV (pdf)',
            'description': "To briefly introduce myself, my name is Nathan, and I come from Herve. " +
                "I have been playing volleyball since childhood, and it has always been a significant part of my life. " +
                "This experience has helped me develop my teamwork skills and ease of communication with others. " +
                "Computer science has also been a strong presence in my life, starting with video games and later through my studies. " +
                "It's a field that has always intrigued me, both for its complexity and its diversity.",
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
            'description': "Pour me présenter brièvement, je m'appelle Nathan et je viens de Herve. " +
                "Je fais du volley depuis mon enfance et ça a toujours été une grande part de ma vie. " +
                "Cela m'a permis de développer mon esprit d'équipe et cette facilité de contact avec les autres. " +
                "L'informatique a également été fort présent, à travers les jeux vidéos au début, puis via mes études. " +
                "C'est un milieu qui m'a toujours fort intrigué, par sa complexité mais également par sa diversité.",
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
        localStorage.setItem('preferredLanguage', lang);
    };

    document.querySelectorAll('.language').forEach(langSelector => {
        langSelector.addEventListener('click', () => {
            changeLanguage(langSelector.id);
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);
});
