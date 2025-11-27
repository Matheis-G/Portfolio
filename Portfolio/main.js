// On attend que la carte de présentation soit là
const cartePresentation = document.getElementById("cartePresentation");
if (cartePresentation) {
    setTimeout(() => {
        cartePresentation.classList.add("actif");
    }, 3000);
}

// --- DICTIONNAIRE DE TRADUCTION ---
const traductions = {
    fr: {
        // Header & Footer
        nav_about: "Présentation",
        nav_projects: "Projets",
        nav_cv: "CV",
        nav_contact: "Contact",
        footer_copy: "© 2025 Matheïs Gilbrin • Étudiant IUT Annecy",

        // Page About
        hero_subtitle: "Étudiant en BUT Informatique & Data",
        hero_desc: "Passionné par le développement web et l'administration de données. Je transforme la curiosité en compétences concrètes.",
        btn_see_projects: "Voir mes projets",
        btn_contact_me: "Contactez moi",
        section_more: "Un peu plus sur moi",
        obj_title: "🎯 Mon Objectif",
        obj_desc: "Spécialisation en <strong>Gestion et Exploitation de données</strong> (IUT Annecy). Je cherche des défis techniques (SQL, Python, Web) pour innover.",
        anim_title: "🎮 Ce qui m'anime",
        anim_desc: "L'esprit d'équipe et la stratégie via les jeux vidéo (MOBA, FPS) et le sport. C'est là que je puise ma réactivité et mon sens du collectif.",
        hobby_title: "⌛ Mes passe-temps",
        hobby_desc: "La musique m'accompagne souvent dans la programmation. Sortir avec mes amis me permet de m'aérer l'esprit. Ma famille est également très importante à mes yeux.",

        // Page Projets
        proj_title: "Mes Réalisations",
        filter_all: "Tous",
        filter_web: "Web (PHP/JS)",
        filter_data: "Data (SQL/BI)",
        filter_python: "Python",
        
        // Projet Laravel
        p_laravel_date: "Oct 2025 - Jan 2026",
        p_laravel_title: "Application Web Laravel",
        p_laravel_place: "👥 Projet Universitaire (Équipe de 4)",
        p_laravel_desc: "App avec diagrammes BPMN et crypto.",
        p_laravel_details: "<strong>Détails :</strong> Authentification sécurisée, gestion des rôles.",
        btn_repo: "Voir le dépôt",

        // Projet Portfolio
        p_port_desc: "Site Portfolio JS",
        btn_code: "Voir le Code",

        // Projet Data
        p_data_title: "Dashboard Data & BI",
        p_data_place: "👥 Projet SAE en équipe - IUT Annecy",
        p_data_desc: "Conception d'un tableau de bord décisionnel interactif connecté à une base de données.",
        p_data_details: "<strong>Analyse :</strong> KPI dynamiques, filtrage par date, analyse des tendances.",
        btn_download: "Télécharger le rapport Excel",

        // Projet Mairie
        p_mairie_title: "Site Web Mairie de Péron",
        p_mairie_place: "👥 Projet d'équipe - Lycée Saint Exupéry",
        p_mairie_desc: "Conception et développement complet du site web institutionnel pour la mairie.",
        p_mairie_details: "<strong>Fonctionnalités :</strong> Actualités administrables, formulaire de contact, design responsive.",
        btn_visit: "Visiter le site",
        
        // Boutons génériques projets
        btn_see_more: "Voir plus ↓",
        btn_see_less: "Voir moins ↑",

        // Page CV
        cv_pdf: "📥 PDF",
        title_formation: "🎓 Formation",
        cv_but_title: "BUT Informatique",
        cv_but_place: "IUT Annecy (2ème année)",
        cv_but_desc: "Parcours Administration, Gestion et Exploitation de données.",
        cv_bac_title: "Baccalauréat STI2D",
        cv_bac_desc: "Option Systèmes d'Information et Numérique (SIN).",
        
        title_exp: "💼 Expériences",
        cv_exp_laravel_title: "Projet d'équipe - Application Web",
        cv_exp_laravel_place: "Université Savoie Mont Blanc",
        cv_exp_laravel_desc: "Développement d'une application Laravel en équipe de 4.",
        cv_exp_laravel_list: "<li>Diagrammes BPMN et cryptographie.</li><li>Conception de base de données.</li><li>Tableaux de bord Power BI.</li>",
        
        cv_exp_leaz_title: "Agent Services Techniques",
        cv_exp_leaz_date: "Étés 2023 & 2025",
        cv_exp_leaz_desc: "Maintenance, propreté et logistique pour assurer le bon fonctionnement des infrastructures municipales.",

        cv_exp_peron_title: "Projet Web - Mairie de Péron",
        cv_exp_peron_desc: "Conception et développement du site web pour la Mairie de Péron.",

        title_skills: "🛠 Compétences Techniques",
        skill_intro_title: "Développement & Données",
        skill_intro_desc: "Maîtrise des langages et outils fondamentaux :",

        title_soft: "🧠 Savoir-être",
        soft_title: "Compétences Générales",
        soft_desc: "Atouts personnels développés au fil des projets :",
        soft_list: "<li>Autonomie et prise d'initiative</li><li>Aisance relationnelle et interculturelle</li><li>Curiosité et soif d'apprendre</li><li>Motivation et sérieux</li>",

        title_ref: "👥 Références",
        ref_chris_role: "Enseignant Chercheur - IUT Annecy",
        ref_steph_role: "Professeure & Coordinatrice Internationale",

        // Page Contact
        form_name: "Nom",
        form_email: "Email",
        form_email_help: "Cela m'aidera à vous répondre via un mail.",
        form_msg: "Message",
        form_msg_help: "De quoi voulez-vous parler ?",
        btn_send: "Envoyer"
    },
    en: {
        // Header & Footer
        nav_about: "About",
        nav_projects: "Projects",
        nav_cv: "CV",
        nav_contact: "Contact",
        footer_copy: "© 2025 Matheïs Gilbrin • IT Student IUT Annecy",

        // Page About
        hero_subtitle: "IT & Data Student",
        hero_desc: "Passionate about web development and data administration. I turn curiosity into concrete skills.",
        btn_see_projects: "See my projects",
        btn_contact_me: "Contact me",
        section_more: "A bit more about me",
        obj_title: "🎯 My Goal",
        obj_desc: "Specializing in <strong>Data Management and Exploitation</strong> (IUT Annecy). I am looking for technical challenges (SQL, Python, Web) to innovate.",
        anim_title: "🎮 What drives me",
        anim_desc: "Team spirit and strategy through video games (MOBA, FPS) and sports. This is where I draw my responsiveness and sense of collective effort.",
        hobby_title: "⌛ My Hobbies",
        hobby_desc: "Music often accompanies me while programming. Going out with friends allows me to clear my mind. My family is also very important to me.",

        // Page Projets
        proj_title: "My Achievements",
        filter_all: "All",
        filter_web: "Web (PHP/JS)",
        filter_data: "Data (SQL/BI)",
        filter_python: "Python",

        // Projet Laravel
        p_laravel_date: "Oct 2025 - Jan 2026",
        p_laravel_title: "Laravel Web App",
        p_laravel_place: "👥 University Project (Team of 4)",
        p_laravel_desc: "App with BPMN diagrams and cryptography.",
        p_laravel_details: "<strong>Details:</strong> Secure Auth, role management.",
        btn_repo: "View Repo",

        // Projet Portfolio
        p_port_desc: "JS Portfolio Site",
        btn_code: "View Code",

        // Projet Data
        p_data_title: "Data & BI Dashboard",
        p_data_place: "👥 SAE Team Project - IUT Annecy",
        p_data_desc: "Design of an interactive decision-making dashboard connected to a database.",
        p_data_details: "<strong>Analysis:</strong> Dynamic KPIs, date filtering, trend analysis.",
        btn_download: "Download Excel Report",

        // Projet Mairie
        p_mairie_title: "Town Hall Website",
        p_mairie_place: "👥 Team Project - Saint Exupéry High School",
        p_mairie_desc: "Complete design and development of the institutional website for the town hall.",
        p_mairie_details: "<strong>Features:</strong> Manageable news, contact form, responsive design.",
        btn_visit: "Visit Website",

        // Boutons génériques
        btn_see_more: "See more ↓",
        btn_see_less: "See less ↑",

        // Page CV
        cv_pdf: "📥 PDF",
        title_formation: "🎓 Education",
        cv_but_title: "BUT Computer Science",
        cv_but_place: "IUT Annecy (2nd year)",
        cv_but_desc: "Specialization in Data Administration, Management, and Exploitation.",
        cv_bac_title: "STI2D Baccalaureate",
        cv_bac_desc: "Information and Digital Systems option (SIN).",

        title_exp: "💼 Experience",
        cv_exp_laravel_title: "Team Project - Web App",
        cv_exp_laravel_place: "University of Savoy Mont Blanc",
        cv_exp_laravel_desc: "Developing a Laravel web app in a team of 4.",
        cv_exp_laravel_list: "<li>BPMN diagrams and cryptography.</li><li>Database design.</li><li>Power BI dashboards.</li>",
        
        cv_exp_leaz_title: "Technical Services Agent",
        cv_exp_leaz_date: "Summers 2023 & 2025",
        cv_exp_leaz_desc: "Maintenance, cleanliness, and logistics to ensure proper functioning of municipal facilities.",

        cv_exp_peron_title: "Web Project - Town Hall",
        cv_exp_peron_desc: "Design and development of the website for the Péron Town Hall.",

        title_skills: "🛠 Technical Skills",
        skill_intro_title: "Development & Data",
        skill_intro_desc: "Mastery of fundamental languages and tools:",

        title_soft: "🧠 Soft Skills",
        soft_title: "General Skills",
        soft_desc: "Personal assets developed through projects:",
        soft_list: "<li>Autonomy and initiative</li><li>Relational and intercultural ease</li><li>Curiosity and eagerness to learn</li><li>Motivation and seriousness</li>",

        title_ref: "👥 References",
        ref_chris_role: "Associate Professor - IUT Annecy",
        ref_steph_role: "English Professor & Int. Coordinator",

        // Page Contact
        form_name: "Name",
        form_email: "Email",
        form_email_help: "This will help me reply via email.",
        form_msg: "Message",
        form_msg_help: "What do you want to talk about?",
        btn_send: "Send"
    }
};

let langueActuelle = "fr";

function chargerPage(page) {
    const url = `pages/${page}.html?t=${new Date().getTime()}`;

    fetch(url)
        .then(r => r.text())
        .then(html => {
            document.getElementById("contenu").innerHTML = html;
            // Appliquer la langue immédiatement après le chargement
            majLangue();
            configurerEvenementsPage(page);
        })
        .catch(err => console.error("Erreur de chargement :", err));
}

function majLangue() {
    const t = traductions[langueActuelle];
    
    // 1. Traduire les éléments marqués avec data-lang
    const elementsAtraduire = document.querySelectorAll("[data-lang]");
    elementsAtraduire.forEach(el => {
        const key = el.getAttribute("data-lang");
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // 2. Mettre à jour le bouton de langue
    document.getElementById("toggleLang").textContent = langueActuelle === "fr" ? "EN" : "FR";

    // 3. Mettre à jour les textes des boutons "Voir plus" s'ils sont ouverts/fermés
    const btnsDetails = document.querySelectorAll('.bouton-voir-details');
    btnsDetails.forEach(btn => {
        // On vérifie l'état visuel pour remettre le bon texte
        const bulle = btn.closest('.bulle-info');
        if(bulle){
            const details = bulle.querySelector('.details-projet');
            if (details && details.style.display === 'block') {
                btn.innerHTML = t.btn_see_less;
            } else {
                btn.innerHTML = t.btn_see_more;
            }
        }
    });
}

function configurerEvenementsPage(page) {
    
    // Page Présentation
    if (page === 'about') {
        const btnProjets = document.getElementById('action_projets');
        const btnContact = document.getElementById('action_contact');

        if (btnProjets) {
            btnProjets.addEventListener('click', () => {
                document.getElementById('btn_projects').click();
            });
        }
        if (btnContact) {
            btnContact.addEventListener('click', () => {
                document.getElementById('btn_contact').click();
            });
        }
    }

    // Page Projets
    if (page === 'projects') {
        const boutonsFiltre = document.querySelectorAll('.bouton-filtre');
        const lignesProjet = document.querySelectorAll('.ligne-projet');
    
        boutonsFiltre.forEach(btn => {
            btn.addEventListener('click', () => {
                boutonsFiltre.forEach(b => b.classList.remove('actif'));
                btn.classList.add('actif');
                const filtreValeur = btn.getAttribute('data-filtre');
    
                lignesProjet.forEach(row => {
                    const technoProjet = row.getAttribute('data-techno');
                    if (filtreValeur === 'all' || technoProjet.includes(filtreValeur)) {
                        row.style.display = 'flex';
                        const bulle = row.querySelector('.bulle-info');
                        bulle.style.animation = 'none';
                        bulle.offsetHeight; 
                        bulle.style.animation = 'chute 0.5s forwards';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
    
        const boutonsDetails = document.querySelectorAll('.bouton-voir-details');
        const t = traductions[langueActuelle];
    
        boutonsDetails.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const bulle = e.target.closest('.bulle-info');
                const divDetails = bulle.querySelector('.details-projet');
                
                // On ré-récupère les traductions actuelles
                const currentT = traductions[langueActuelle];

                if (divDetails.style.display === 'block') {
                    divDetails.style.display = 'none';
                    btn.innerHTML = currentT.btn_see_more;
                } else {
                    divDetails.style.display = 'block';
                    btn.innerHTML = currentT.btn_see_less;
                }
            });
        });
    }
}

// Charger la page par défaut
chargerPage("about");

// Gestion du menu
const boutonsMenu = document.querySelectorAll(".bouton-nav");

boutonsMenu.forEach(btn => {
    btn.addEventListener("click", () => {
        boutonsMenu.forEach(b => b.classList.remove("actif"));
        btn.classList.add("actif");
        chargerPage(btn.dataset.page);
    });
});

// Gestion de la langue
document.getElementById("toggleLang").addEventListener("click", () => {
    langueActuelle = langueActuelle === "fr" ? "en" : "fr";
    majLangue();
});