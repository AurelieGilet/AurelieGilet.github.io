const projectsBody = document.getElementsByClassName("body");

for (let i = 0; i < projectsBody.length; i++) {
  projectsBody[i].style.backgroundImage = "url('assets/img/chapeau.jpg')";
}

const carouselImg = [
  "/assets/img/nostimia.jpg",
  "/assets/img/pippo&fils.jpg",
  "/assets/img/pizza_marco.jpg",
];

const carouselItems = document.getElementById("carousel-items");

for (let i = 0; i < carouselImg.length; i++) {
  carouselItems.innerHTML += '<img class="slide fade" src="' + carouselImg[i] + '" alt="">';
}


const projectTitle = document.getElementById("project-title");
const projectGoal = document.getElementById("project-goal");
const projectDescription = document.getElementById("project-description");

const title = "Jeux Partage !";
const goal = "Site de mise en relation de personnes qui souhaitent partager leurs jeux de société."
const description = [
  "Projet de groupe réalisé pour la soutenance de la formation de développeut Web de WebForce3.",
  "Il a été développé avec <em>Symfony 5.2.4</em> et fait appel à <em>HTML5</em>, <em>CSS3</em>, <em>JAVASCRIPT</em>, <em>PHP</em> et <em>MYSQL</em>",
  "J'ai tenu le rôle de chef de projet et me suis principalement occupée de développer la partie back-end du site : conception de la BDD, toute la logique du Front Office, ainsi que le développement de la fonctionnalité de messagerie instantanée (en Ajax)."
];

projectTitle.innerHTML = title;
projectGoal.innerHTML = goal;

for (let i = 0; i < description.length; i++) {
  projectDescription.innerHTML += '<p>' + description[i] + '</p>'
}
