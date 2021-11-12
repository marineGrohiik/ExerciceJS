// On déclare la variable btn qui permet de stocker l'id du bouton et de le cibler par la suite
var btn = document.getElementById('button');

// On déclare la variable recupValue qui permet de stocker une fonction qui récupère les valeurs des inputs et les affiche dans une alert
var recupValue = function(){
    // On stocke dans des variables la valeur de chaque input
    var nameInput = document.getElementById('name').value;
    var firstName = document.getElementById('firstName').value;
    var city = document.getElementById('city').value;
    // On affiche dans une alert la valeur des 3 variables
    alert('Nom : ' + nameInput + '\nPrénom : ' + firstName + '\nVille : ' + city);
};

// On appelle la variable btn où on a stocké l'id du bouton. On lui rattache la méthode addEventListener pour déclencher la fonction stockée dans la variable recupValue. L'événement qui va déclencher cette fonction sera le click
btn.addEventListener('click', recupValue);


// -----------------------------------------------


// 2ème méthode avec l'appelle de la fonction directement dans le addEventListener


// btn.addEventListener('click', function(){
//     var nameInput = document.getElementById('name').value;
//     var firstName = document.getElementById('firstName').value;
//     var city = document.getElementById('city').value;
//     alert('Nom : ' + nameInput + '\nPrénom : ' + firstName + '\nVille : ' + city);
// });