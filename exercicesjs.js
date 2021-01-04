//Partie 1 : exercice 1
//Cette fonction permet d'additionner les deux paramètres 
//en entrée
function addition(x, y) {​​​​​​​
    // Écrivez votre code ici
    // j'additionne x et y et je le retourne
    return x + y;
}​​​​​​​

// Afficher la sortie
console.log(addition(1,2));
console.log(addition(-2,-4));


//Partie 1 : exercice 2
//fonction qui transforme le nombre de minutes en secondes
function minuteToSecond(minutes) {
    //je multiplie le nombre de minutes par 60 pour avoir le nombre de secondes
    return minutes*60;
  }
  
  // Afficher la sortie
  console.log(minuteToSecond(4));
  console.log(minuteToSecond(3));


//Partie 1 : exercice 3
//fonction qui incrémente le nombre donné de 1
function increment(n) {
    //je rajoute 1 au nombre donné en paramètre.
    return n+1;
  }
  
  // Afficher la sortie
  console.log(increment(1));
  console.log(increment(4));


//Partie 1 : exercice 4
//fonction qui retourne la surface d'un triangle grace à la base et la hauteur
function getSurface(base, hauteur) {
    // je multiplie base * hauteur et divise le tout par 2 puis le retourne
    return (base*hauteur)/2
  }
  
  // Afficher la sortie
  console.log(getSurface(8, 2));
  console.log(getSurface(7, 3));


//Partie 1 : exercice 5
//fonction permettant d'inverser une chaine de caractères
function strReverse(str) {
    //je transforme la chaine de caractère donnée en param. en array
    var arr = str.split("");
    //j'inverse cet array
    arr = arr.reverse();
    //je re-transforme cet array en string
    return arr.join("");
  }
  
  // Afficher la sortie
  console.log(strReverse("WayToLearnX"));
  console.log(strReverse("Hello"));


//Partie 1 : exercice 6
//fonction permettant de trouver le plus grand de 3 entiers donnés
function getMax(a, b, c) {
    //je cherche à savoir si a est plus grand que b et c
    if(a > b && a > c){
        return a;
    //puis si b est plus grand que a et c
    } else if (b > a && b > c){
        return b;
    //en dernier cas, c est logiquement plus grand que les 2 autres
    } else {return c}
}

// Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));


//Partie 1 : exercice 7
//fonction permettant de retourner le premier élément d'un arr
function getFirst(tab) {
    //je renvoie le premier élément du tableau donné en param.
    return tab[0];
}

// Afficher la sortie
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));


//Partie 1 : exercice 8
//récupérer l'ul de la page courrante
return document.location.href;


// Partie 1 : exercice 9
//fonction retournant le reste de deux nombres
function resteDiv(a, b) {
    //% modulo divise a par b et donne le reste
    return a % b;
}

// Afficher la sortie
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));





//Partie 2 : exercice 1
//j'ai modifié le param. b en a, et enlevé les $
function carre(a) {
	return a*a;
}

// Afficher la sortie
console.log(carre(2));
console.log(carre(4));


//Partie 2 : exercice 2
function check(a, b) {
	//je check si la somme est inférieure à 100 pour retourner true, sinon je retourne false
	if(a+b < 100){
	    return true;
	} else {return false;}
}

// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


//Partie 2 : exercice 3
function heureSeconde(heure) {
	//je multiplie par 60 pour avoir le nombre de minutes
	let minutes = heure*60;
	//puis je re-multiplie par 60 pour savoir le nombre de secondes
	return minutes*60;
}

// Afficher la sortie
console.log(heureSeconde(1));
console.log(heureSeconde(5));


//Partie 2 : exercice 4
function checkNbr(n) {
	//je check si n est plus petit ou égal à 0, puis retourne true. 
	if(n<=0){
	    return true;
	//sinon, je retourne false
	} else {return false;}
}

// Afficher la sortie
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));


//Partie 2 : exercice 5
function isEqual(nbr1, nbr2) {
	//je check si les deux nombres sont égaux en valeur et type, et retourne true
	if(nbr1 === nbr2){
	    return true;
	}else {
	    //sinon, je retourne false
	    return false;
	}
}

// Afficher la sortie
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));


//Partie 2 : exercice 6
function isDivisible(n) {
	//je check si n est divisible par 0 en regardant si le reste de n/5 est égal à 0, puis retourne true
	if(n%5==0){
	    return true;
	    //sinon, je retourne false
	}else {return false;}
}

// Afficher la sortie
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));


//Partie 2 : exercice 7
function hmTos(heure, minute) {
	//je convertis les heures données en minutes
	let htom = heure*60;
	//j'additionne ces minutes aux minutes données en param, multiplie le tout par 60 pour avoir le nombre de secondes, puis le retourne
	return (htom + minute)*60;
}

// Afficher la sortie
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));


//Partie 2 : exercice 8 
function reverseTab(tab) {
	//je créé un tableau vide
	let reversedarr = [];
	//tant qu'il y a des éléments dans tab, je prend le dernier et le rajoute à mon nouveau tableau
	while(tab.length){
	    let element = tab.pop();
	    reversedarr.push(element);
	}
	return reversedarr;
}

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));