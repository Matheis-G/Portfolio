const presentationCard = document.getElementById("presentationCard");

if (presentationCard) {
    setTimeout(() => {
        presentationCard.classList.add("active");
    }, 3000);
}

const translations = {
    fr: {
        about: "Présentation",
        projects: "Projets",
        cv: "CV",
        contact: "Contact",
        header: "Matheïs Gilbrin"
    },
    en: {
        about: "About",
        projects: "Projects",
        cv: "CV",
        contact: "Contact",
        header: "Matheïs Gilbrin"
    }
};

let currentLang = "fr";


function loadPage(page) {
    fetch(`pages/${page}.html`)
        .then(r => r.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
            

            setupPageEvents(page);
        });
}

function setupPageEvents(page) {
    
    if (page === 'about') {
        const btnProjects = document.getElementById('action_projects');
        const btnContact = document.getElementById('action_contact');

        if (btnProjects) {
            btnProjects.addEventListener('click', () => {
                document.getElementById('btn_projects').click();
            });
        }
        if (btnContact) {
            btnContact.addEventListener('click', () => {
                document.getElementById('btn_contact').click();
            });
        }
    }

    if (page === 'projects') {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectRows = document.querySelectorAll('.project-row');
    
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');
    
                projectRows.forEach(row => {
                    const projectTechs = row.getAttribute('data-tech');
                    if (filterValue === 'all' || projectTechs.includes(filterValue)) {
                        row.style.display = 'flex';
                        const bubble = row.querySelector('.cv-bubble');
                        bubble.style.animation = 'none';
                        bubble.offsetHeight; 
                        bubble.style.animation = 'dropIn 0.5s forwards';
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
    
        const toggleBtns = document.querySelectorAll('.toggle-details-btn');
    
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const bubble = e.target.closest('.cv-bubble');
                const detailsDiv = bubble.querySelector('.project-details');
    
                if (detailsDiv.style.display === 'block') {
                    // Si c'est ouvert, on ferme
                    detailsDiv.style.display = 'none';
                    btn.textContent = 'Voir plus ↓';
                } else {
                    // Si c'est fermé, on ouvre
                    detailsDiv.style.display = 'block';
                    btn.textContent = 'Voir moins ↑';
                }
            });
        });
    }
}

loadPage("about");

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        loadPage(btn.dataset.page);
    });
});

document.getElementById("toggleLang").addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    updateLanguage();
    document.getElementById("toggleLang").textContent = currentLang === "fr" ? "EN" : "FR";
});

function updateLanguage() {
    const t = translations[currentLang];

    document.getElementById("header_title").textContent = t.header;
    document.getElementById("btn_about").textContent = t.about;
    document.getElementById("btn_projects").textContent = t.projects;
    document.getElementById("btn_cv").textContent = t.cv;
    document.getElementById("btn_contact").textContent = t.contact;
}