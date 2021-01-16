$(document).ready(function() {

    // Fonction affichage photo dans le viewer
    $('#blocPhoto img').on('click', function () {

        console.log($(this).attr('src'));

        var monImage = $(this).attr('src');
        var monTitle = $(this).attr('title');

        $('.top_photo img').attr('src', monImage);

        $('.top_photo img').attr('title', monTitle);

    });

    /*************************** CAROUSEL ********************************/

        // VAR CAROUSEL ////////////////////////////////////

    var slide = $('.slide'), //on cible les slides contenus dans le blocPhoto
        i = 0, // on initialise un compteur
        currentSlide = slide.eq(i), // on cible le slide actuel, qui possède l'index i
        indexSlide = slide.length - 1;

        slide.css('display', 'none'); // on cache tous les slides par défaut
        currentSlide.css('display', 'block'); // on affiche seulement le slide actuel

        // VAR INDICATORS ////////////////////////////////////

    var indicator = $('.indicator'), 
        currentIndicator = indicator.eq(i), // on cible le slide actuel, qui possède l'index i
        indexIndicator = indicator.length - 1;

        indicator.css('opacity', '0.5'); // opacité des indicateurs à 0.5 par défaut
        currentIndicator.css('opacity', '1'); // opacité à 1 seulement pour l'indicateur actuel

    // Bouton NEXT /////////////////////////////////////////////////

    $('#next').on('click', function() {

        i++; // on incrémente le compteur

        if( i <= indexSlide ) 
        {
            slide.css('display', 'none'); // on cache les slides
            currentSlide = slide.eq(i); // on définit le nouveau slide
            currentSlide.css('display', 'block'); // puis on l'affiche

            indicator.css('opacity', '0.5'); // Même chose pour les indicateurs
            currentIndicator = indicator.eq(i);
            currentIndicator.css('opacity', '1');
        }
        else
        {
            i = 0;
            slide.css('display', 'none'); 
            currentSlide = slide.eq(i); 
            currentSlide.css('display', 'block'); 

            indicator.css('opacity', '0.5');
            currentIndicator = indicator.eq(i);
            currentIndicator.css('opacity', '1');
        }
    });

    // Bouton  PREV /////////////////////////////////////////////

    $('#prev').on('click', function() {

        i--; // on décrémente le compteur 

        if( i >= 0 ){
            slide.css('display', 'none');
            currentSlide = slide.eq(i);
            currentSlide.css('display', 'block');

            indicator.css('opacity', '0.5');
            currentIndicator = indicator.eq(i);
            currentIndicator.css('opacity', '1');
        }
        else{
            i = 2;
            slide.css('display', 'none');
            currentSlide = slide.eq(i);
            currentSlide.css('display', 'block');

            indicator.css('opacity', '0.5');
            currentIndicator = indicator.eq(i);
            currentIndicator.css('opacity', '1');
        }

    });

    // DEFILEMENT CAROUSEL ////////////////////////////////////////////
    function slideCarousel(){

        sliding = setTimeout(function() { // on utilise une fonction anonyme
                            
            if(i < indexSlide && i < indexIndicator){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
            }
            else
            { // sinon, on le remet à 0 (premier slide ou indicateur)
                i = 0;
            }
    
            slide.css('display', 'none');
            currentslide = slide.eq(i);
            currentslide.css('display', 'block');

            indicator.css('opacity', '0.5');
            currentIndicator = indicator.eq(i);
            currentIndicator.css('opacity', '1');
        
            slideCarousel(); // on oublie pas de relancer la fonction à la fin
    
        }, 3000); // on définit l'intervalle à 3s)
    }
      
    slideCarousel();

    // PAUSE DEFILEMENT on HOVER ///////////////////////////////////

    $('#carousel').on('mouseenter', function() {
        clearTimeout(sliding);
    });

    $('#carousel').on('mouseleave', function() {
        slideCarousel();
    });

    /************************** ANIMATIONS ********************************/ 

    // PLANETES /////////////////////////////////////////////////////////////////

    var animationPlanetes = { // création objet qui stocke false si la planète n'est pas animée comme valeur des propriétés
        sun : false,
        earth : false, 
        moon : false,
        mars : false,
        saturn : false
    }

    $('.planets').on('mouseover', function() {

        var id = $(this)[0].id; // on récupère la valeur de l'attribut "id" de l'objet

        if(animationPlanetes[id] == false) // si la planete n'est pas déjà animée
        {
            animationPlanetes[id] = true; // on change la valeur de la propriété correspondante en true pour empecher que l'animation puisse se lancer à nouveau avant d'être finie
            // on lance l'animation
            $($(this)[0]).animate({opacity: 1}, 2000).animate({opacity: 0}, 2000, function(){
                // quand l'animation est finie, on change à nouveau la valeur de la propriété
                animationPlanetes[id] = false;
            });
        }
    });

    // STARS /////////////////////////////////////////////////////////////////

    // GENERATION DES VARIABLES ET VALEURS ALEATOIRES //

    // Récupération des valeurs width et height de la fenetre à l'affichage

    var width = $(window).width(),
        height = $(window).height();

    // Génération de valeurs aléatoires pour width et height comprises entre [20 et window.width / widow.height -20 [

        // Random Width

    function rdmWidth() {
        var min = 20,
            max = width - 20;
        return Math.floor(Math.random() * (max - min)) + min;
    }

        // Random Height

    function rdmHeight() {
        var min = 20,
            max = height - 20;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // Génération de valeurs aléatoire pour la taille des Stars, comprises entre [1 et 3]

    function rdmStars() {
        var min = 1,
            max = 3;
        return Math.floor(Math.random() * (max - min + 1 )) + min;
    }


    // GENERATION DES STARS ////////////////////////////////////////

    // Fixed Stars ///////////////////////

    // Fonction de génération des stars
    function fixedStars() {

        var starSize = rdmStars(); // taille aléatoire chargée dans une variable pour pouvoir l'assigner à width ET height dans le style (étoile carrée)
        
        // création des div (étoiles) dans le conteneur ".fixedStars" avec style intégré
        $('#fixedStars').append('<div style="width:' + starSize + 'px ; height:' + starSize + 'px; position:absolute; top:' + rdmHeight() + 'px; left:' + rdmWidth() + 'px; background: white; border : 1px solid white; border-radius: 50%; box-shadow: 0 0 5px 1px white;"></div>');
    }

    var i = 0;

    // Création d'une boucle pour générer 100 étoiles
    for(i = 0; i <= 100; i++ )
    {
        fixedStars();
    }
    
    // Moving Stars //////////////////////////

    function cycleStars() {

        var index = 0; // On declare une variable qui servira d'index et on l'initialise à 0
          
        setInterval(function() {

            if(index >= 100) // si l'index est >= à 100
            {
                index = 0; // on le réinitialise à 0 pour éviter une incrémentation à l'infini
            }

            var localIndex = index; // On crée un index "local" qui vaut la valeur de l'index "global" au moment de l'appel de la fonction. Il servira à définir une id unique pour chaque étoile

            index++; // on incrémente l'index global

            var starSize = rdmStars(); // taille aléatoire chargée dans une variable pour pouvoir l'assigner à width ET height dans le style (étoile carrée)

            // On crée une étoile
            $('#movingStars').append('<div id="star'+ localIndex +'"; class="movingStar" style="width:' + starSize + 'px ; height:' + starSize + 'px; position:absolute; top:' + rdmHeight() + 'px; left:' + rdmWidth() + 'px; background: red; border : 1px solid red; border-radius: 50%; box-shadow: 0 0 5px 1px #f77474; display: none;"></div>');
    
            // on lance l'animation : apparait, disparait, puis on supprime la div étoile
            $('#star'+ localIndex).fadeIn(10000).fadeOut(10000, function() {
                    $('#star'+ localIndex).remove();
                });
        },500); // on lance la fonction toutes les 0.5s (création nouvelle étoile et animation)
    }

    cycleStars();
    
   
   

   

    
  
    
    

        
       
});