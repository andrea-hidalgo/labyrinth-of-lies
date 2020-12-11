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
        this.weapon = "Sword Power";
        this.weaponPower = 5;
        this.maxHealth = 20;
        this.health = this.maxHealth;
        this.healthPotions = 5;
        this.potionPower = 5;
    }
    weaponAttack(enemy) {
        if (miss() === 1) {
        enemy.health -= this.weaponPower;
        displayStory(`${this.name} attacked the ${enemy.name}. His health was reduced by ${this.weaponPower}`);
            if (enemy.health <= 0) {
                displayStory(`${this.name} has defeated the ${enemy.name}`);
                $('.optionThree').removeClass('displayNone');
            }
        } else {
            displayStory(`${this.name} misses!`)
        }
    }
    heal() {
        if (this.health >= 20) {
            displayStory('You already have full health')
        }
        else if (this.healthPotions >= 1) {
            console.log(this.health);
            console.log(this.potionPower);
            this.health += this.potionPower;
            if (this.health > this.maxHealth) {
                this.health = this.maxHealth;
            }
            this.healthPotions -= 1;
            displayHealth(this);
            displayPotions(this);
            displayStory(`${this.name} has been healed by ${this.potionPower}`);
        } else {
            displayStory('You have run out of health potions!');
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
        if (this.health > 0) {
            if (miss() === 1) {
            enemy.health -= this.weaponPower
            displayFight(`${this.name} attacks with his ${this.weapon}. ${enemy.name}'s health was reduced by ${this.weaponPower}`);
            } else {
                displayFight(`${this.name} misses!`);
            }
        } else {
            displayFight('');
        }
    }
}

class Scenario {
    constructor(name, story, optionOne, optionTwo, optionThree) {
        this.name = name,
        this.story = story,
        this.optionOne = optionOne,
        this.optionTwo = optionTwo,
        this.optionThree = optionThree
    }
}

class FightScenario {
    constructor(name, story, monster, monsterImage ) {
        this.name = name,
        this.story = story,
        this.monster = monster,
        this.monsterImage = monsterImage
    }
}

const player = new Player;
const riverMonster = new Monster ('Water Dragon', 'Claws', 2, 10);

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

//functions that display story elements in the DOM
const displayStory = (string) => {
    $('.storyDisplay').text(string);
}

const displayFight = (string) => {
    $('.monsterFight').text(string);
}

const displayImage = (image) => {
    $('.monsterImage').css('background-image', image);
}

const displayFightOptions = () => {
    $('.optionOne').text('Weapon Attack');
    $('.optionTwo').text('Healing Potion');
    $('.optionThree').text('Continue');
}

const displayOptions = (scenario) => {
    $('.optionOne').text(scenario.optionOne);
    if (scenario.optionTwo) {
    $('.optionTwo').text(scenario.optionTwo);
    }
    if (scenario.optionThree) {
        $('.optionThree').removeClass('displayNone').text(scenario.optionThree);
        console.log('option three displayed');
    }
} 

//add or remove the displayNone class
const toggleHide = (element) => {
    if (element.hasClass('displayNone')) {
        element.removeClass('displayNone')
    } else {
        element.addClass('displayNone')
    }
}

//display all the correct elements of a scenario on the DOM and set the current Scenario
const runScenario = (scenario) => {
    console.log(`displaying ${scenario.name}`);
    currentScenario = scenario;
    displayStory(scenario.story);

    if (currentScenario instanceof Scenario) {
        displayOptions(scenario);
    } else {
        displayFightOptions();
        $('.optionOne').addClass('weaponAttack');
        $('.optionTwo').addClass('takePotion');
    }
}

//return an integer between 0 and 1. This will be used to determine if an attack misses or hits
const miss = () => {
    return Math.round(Math.random() * 1);
}

//run fight 
const fight = () => {
    if ((currentScenario.monster).health > 0) {
        player.weaponAttack(currentScenario.monster);
        (currentScenario.monster).weaponAttack(player);
        displayHealth(player);
    } else {
        displayStory('There is nothing to fight anymore. Select CONTINUE to resume your quest.');
    }
    console.log('fight');
}

//scenarios
const startScenario = new Scenario (
    'startScenario',
    "You enter the dungeon slowly, there are two lanes in front of you", 
    "go right",
    "go left",
    )

const scenarioTwo = new Scenario (
    'scenarioTwo',
    "You see a small pebble in front of you, and then a stream",
    "pick up pebble",
    'throw pebble into stream',
)

const scenarioThree = new FightScenario (
    'scenarioThree',
    "FIGHT! There is a large frog creature in front of you",
    riverMonster
)

//stores which scenarios should be displayed depending on players choices
const game = {
    startScenario: [scenarioTwo, scenarioThree],
    scenarioTwo: [scenarioThree, startScenario],
    scenarioThree: [startScenario]
}

//keeps track of which scenario is currently displayed in the DOM
let currentScenario = null;
console.log(`The current scenario is ${currentScenario}`);

//call to display player stats at the beginning of the game
displayName(player);
displayClass(player);
displayWeapon(player);
displayHealth(player);
displayPotions(player);

//event listeners
$(() => {

    //when the start game button is clicked, display the next screen
	$('#start-btn').on('click', () => {
        $('#startScreen').css('display', 'none');
        $('#gameScreen').css('display', 'flex');
        runScenario(startScenario);
    })
    
    //when option one is clicked, display correct scenario
    $('.optionOne').on('click', () => {
        if (currentScenario instanceof FightScenario) {
            fight();
        } else {
            const getScenario = game[currentScenario.name][0];
            runScenario(getScenario);
        }
    })
    
    //when option two is clicked, display correct scenario
    $('.optionTwo').on('click', () => {
        if (currentScenario instanceof FightScenario) {
            player.heal();
        } else {
            const getScenario = game[currentScenario.name][1];
            runScenario(getScenario);
        }
    })
    
    //when option three is clicked, display correct scenario
    $('.optionThree').on('click', () => {
        if (currentScenario instanceof FightScenario) {
            const getScenario = game[currentScenario.name][0];
            runScenario(getScenario);
            toggleHide($('.optionThree'));
        } else {
            const getScenario = game[currentScenario.name][2];
            runScenario(getScenario);
        }
    })
    
});

//TO-DO 
