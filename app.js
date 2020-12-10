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
        this.name = "Alex";
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

class Scenario {
    constructor(type, story, optionOne, optionTwo, optionThree) {
        this.type = type, 
        this.story = story,
        this.optionOne = optionOne,
        this.optionTwo = optionTwo,
        this.optionThree = optionThree
    }
    runScenario() {}

}

const player = new Player;

///functions that display player stats on the DOM
const displayName = (player) => {
    $('.playerName').text(player.name);
}

const displayClass = (player) => {
    $('.playerClass').text(player.playerClass);
}

const displayHealth = (player) => {
    $('.playerHealth').text(player.health);
}

const displayWeapon = (player) => {
    // $('.playerWeapon').text(player.weapon);
    $('.playerWeaponPower').before(player.weapon + " ");
    $('.playerWeaponPower').text(player.weaponPower);
}

const displayPotions = (player) => {
    $('.healingPotions').text(player.healthPotions);
}

displayName(player);
displayClass(player);
displayWeapon(player);
displayHealth(player);
displayPotions(player);


//functions that display story elements in the DOM
const displayStory = (scenario) => {
    $('.storyDisplay').text(scenario.story);
}

const displayOptions = (scenario) => {
    $('.optionOne').text(scenario.optionOne);
    $('.optionTwo').text(scenario.optionTwo);
    if (scenario.optionThree) {
        $('.optionThree').css('display','block').text(scenario.optionThree);
        console.log('option three displayed');
    }
    console.log('option one and two displayed');
} 

//display all the correct elements of a scenario on the DOM and set the current Scenario
const runScenario = (scenario) => {
    console.log(`displaying ${scenario.type} scenario `);
    displayStory(scenario);
    displayOptions(scenario);
    currentScenario = scenario;
    console.log(scenario);
}

//scenarios
const startScenario = new Scenario (
    'story',
    "You enter the dungeon slowly, there are two lanes in front of you", 
    "go right",
    "go left",
    )

const scenarioTwo = new Scenario (
    'story', 
    "You see a small pebble in front of you, and then a stream",
    "pick up pebble",
    'throw pebble into stream',
)

let currentScenario = startScenario;
console.log(`The current scenario is ${currentScenario}`);

runScenario(startScenario);

$('.optionOne').on('click', () => {
    if (currentScenario === startScenario) {
        runScenario(scenarioTwo);
    }

})

$('optionTwo').on('click', () => {
    if (currentScenario === startScenario) {
        runScenario()
    }
})

$('optionThree').on('click', () => {

})
