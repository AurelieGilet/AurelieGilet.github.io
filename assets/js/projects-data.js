// PROJECTS DATA

/**
 * Class properties are:
 * id, title, goal, description (array), technology (array),
 * tags (array), website, github, images (array), altAttribute (array)
 */
let projectsArray = [];

class Project {
    constructor(properties) {
        Object.assign(this, properties);
        projectsArray.push(this);
    }
}

const devQuiz = new Project({
    id: 'devQuiz',
    title: 'Dev Quiz',
    goal: 'Projet de soutenance pour le titre professionnel Développeur intégrateur en réalisation d’applications web de la 3W Academy',
    description: [
        'Ce site propose des quiz sur différents langages de programmation. Chaque utilisateur possède un espace personnel avec le récap des scores réalisés dans les différents quiz.',
        'Il a été développé sans aucun framework, en <em>PHP POO</em>, avec du <em>HTML</em> pour les templates, <em>SASS</em> pour le style et <em>JAVASCRIPT</em> pour les animations et requêtes Ajax',
    ],
    technology: ['PHP', 'HTML5', 'SASS', 'JAVASCRIPT'],
    tags: ['full-stack', 'php', 'javascript'],
    website: 'https://dev-quiz.infinityfreeapp.com/',
    github: 'https://github.com/AurelieGilet/3wa_php_poo_quiz',
    images: [
        '/assets/img/projects/dev-quiz/devquiz-website.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website2.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website3.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website4.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website5.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website6.jpg',
        '/assets/img/projects/dev-quiz/devquiz-website7.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile2.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile3.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile4.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile5.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile6.jpg',
        '/assets/img/projects/dev-quiz/devquiz-mobile7.jpg',
    ],
    altAttribute: [
        "Image montrant l'accueil de la version desktop du site Dev Quiz",
        'Image montrant le choix de type de joueur de la version desktop du site Dev Quiz',
        "Image montrant l'écran d'accueil d'un joueur connecté de la version desktop du site Dev Quiz",
        'Image montrant le choix des catégories de quiz de la version desktop du site Dev Quiz',
        "Image montrant un exemple de question d'un quiz de la version desktop du site Dev Quiz",
        "Image montrant un exemple de résultat d'un quiz de la version desktop du site Dev Quiz",
        'Image montrant le récapitulatif des scores dans une catégorie de quiz de la version desktop du site Dev Quiz',
        "Image montrant l'accueil de la version mobile du site Dev Quiz",
        'Image montrant le choix de type de joueur de la version mobile du site Dev Quiz',
        "Image montrant l'écran d'accueil d'un joueur connecté de la version mobile du site Dev Quiz",
        'Image montrant le choix des catégories de quiz de la version mobile du site Dev Quiz',
        "Image montrant un exemple de question d'un quiz de la version mobile du site Dev Quiz",
        "Image montrant un exemple de résultat d'un quiz de la version mobile du site Dev Quiz",
        'Image montrant le récapitulatif des scores dans une catégorie de quiz de la version mobile du site Dev Quiz',
    ],
});

const portfolio = new Project({
    id: 'portfolio',
    title: 'Portfolio',
    goal: "Portfolio personnel ayant pour but de parler un peu de moi et des projets que j'ai développés.",
    description: [
        "Il a été développé avec du pur <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>, sans aucun framework, l'objectif étant de démontrer mes connaissances et capacités avec ces langages qui sont la base du développement web.",
        "Ne souhaitant pas avoir recours à un serveur pour l'hébergement d'un site avec une base de données, mais pouvoir tout de même avoir un site dynamique, j'ai \"stocké\" les données des projets dans un fichier JS.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: false,
    github: 'https://github.com/AurelieGilet/AurelieGilet.github.io',
    images: [
        '/assets/img/projects/portfolio/portfolio-website.jpg',
        '/assets/img/projects/portfolio/portfolio-website2.jpg',
        '/assets/img/projects/portfolio/portfolio-website3.jpg',
        '/assets/img/projects/portfolio/portfolio-website4.jpg',
        '/assets/img/projects/portfolio/portfolio-mobile.jpg',
        '/assets/img/projects/portfolio/portfolio-mobile2.jpg',
        '/assets/img/projects/portfolio/portfolio-mobile3.jpg',
        '/assets/img/projects/portfolio/portfolio-mobile4.jpg',
    ],
    altAttribute: [
        'Image montrant la section "à propos" de la version desktop du portfolio',
        'Image montrant la section "portfolio" de la version desktop du portfolio',
        "Image montrant le détail d'un des projets de la version desktop du portfolio",
        "Image montrant le détail d'un des projets de la version desktop du portfolio",
        'Image montrant la page du CV de la version desktop du portfolio',
        'Image montrant la section "à propos" de la version mobile du portfolio',
        'Image montrant la section "portfolio" de la version mobile du portfolio',
        "Image montrant le détail d'un des projets de la version mobile du portfolio",
        "Image montrant le détail d'un des projets de la version mobile du portfolio",
        'Image montrant la page du CV de la version mobile du portfolio',
    ],
});

const charnetDeSante = new Project({
    id: 'charnetDeSante',
    title: 'Le Charnet de Santé',
    goal: "Projet personnel réalisé dans le cadre de la soutenance du titre professionnel Développeur Web et Web Mobile. Il s'agit d'un carnet de santé en ligne pour chat, gratuit et sécurisé, qui permet de consigner et centraliser toutes les informations sur la santé et l'entretien quotidien de son chat et de les partager facilement avec son vétérinaire.",
    description: [
        "Ayant travaillé seule sur ce projet, j'ai effectué toutes les étapes de sa conception : élaboration du design et maquettage de l'application, réalisation des interfaces statiques et adaptables y compris sur mobile, développement des interfaces dynamiques, modélisation et création de la base de données, développement des composants d'accès aux données, développement de la partie back-end.",
        'Ce projet a été développé avec le framework <em>SYMFONY</em> (v.5.3) et utilise <em>HTML5</em>, <em>TWIG</em>, <em>CSS3</em>, <em>JAVASCRIPT</em>, <em>PHP</em> et <em>MYSQL</em>.',
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT', 'SYMFONY', 'PHP', 'MYSQL'],
    tags: ['full-stack', 'php', 'javascript'],
    website: 'https://lecharnetdesante.fr/',
    github: 'https://github.com/AurelieGilet/charnet-de-sante',
    images: [
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website2.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website3.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website4.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website5.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website6.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website7.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-website8.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-mobile.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-mobile2.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-mobile3.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-mobile4.jpg',
        '/assets/img/projects/charnet-de-sante/charnet-de-sante-mobile5.jpg',
    ],
    altAttribute: [
        "Image montrant la page d'accueil de la version desktop du site Le Charnet de Santé",
        "Image montrant le mode d'emploi de la version desktop du site Le Charnet de Santé",
        "Image montrant la page d'accueil et le menu de l'espace utilisateur de la version desktop du site Le Charnet de Santé",
        "Image montrant la liste des chats de l'utilisateur de la version desktop du site Le Charnet de Santé",
        "Image montrant le détail des informations d'un chat de la version desktop du site Le Charnet de Santé",
        "Image montrant l'affichage des catégories de données enregistrables dans la section santé de la version desktop du site Le Charnet de Santé",
        "Image montrant l'affichage des documents enregistrés dans la section santé de la version desktop du site Le Charnet de Santé",
        "Image montrant l'affichage des mesures de poids et leur représentation graphique, enregistrées dans la section mesures de la version desktop du site Le Charnet de Santé",
        "Image montrant la page d'accueil de la version mobile du site Le Charnet de Santé",
        "Image montrant la page d'accueil et le menu de l'espace utilisateur de la version mobile du site Le Charnet de Santé",
        "Image montrant le détail des informations d'un chat de la version mobile du site Le Charnet de Santé",
        "Image montrant le détail des informations d'un chat de la version mobile du site Le Charnet de Santé",
        "Image montrant l'affichage des catégories de données enregistrables dans la section santé de la version mobile du site Le Charnet de Santé",
        "Image montrant l'affichage des documents enregistrés dans la section santé de la version mobile du site Le Charnet de Santé",
    ],
});

const blogHdm = new Project({
    id: 'blogHdm',
    title: 'Blog HDM',
    goal: 'Projet réalisé durant mon stage en entreprise chez HDM Network. Il s\'agit d\'un blog faisant partie du site "Homme de Métier", permettant de rédiger des articles de conseils sur les travaux réalisables chez soi.',
    description: [
        "J'ai travaillé sur ce projet en équipe agile. Mes tâches ont été de développer la partie back-office (front et back-end) permettant la rédaction des articles et l'ajout des photos l'illustrant, de créer un accès sécurisé avec un compte administrateur au back-office et de réécrire toutes les fonctions JAVASCRIPT du site selon le modèle IIFE.",
        'Ce projet a été développé sur un serveur <em>DOCKER</em>, avec le framework <em>SYMFONY</em> (v.5.2) et utilise <em>HTML5</em>, <em>TWIG</em>, <em>CSS3</em>, <em>BOOTSTRAP</em> (pour le back-office uniquement), <em>JAVASCRIPT</em>, et <em>PHP</em>.',
    ],
    technology: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'SYMFONY', 'PHP', 'DOCKER'],
    tags: ['full-stack', 'javascript', 'php'],
    website: 'https://www.hommedemetier.be/blog/',
    github: false,
    images: [
        '/assets/img/projects/blog-hdm/blog-hdm-website.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-website2.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-website3.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-website4.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-mobile.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-mobile2.jpg',
        '/assets/img/projects/blog-hdm/blog-hdm-mobile3.jpg',
    ],
    altAttribute: [
        "Image montrant la bannière, la navigation et une partie de l'affichage des articles de la version desktop du blog du site Homme de Métier",
        'Image montrant le champs de recherche et de filtrage par catégories des articles de la version desktop du blog du site Homme de Métier',
        "Image montrant l'affichage de la liste des articles dans le back-office de la version desktop du blog du site Homme de Métier",
        "Image montrant la fonctionnalité d'ajout et prévisualisation d'images lors de la rédaction des articles de la version desktop du blog du site Homme de Métier",
        "Image montrant la bannière, la navigation et une partie de l'affichage des articles de la version mobile du blog du site Homme de Métier",
        "Image montrant l'affichage de la liste des articles dans le back-office de la version mobile du blog du site Homme de Métier",
        "Image montrant la fonctionnalité d'ajout et prévisualisation d'images lors de la rédaction des articles de la version mobile du blog du site Homme de Métier",
    ],
});

const misterNickel = new Project({
    id: 'misterNickel',
    title: 'Mister Nickel',
    goal: "Projet réalisé durant mon stage en entreprise chez HDM Network. Je devais réaliser l'intégration d'une maquette de site pour un client de HDM.",
    description: [
        'Selon la requête de HDM, ce site a été développé avec <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>.',
        'Le souhait de HDM était que ce site soit réalisé sans utiliser aucun framework.',
        "Il s'agit d'un site vitrine qui permet de présenter une entreprise de nettoyage, les services qu'elle propose ainsi que ses coordonnées et un formulaire de contact.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: 'https://www.aurelie-gilet.fr/HDM_projects/integration_mister-nickel',
    github: 'https://github.com/AurelieGilet/HDM_projects',
    images: [
        '/assets/img/projects/mister-nickel/mister-nickel-website.jpg',
        '/assets/img/projects/mister-nickel/mister-nickel-website2.jpg',
        '/assets/img/projects/mister-nickel/mister-nickel-website3.jpg',
        '/assets/img/projects/mister-nickel/mister-nickel-mobile.jpg',
        '/assets/img/projects/mister-nickel/mister-nickel-mobile2.jpg',
    ],
    altAttribute: [
        'Image montrant la bannière et la navigation de la version desktop du site Mister Nickel',
        'Image montrant la liste des services de la version desktop du site Mister Nickel',
        'Image montrant le formulaire de contact de la version desktop du site Mister Nickel',
        'Image montrant la bannière, la navigation et la liste des services de la version mobile du site Mister Nickel',
        'Image montrant le formulaire de contact de la version mobile du site Mister Nickel',
    ],
});

const chapeau = new Project({
    id: 'chapeau',
    title: 'Chapeau',
    goal: "Projet réalisé durant mon stage en entreprise chez HDM Network. Je devais réaliser l'intégration d'une maquette de site pour le bar d'un partenaire de HDM.",
    description: [
        'Selon la requête de HDM, ce site a été développé avec <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>.',
        'Le souhait de HDM était que ce site soit réalisé sans utiliser aucun framework.',
        "Il s'agit d'un site vitrine qui permet de présenter le bar, sa carte et ses coordonnées.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: 'https://www.aurelie-gilet.fr/HDM_projects/integration_chapeau',
    github: 'https://github.com/AurelieGilet/HDM_projects',
    images: [
        '/assets/img/projects/chapeau/chapeau-website.jpg',
        '/assets/img/projects/chapeau/chapeau-website2.jpg',
        '/assets/img/projects/chapeau/chapeau-mobile.jpg',
    ],
    altAttribute: [
        'Image montrant la bannière et la navigation de la version desktop du site Chapeau',
        'Image montrant la carte des boissons du bar de la version desktop du site Chapeau',
        'Image montrant la bannière, la navigation et la carte des boissons du bar de la version mobile du site Chapeau',
    ],
});

const pizzaMarco = new Project({
    id: 'pizzaMarco',
    title: 'Pizza Marco',
    goal: "Projet réalisé durant mon stage en entreprise chez HDM Network. Je devais réaliser l'intégration d'une maquette de site pour le restaurant d'un partenaire de HDM.",
    description: [
        'Selon la requête de HDM, ce site a été développé avec <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>.',
        'Le souhait de HDM était que ce site soit réalisé sans utiliser aucun framework.',
        "Il s'agit d'un site vitrine qui permet de présenter le restaurant, sa carte et ses coordonnées.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: 'https://www.aurelie-gilet.fr/HDM_projects/integration_pizza-marco',
    github: 'https://github.com/AurelieGilet/HDM_projects',
    images: [
        '/assets/img/projects/pizza-marco/pizza-marco-website.jpg',
        '/assets/img/projects/pizza-marco/pizza-marco-website2.jpg',
        '/assets/img/projects/pizza-marco/pizza-marco-mobile.jpg',
    ],
    altAttribute: [
        'Image montrant la bannière et la navigation de la version desktop du site Pizza Marco',
        "Image montrant les informations de contact et la carte de l'emplacement du restaurant de la version desktop du site Pizza Marco",
        'Image montrant la bannière et la navigation de la version mobile du site Pizza Marco',
    ],
});

const nostimia = new Project({
    id: 'nostimia',
    title: 'Nostimia',
    goal: "Projet réalisé durant mon stage en entreprise chez HDM Network. Je devais réaliser l'intégration d'une maquette de site pour le restaurant d'un partenaire de HDM.",
    description: [
        'Selon la requête de HDM, ce site a été développé avec <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>.',
        'Le souhait de HDM était que ce site soit réalisé sans utiliser aucun framework.',
        "Il s'agit d'un site vitrine qui permet de présenter le restaurant, sa carte et ses coordonnées.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: 'https://www.aurelie-gilet.fr/HDM_projects/integration_nostimia',
    github: 'https://github.com/AurelieGilet/HDM_projects',
    images: [
        '/assets/img/projects/nostimia/nostimia-website.jpg',
        '/assets/img/projects/nostimia/nostimia-website2.jpg',
        '/assets/img/projects/nostimia/nostimia-mobile.jpg',
    ],
    altAttribute: [
        'Image montrant la bannière et la navigation de la version desktop du site Nostimia',
        'Image montrant la carte du restaurant de la version desktop du site Nostimia',
        'Image montrant la bannière et la navigation de la version mobile du site Nostimia',
    ],
});

const pippoEtFils = new Project({
    id: 'pippoEtFils',
    title: 'Pippo & Fils',
    goal: "Projet réalisé durant mon stage en entreprise chez HDM Network. Je devais réaliser l'intégration d'une maquette de site pour le restaurant d'un partenaire de HDM.",
    description: [
        'Selon la requête de HDM, ce site a été développé avec <em>HTML5</em>, <em>CSS3</em> et <em>JAVASCRIPT</em>.',
        'Le souhait de HDM était que ce site soit réalisé sans utiliser aucun framework.',
        "Il s'agit d'un site vitrine qui permet de présenter le restaurant, sa carte et ses coordonnées.",
    ],
    technology: ['HTML5', 'CSS3', 'JAVASCRIPT'],
    tags: ['front-end', 'javascript'],
    website: 'https://www.aurelie-gilet.fr/HDM_projects/integration_Pippo%26Fils',
    github: 'https://github.com/AurelieGilet/HDM_projects',
    images: [
        '/assets/img/projects/pippo-et-fils/pippo-et-fils-website.jpg',
        '/assets/img/projects/pippo-et-fils/pippo-et-fils-website2.jpg',
        '/assets/img/projects/pippo-et-fils/pippo-et-fils-mobile.jpg',
    ],
    altAttribute: [
        'Image montrant la bannière et la navigation de la version desktop du site Pippo & Fils',
        'Image montrant la carte du restaurant de la version desktop du site Pippo & Fils',
        'Image montrant la bannière, la navigation et la carte du restaurant de la version mobile du site Pippo & Fils',
    ],
});

const JeuxPartage = new Project({
    id: 'JeuxPartage',
    title: 'Jeux Partage !',
    goal: "Projet de groupe réalisé pour la soutenance finale de la formation WebForce3. Il s'agit d'un site de mise en relation de personnes souhaitant partager leurs jeux de société.",
    description: [
        'Ce site a été réalisé sur <em>SYMFONY</em> (v.5.2) avec <em>HTML5</em>, <em>TWIG</em>, <em>CSS3</em>, <em>BOOTSTRAP</em>, <em>JAVASCRIPT</em>, <em>PHP</em> et <em>MYSQL</em>',
        "Il a été conçu et développé avec Céline Trivier et Véronique Khammisouk en l'espace de 10 jours.",
        "Le concept est le suivant : après inscription, l'utilisateur peut enregistrer les jeux qu'il possède et souhaite partager ainsi qu'emprunter les jeux des autres. Une messagerie permet de mettre les deux utilisateurs en relation afin qu'ils puissent procéder à l'échange.",
        "En tant que cheffe de projet, je me suis occupée de gérer l'organisation du développement et la progression de mes collègues qui se sont principalement occupées de développer la partie front-end du site.",
        "J'ai également conçu la BDD, développé la logique back-end du site et développé la fonctionnalité de messagerie instantanée en <em>Ajax</em>.",
    ],
    technology: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'SYMFONY', 'PHP', 'MYSQL'],
    tags: ['back-end', 'javascript', 'php'],
    website: 'https://jeux-partage.epizy.com',
    github: 'https://github.com/AurelieGilet/wf3_group_project',
    images: [
        '/assets/img/projects/jeux-partage/jeux-partage-website.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website2.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website3.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website4.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website5.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website6.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-website7.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-mobile.jpg',
        '/assets/img/projects/jeux-partage/jeux-partage-mobile2.jpg',
    ],
    altAttribute: [
        "Image montrant la page d'accueil de la version desktop du site Jeux Partage !",
        'Image montrant le catalogue et la liste des catégories de jeux de la version desktop du site Jeux Partage !',
        "Image montrant le détail d'un des jeux de la version desktop du site Jeux Partage !",
        "Image montrant la liste des jeux possédés par l'utilisateur de la version desktop du site Jeux Partage !",
        "Image montrant le formulaire d'ajout de jeux de la version desktop du site Jeux Partage !",
        "Image montrant la liste des jeux prêtés par l'utilisateur de la version desktop du site Jeux Partage !",
        "Image montrant la conversation pour l'échange d'un jeu de la version desktop du site Jeux Partage !",
        "Image montrant la liste des jeux empruntés par l'utilisateur de la version mobile du site Jeux Partage !",
        "Image montrant la conversation pour l'échange d'un jeu de la version mobile du site Jeux Partage !",
    ],
});

const agenceImmobiliere = new Project({
    id: 'agenceImmobiliere',
    title: 'Agence Immobilière',
    goal: "Projet réalisé dans le cadre de la formation WebForce3. L'objectif était le développement front et back-end d'un site de location et de vente de biens immobiliers.",
    description: [
        'Ce site a été réalisé avec <em>HTML5</em>, <em>BOOTSTRAP</em>, <em>PHP</em> et <em>MYSQL</em>',
        "La réalisation de ce site était surtout axée sur le back-end et la manipulation de données. Raison pour laquelle le front-end a entièrement été réalisé avec bootstrap, afin d'accélérer son développement.",
        "Sur ce site j'ai donc créé une BDD et sa table \"logement\", ainsi qu'un formulaire permettant d'ajouter des logements à la BDD, en faisant les contrôles de saisie de données nécessaires.",
        'Les informations de ces logements sont modifiables/supprimables dans la partie "back-office" du site.',
        'Les logements sont affichés avec leurs détails pour une consultation des visiteurs dans le front-office.',
    ],
    technology: ['HTML5', 'BOOTSTRAP', 'PHP', 'MYSQL'],
    tags: ['full-stack', 'back-end', 'php'],
    website: 'https://aurelie-gilet.epizy.com/site_immobilier/index.php',
    github: 'https://github.com/AurelieGilet/AurelieGilet.github.io/tree/master/site_immobilier',
    images: [
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-website.jpg',
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-website2.jpg',
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-website3.jpg',
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-website4.jpg',
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-mobile.jpg',
        '/assets/img/projects/agence-immobiliere/agence-immobiliere-mobile2.jpg',
    ],
    altAttribute: [
        "Image montrant la navigation, le classement par catégorie et l'affichage des logements de la version desktop du site Agence Immobilière.",
        "Image montrant le détail d'un des logements de la version desktop du site Agence Immobilière.",
        "Image montrant le formulaire d'ajout de logement du back-office de la version desktop du site Bienvenue à bord.",
        "Image montrant l'affichage listé des logements dans le back-office de la version desktop du site Bienvenue à bord.",
        "Image montrant la navigation, le un classement par catégorie et l'affichage des logements de la version mobile du site Agence Immobilière.",
        "Image montrant montrant le détail d'un des logements de la version mobile du site Agence Immobilière.",
    ],
});


// PROJECTS WINDOW DISPLAY
const projectContainer = document.getElementById('projects-container');

function generateTechnologyList(project) {
    let list = '';

    for (let i = 0; i < project.technology.length; i++) {
        list += '<li>' + project.technology[i] + '</li>';
    }

    return list;
}

function generateWindow(project) {
    projectContainer.insertAdjacentHTML(
        'beforeend',
        '<div class="project flex-centered-column">' +
            '<div class="header flex-centered">' +
                '<h3 class="project-title">' + project.title + '</h3>' +
                    '<div class="window-controls flex-centered">' +
                        '<i class="fa-solid fa-window-minimize"></i>' +
                        '<i class="fa-solid fa-window-maximize"></i>' +
                        '<i class="fa-solid fa-rectangle-xmark"></i>' +
                    '</div>' +
                '</div>' +
            '<div class="body" style="background-image: url(' + project.images[0] + ')">' +
                '<div class="overlay">' +
                    '<ul class="technology-list flex-centered">' + 
                        generateTechnologyList(project) +
                    '</ul>' +
                    '<button class="button more-btn" data-project="' + project.id + '">Voir plus ...</button>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
}

projectsArray.forEach((project) => {
    generateWindow(project);
});

// PROJECTS FILTER
const filterBtn = document.getElementsByClassName('filter-btn');

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {
        // CHANGE BUTTON APPEARANCE
        let filtered = document.getElementsByClassName('filtered');

        if (filtered.length > 0) {
            filtered[0].className = filtered[0].className.replace(' filtered', '');
        }

        this.className += ' filtered';

        // FILTER PROJECTS
        let tagFilter = this.dataset.tag;

        let filteredProjects = projectsArray.filter(({ tags }) => tags.includes(tagFilter));

        // DISPLAY FILTERED PROJECTS
        if (tagFilter === 'all') {
            while (projectContainer.firstChild) {
                projectContainer.firstChild.remove();
            }

            projectsArray.forEach((project) => {
                generateWindow(project);
            });

            addProjectsEvents();
            addModalEvents();
        } else {
            while (projectContainer.firstChild) {
                projectContainer.firstChild.remove();
            }

            filteredProjects.forEach((project) => {
                generateWindow(project);
            });

            addProjectsEvents();
            addModalEvents();
        }
    });
}

// PROJECT DETAILS MODAL DISPLAY
const modalOverlay = document.getElementById('project-wrapper');

function generateCarrouselImages(project) {
    let pictures = '';

    for (let i = 0; i < project.images.length; i++) {
        pictures +=
            '<img class="slide fade" src="' +
            project.images[i] +
            '" alt="' +
            project.altAttribute[i] +
            '">';
    }

    return pictures;
}

function generateCarrouselDotIndicators(project) {
    let dots = '';

    for (let i = 0; i < project.images.length; i++) {
        if (i == 0) {
            dots += '<div class="dot active"><i class="fa-solid fa-circle"></i></div>';
        } else {
            dots += '<div class="dot"><i class="fa-solid fa-circle"></i></div>';
        }
    }

    return dots;
}

function generateProjectDescription(project) {
    let content = '';

    for (let i = 0; i < project.description.length; i++) {
        content += '<p>' + project.description[i] + '</p>';
    }

    return content;
}

// All projects don't necessarily have a website address associated
function generateWebsiteBtn(project) {
    let websiteBtn = '';

    if (project.website != false) {
        websiteBtn =
            '<a href="' + project.website + '">' +
                '<button class="button flex-centered"> Voir le site' +
                    '<i class="fa-solid fa-share-from-square"></i>' +
                '</button>' +
            '</a>';
    }

    return websiteBtn;
}

// All projects don't necessarily have a github repository associated
function generateGithubBtn(project) {
    let githubBtn = '';

    if (project.github != false) {
        githubBtn =
            '<a href="' + project.github + '">' +
                '<button class="button flex-centered"> Repo Github' +
                    '<i class="fa-solid fa-share-from-square"></i>' +
                '</button>' +
            '</a>';
    }

    return githubBtn;
}

function generateModal(project) {
    // The project variable is passed in index.js at 180
    // But it is a string so we need to get the corresponding object
    project = projectsArray.find(({ id }) => id === project);

    modalOverlay.insertAdjacentHTML(
        'beforeend',
        '<div id="project-details">' +
            '<div class="carousel-wrapper flex-centered-column">' +
                '<div id="carousel-items">' + generateCarrouselImages(project) + '</div>' +
                    '<div class="carousel-controls flex-centered">' +
                        '<div id="arrow-left">' +
                            '<i class="fa-solid fa-angle-left"></i>' +
                        '</div>' +
                        '<div id="arrow-right">' +
                            '<i class="fa-solid fa-angle-right"></i>' +
                        '</div>' +
                    '</div>' +
                '<div class="carousel-indicators flex-centered">' +
                    generateCarrouselDotIndicators(project) +
                '</div>' +
            '</div>' +
            '<article class="flex-centered-column">' +
                '<h3 id="project-title">' + project.title + '</h3>' +
                '<p id="project-goal">' + project.goal + '</p>' +
                '<div id="project-description">' +
                    generateProjectDescription(project) +
                '</div>' +
                '<div class="access flex-centered">' +
                    generateWebsiteBtn(project) +
                    generateGithubBtn(project) +
                '</div>' +
                '<div id="close">' +
                    '<i class="fa-solid fa-xmark"></i>' +
                '</div>' +
            '</article>' +
        '</div>'
    );
}
