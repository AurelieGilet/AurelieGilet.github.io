$(document).ready(function() {

    // BACKGROUND HEADER /////////////////////////////////////

    // Background images à faire défiler
    var backgrounds = [
        'img/background.jpg', 
        'img/background2.jpg',
        'img/background3.jpg',
        'img/background4.jpg',
    ]

    var i = 0;

    function cycleBackgrounds() {

        var banniere = $('.banniere'); // on récupère l'élément sur lequel afficher le background

        setInterval(function() {

            if(i < backgrounds.length - 1) {
                i++;
            }
            else {
                i = 0;  
            }
            banniere.css("background-image", "url(\'"+ backgrounds[i] +"\')");
                
        }, 15000);
    }

    cycleBackgrounds();

    // NAVBAR TOGGLER ///////////////////////////////////////////

    // Fonction qui permet de changer l'apparence du Toggler de la Navbar bootstrap lorsqu'on clique dessus

    // au clic sur le Navbar Toggler
    $('#toggler').on('click', function() {
        var color = $('#toggler').css('background-color'), // on récupère le style css de #toggler dans une variable
            grey = 'rgb(231, 231, 231)'; // on déclare variable grey et on initialize avec la couleur voulue

        if (color !== grey) { // si le style css background-color est différent de la couleur voulue (grey)
            $('nav').removeClass('navbar-dark'); // on retire la class bootstrap "navbar-dark" de la nav
            $('nav').addClass('navbar-light'); // on lui ajoute la class bootstrap "navbar-light" (change l'apparence de base du toggler)
            $('#toggler').css('background-color', grey); // on applique un color-background 'grey' au toggler pour le faire ressortir
        } else { // Sinon (si le toggler a déjà un color-background 'grey'), on remet tout à l'état initial
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
            $('#toggler').css('background-color', 'transparent');
        }

    });

    // VEHICULES /////////////////////////////////////////////////

    // Array infos voitures
    var voitures = [
        {
            nom : 'Peugeot 208',
            options : 'Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0.5/km supplémentaire).',
            prix : 999 ,
            img : ['img/vehicule1.png', 'img/vehicule1.2.png', 'img/vehicule1.3.png', 'img/vehicule1.4.png']
        },
        {
            nom : 'Ford Focus',
            options : 'Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0.5/km supplémentaire).',
            prix : 999,
            img : ['img/vehicule2.png', 'img/vehicule2.2.png', 'img/vehicule2.3.png', 'img/vehicule2.4.png']
        },
        {
            nom : 'Audi A1',
            options : 'Diesel 3 portes, GPS, Autoradio, Forfait 1000 km (0.55/km supplémentaire).',
            prix :  1100,
            img : ['img/vehicule3.png', 'img/vehicule3.2.png', 'img/vehicule3.3.png', 'img/vehicule3.4.png']
        },
        {
            nom : 'Opel Mokka',
            options : 'Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0.4/km supplémentaire).',
            prix :  1150,
            img : ['img/vehicule4.png', 'img/vehicule4.2.png', 'img/vehicule4.3.png', 'img/vehicule4.4.png']
        },
        {
            nom : 'Peugeot 207+',
            options : 'Diesel 3 portes, GPS, Autoradio, Forfait 1000 km (0.6/km supplémentaire).',
            prix :  1099,
            img : ['img/vehicule5.png', 'img/vehicule5.2.png', 'img/vehicule5.3.png', 'img/vehicule5.4.png']
        },
        {
            nom : 'Renaut Twingo',
            options : 'Essence 3 portes, GPS, Autoradio, Forfait 1000 km (0.3/km supplémentaire).',
            prix :  899,
            img : ['img/vehicule6.png', 'img/vehicule6.2.png', 'img/vehicule6.3.png', 'img/vehicule6.4.png']
        },
        {
            nom : 'Toyota Yaris',
            options : 'Essence 5 portes, GPS, Autoradio, Forfait 1000 km (0.45/km supplémentaire).',
            prix :  999,
            img : ['img/vehicule7.png', 'img/vehicule7.2.png', 'img/vehicule7.3.png', 'img/vehicule7.4.png']
        },
        {
            nom : 'Audi A8',
            options : 'Diesel 5 portes, GPS, Autoradio, Forfait 1000 km (0.70/km supplémentaire).',
            prix :  1299,
            img : ['img/vehicule8.png', 'img/vehicule8.2.png', 'img/vehicule8.3.png', 'img/vehicule8.4.png']
        }
    ]

    // Création de l'élément html carousel
    function addCarousel(img, index) {
        return '<div class="photos d-flex align-items-center"> <div id="prev'+ index +'" class="prev"><img src="img/prev.png" alt="" width="30" height="30"></div><div id="carousel'+ index +'" class="carousel"> <img id="img1" src="' + img[0] + '" alt=""> <img id="img2" src="' + img[1] + '" alt=""> <img id="img3"src="' + img[2] + '" alt=""> <img id="img4" src="' + img[3] + '" alt=""> </div> <div id="next'+ index +'"class="next"><img src="img/next.png" alt="" width="30" height="30"></div> </div> '
    }

    // Ajout des voitures au html
    function addCar(index) {

        var voiture = voitures[index];

        // Créations des éléments html liste                                                
        $('#liste').append('<li class=" d-flex justify-content-around align-items-center">' + addCarousel(voiture.img, index) + '<article class="d-flex flex-column justify-content-center"> <h2 class="nom">' + voiture.nom + '</h2><div class="contenu" ><p class="options"> '+ voiture.options + ' <br></p> <div class="location"><span class="prix">'+ voiture.prix + '</span>€ - Agence de Paris</div></div><button id="reserver">Réserver et Payer</button></article></li>')

        // Carousel photos voitures + event on click
        var img = $('#carousel'+ index +' img'), 
            indexImg = img.length - 1, 
            i = 0, 
            currentImg = img.eq(i); 

        img.css('opacity', '0');  
        currentImg.css('opacity', '1'); 

            // Bouton Next
        $('#next'+index).on('click', function(){ // "'#next'+index" permet d'indiquer avec une id unique sur quel élément on clique

            i++; 
        
            if( i <= indexImg ) {
                img.css('opacity', '0'); 
                currentImg = img.eq(i); 
                currentImg.css('opacity', '1'); 
            } else {
                i = 0;
                img.css('opacity', '0'); 
                currentImg = img.eq(i); 
                currentImg.css('opacity', '1');
            }
        });
            // Bouton Prev
        $('#prev'+ index).on('click', function(){ 
        
            i--; 
        
            if( i >= 0 ) {
                img.css('opacity', '0');
                currentImg = img.eq(i);
                currentImg.css('opacity', '1');
            } else {
                i = indexImg;
                img.css('opacity', '0');
                currentImg = img.eq(i);
                currentImg.css('opacity', '1');
            }
        });
    }

    // Affichage des voitures dans la page
    var voitureAffichees = 0;

    // Affichage des 4 premiers résultats
    for(i = 0; i < 4; i++)
    {
        addCar(i)
        voitureAffichees++;
    }

    // Fonction Scroll qui ajoute 4 résultats de plus
    $(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
               
            if(voitureAffichees < voitures.length - 1)
            {
                for(j = voitureAffichees; j < voitureAffichees + 4; j++)
               {
                    addCar(j)
               }
               voitureAffichees+=4;
            }
        }
    });
});
