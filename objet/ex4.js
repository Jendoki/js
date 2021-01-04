class Warrior{

    constructor(name, atk, def, hp){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }

    showCharacteristics(){
        console.log("This is " + this.name + ".");
        console.log("Attack stat: " + this.atk);
        console.log("Defence stat: " + this.def);
        console.log("HP: " + this.hp);
        console.log("");
    }

    attack(target){
        if(this.hp <= 0){
            console.log(this.name + " cannot attack, as they have already fainted.");
        } else if(target.hp <= 0){
            console.log(this.name + " cannot attack " + target.name + ", as they have already fainted.")
        } else {
            target.hp = target.hp-this.atk;
            console.log(this.name + " attacks " + target.name + ".")
            console.log(target.name + " lost " + this.atk + " hp. " + target.name + "'s hp is now " + target.hp + ".") 
            if(target.hp <= 0){
            console.log(target.name + " fainted.");
            }
        }
    } 
}

class Wizard{

    constructor(name, atk, def, mana, hp){
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.mana = mana;
        this.hp = hp;
    }

    showCharacteristics(){
        console.log("This is " + this.name + ".");
        console.log("Attack stat: " + this.atk);
        console.log("Defence stat: " + this.def);
        console.log("Mana: " + this.mana);
        console.log("HP: " + this.hp);
        console.log("");
    }

    attack(target){
        if(this.hp <= 0){
            console.log(this.name + " cannot attack, as they have already fainted.");
        } else if(target.hp <= 0){
            console.log(this.name + " cannot attack " + target.name + ", as they have already fainted.")
        } else {
            target.hp = target.hp-this.atk;
            console.log(this.name + " attacks " + target.name + ".")
            console.log(target.name + " lost " + this.atk + " hp. " + target.name + "'s hp is now " + target.hp + ".") 
            if(target.hp <= 0){
            console.log(target.name + " fainted.");
            }
        }
    } 

    heal(){
        if(this.mana <= 0){
            console.log(this.name + " cannot heal themselves, as they don't have any more mana.");
        } else if (this.hp <= 0){
            console.log(this.name + " cannot heal themselves, as they have already fainted.");
        } else {
            this.mana = this.mana-10;
            this.hp = this.hp+10;
            console.log(this.name + " healed themselves. They now have " + this.hp + " hp, and " + this.mana + " mana.")
        }
    }
}

Aymeric = new Warrior("Aymeric de Borel", 10, 20, 50);
Estinien = new Warrior("Estinien Wyrmblood", 20, 10, 40);
Yshtola = new Wizard("Yshtola Rhul", 20, 10, 40, 40);

Aymeric.showCharacteristics(); 
Estinien.showCharacteristics();
Yshtola.showCharacteristics();

Aymeric.attack(Yshtola);
Estinien.attack(Yshtola);
Yshtola.heal();
Yshtola.attack(Aymeric);
