/* class Recette {

    constructor(titre, portions, ingredients){
        this.titre = titre;
        this.portions = portions;
        this.ingredients = ingredients;
    }

    showRecette(){
        console.log("Titre: " + this.titre);
        console.log("Portions: " + this.portions);
        console.log("Ingrédients :");
        this.ingredients.forEach(ingr => console.log("- " +ingr));
    }
}

pizza = new Recette("Pizza", "6", ["pâte à pain", "sauce tomate", "mozzarella"]);
pizza.showRecette(); */


var pizza = { titre: "Pizza", portions : 6, ingredients: ["pâte à pain", "sauce tomate", "mozzarella"]};
console.log("Titre: " + pizza.titre);
console.log("Portions: " + pizza.portions);
console.log("Ingrédients: ");
pizza.ingredients.forEach(ingr => console.log("- " +ingr));