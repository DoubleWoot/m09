let Trainer = {
	name : "Red",
	age : 10,
	
	pokemon : function(name, level, health, attack){
		this.name = name;
		this.level = level;
		this.attack = attack;
		this.health = health;

		this.tackle = function(target){
			console.log(this.name + "! I choose you!");
        	console.log(this.name + ' tackled ' + target.name);
        	console.log(target.name + "'s health is now reduced to " + (target.health - this.attack));
    	};
    	this.faint = function(target){
        	if(target.health == 0){
        		console.log(this.name + 'fainted');
        	};
    	};
	},
	friends : ["Justine","Jonas","Gymuel","Harold","Fred"]
}

let swampert = new Trainer.pokemon("Swampert", 32, 350, 100);
let alakazam = new Trainer.pokemon("Alakazam", 30, 290, 95);
let camerupt = new Trainer.pokemon("Camerupt", 31, 310, 90);
let altaria = new Trainer.pokemon("Altaria", 29, 280, 93);
let gardevoir = new Trainer.pokemon("Gardevoir", 31, 330, 89);
let solrock = new Trainer.pokemon("Solrock", 32, 350, 85);

swampert.tackle(alakazam)