/////////////////////////////////
////////Labyrinth of Lies////////
/////////////////////////////////

/* 

**Layout**
//Start Screen
-Game Title
-Game description
-Start button

//Setup Screen
-Player Name > input
-Character Class > button select
-Delve into the labyrinth button

//Game Screen
-Story text
-Gameplay options
-Player Information
-Monster Information

**Structure**
Classes
-Player
constructor {
    name
    class
    health
    weapon/attack power
    special ability/attack power
    health potions }
weapon()
special()
heal()

-Monster
constructor {
    name
    health
    weapon/attack power
    special ability/attack power *stretch }
weapon()
special() *stretch

-Scenario
constructor {
    name
    story: string that will display in DOM
    option1: string that will display in DOM button
    option2: string that will display in DOM button
    monster: assigned monster if applicable }
select1() => run scenario X
select2() => run scenario X

**Required Functions
Display in DOM functions
    displayStory
    displayOpt1
    displayOpt2
    displayName
    displayClass
    displayHealth
    displayWeapon
    displaySpecial
    displayPotions
runScenario(name)

*/

console.log('Hello World');
console.log($);

class Player {
    constructor() {
        this.name = "Player";
        this.playerClass = "Knight";
        this.weapon = "Sword";
        this.weaponPower = 5;
        this.health = 20;
        this.healthPotions = 5;
        this.potionPower = 5;
    }
    weaponAttack(enemy) {
        enemy.health -= this.weaponPower
        console.log(`${enemy.name} has been attacked. His health was reduced by ${this.weaponPower}`);
    }
    heal() {
        if (this.healthPotions >= 1) {
            this.health += this.potionPower;
            console.log(`${this.name} has been healed`);
        }
    }
}

class Monster {
    constructor(name, weapon, weaponPower, health) {
        this.name = name;
        this.weapon = weapon;
        this.weaponPower = weaponPower;
        this.health = health;
    }
    weaponAttack(enemy) {
        enemy.health -= this.weaponPower
        console.log(`${enemy.name} has been attacked. His health was reduced by ${this.weaponPower}`);
    }
}

const displayStory = (scenario) => {
    $('.storyDisplay').text(scenario.story);
    console.log('story displayed');
}

const displayOptions = (scenario) => {
    $('.optionOne').text(scenario.optionOne);
    $('.optionTwo').text(scenario.optionTwo);
    console.log('option one and two displayed');
}

const runScenario = (scenario) => {
    console.log(`displaying ${scenario.type} scenario `);
    displayStory(scenario);
    displayOptions(scenario);
}

const startScenario = {
    type: "story",
    story: "ABC",
    optionOne: "Run left",
    selectOne: "",
    optionTwo: "Run right",
    selectTwo: ""
}

const scenarioOne = {
    type: "story", 
    story: "XYZ",
    optionOne: "Go north",
    selectOne: runScenario(startScenario),
    optionTwo: "Go south",
    selectTwo: "runScenario(scenarioTwo)"
}


runScenario(startScenario);


