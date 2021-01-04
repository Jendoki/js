class Personne {

    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    afficherNomComplet() {
        return this.nom + " " + this.prenom;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getPrenom() {
        return this.prenom;
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }
    getAge() {
        return this.age;
    }
    setAge() {
        this.age = age;
    }
    afficherPersonne(){
        console.log("This person is " + this.prenom + " " + this.nom + ", and they are " + this.age + " years old.")
    }
    sayHi(){
        console.log("You say hello to " + this.prenom + " " + this.nom + ".");
        console.log(this.prenom + " " + this.nom + " smiles at you and waves.")
    }
}

aymeric = new Personne("De Borel", "Aymeric", "32");
aymeric.afficherPersonne();
aymeric.sayHi();