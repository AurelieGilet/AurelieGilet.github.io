// Fonction calculer

let calculer = document.getElementById("calculer");
calculer.addEventListener("click", function() {

    let firstNumber = document.formulaire.firstnumber.value.trim(),
        secondNumber = document.formulaire.secondnumber.value.trim(),
        operator = document.formulaire.operateurs.value,
        reponse = document.getElementById('reponse');
    if(firstNumber == "" || secondNumber == "") // verif. si les champs sont vides
    {
        reponse.innerHTML = '<p> Attention ! <br/> Les deux champs sont obligatoires pour pouvoir effectuer le calcul !</p>';
    }
    else if(isNaN(firstNumber) || isNaN(secondNumber)) // verif les values ne sont pas des nombres
    {
        reponse.innerHTML = '<p> Attention ! <br/>Les saisies sont incorrectes : vous devez entrer des nombres ! </p>';
    }
    else // calcul
    {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    
        var resultat = ' ';
        switch(operator)
        {
            case '+' :
                resultat =  firstNumber + secondNumber;   
                reponse.innerHTML = '<p>' + firstNumber + ' + ' + secondNumber + ' = ' + resultat + '</p>';  
            break;
            case '-' :
                resultat = firstNumber - secondNumber;  
                reponse.innerHTML = '<p>' + firstNumber + ' - ' + secondNumber + ' = ' + resultat + '</p>';  
            break;
            case '*' :
                resultat = firstNumber * secondNumber; 
                reponse.innerHTML = '<p>' + firstNumber + ' &#215; ' + secondNumber + ' = ' + resultat + '</p>';  
            break;
            case '/' :
                resultat = firstNumber / secondNumber; 
                reponse.innerHTML = '<p>' + firstNumber + ' &#247; ' + secondNumber + ' = ' + resultat + '</p>'; 
            break; 
            default : 
            reponse.innerHTML = '<p> Attention ! <br/>Il y a une erreur : vérifiez l\'opérateur séléctionné ! </p>';
        }
    }   
});
       
// Affichage de la calculatrice au clic

let show = document.getElementById("show");
let hide = document.getElementById("hide");
var formBox = document.getElementById("form-box");


show.addEventListener("click", function() {
        
    formBox.classList.remove('zoomOut');
    formBox.classList.add('zoomIn');
    formBox.style.visibility = "visible";         
});


hide.addEventListener("click", function() {

    formBox.classList.remove('zoomIn');
    formBox.classList.add('zoomOut');
    setTimeout(function() {  
        formBox.style.visibility = "hidden";},1000);
});
     

// Affiche infobulle au survol

let infoBulle = document.getElementsByClassName("infobulle");
console.log(document.getElementsByClassName("infobulle"));

// infobulle firstNumber
document.getElementById('firstnumber').addEventListener('mouseenter', function() {
    infoBulle[0].style.visibility = "visible";
});
document.getElementById('firstnumber').addEventListener('mouseleave', function() {
    infoBulle[0].style.visibility = "hidden";
});

//infobulle operateur
document.getElementById('operateurs').addEventListener('mouseenter', function() {
    infoBulle[1].style.visibility = "visible";
});
document.getElementById('operateurs').addEventListener('mouseleave', function() {
    infoBulle[1].style.visibility = "hidden";
});

// Infobulle secondNumber
document.getElementById('secondnumber').addEventListener('mouseenter', function() {
    infoBulle[2].style.visibility = "visible";
});
document.getElementById('secondnumber').addEventListener('mouseleave', function() {
    infoBulle[2].style.visibility = "hidden";
});