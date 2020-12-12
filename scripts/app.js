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
    constructor(name) {
        this.name = name;
        this.playerClass = "Knight";
        this.weapon = "Battleaxe Power";
        this.weaponPower = 8;
        this.maxHealth = 50;
        this.health = this.maxHealth;
        this.healthPotions = 5;
        this.potionPower = 5;
    }
    weaponAttack(enemy) {
        if (miss() === 1) {
        enemy.health -= this.weaponPower;
        displayStory(`${this.name} attacks the ${enemy.name}. His health is reduced by ${this.weaponPower}`);
            if (enemy.health <= 0) {
                displayStory(`You have defeated the ${enemy.name}. Continue down the passage.`);
                $('.optionThree').removeClass('displayNone');
            }
        } else {
            displayStory(`${this.name} misses!`)
        }
    }
    heal() {
        if (this.health >= this.maxHealth) {
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
    $('.storyDisplay').html(string);
}

const introStoryDisplay = (string) => {
    $('#introStoryDisplay').text(string);
}

const displayFight = (string) => {
    $('.monsterFight').text(string);
}

const displayImage = (image) => {
    $('.monsterImage').css('background-image', image);
}

const displayFightOptions = () => {
    $('.optionOne').text('Weapon Attack');
    $('.optionTwo').removeClass('displayNone');
    $('.optionTwo').text('Healing Potion');
    $('.optionThree').text('Continue');
    console.log('display fight options');
}

const displayOptions = (scenario) => {
    if (scenario.optionOne) {
    $('.optionOne').removeClass('displayNone').text(scenario.optionOne);
    } else {
        $('.optionOne').addClass('displayNone');
    }
    if (scenario.optionTwo) {
        $('.optionTwo').removeClass('displayNone').text(scenario.optionTwo);
        console.log('option two displayed');
    } else {
        $('.optionTwo').addClass('displayNone')
    }
    if (scenario.optionThree) {
        $('.optionThree').removeClass('displayNone').text(scenario.optionThree);
        console.log('option three displayed');
    } else {
        $('.optionThree').addClass('displayNone')
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
    checkScenarios();
    if (currentScenario instanceof Scenario) {
        displayOptions(scenario);
        console.log(`The current scenario is ${currentScenario}`);
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

//check player health 
const checkHealth = () => {
    if (player.health <= 0) {
        prompt("You have died...Maybe try again later?");
        location.reload();
    }
}

//player takes damage
const takeDamage = (number) => {
    player.health -= number;
}

//run fight 
const fight = () => {
    if ((currentScenario.monster).health > 0) {
        player.weaponAttack(currentScenario.monster);
        (currentScenario.monster).weaponAttack(player);
        checkHealth();
        displayHealth(player);
    } else {
        displayStory('There is nothing to fight anymore. Select CONTINUE to resume your quest.');
    }
    console.log('fight');
}

//check for special scenarios 
const checkScenarios = () => {
    if (currentScenario === boulderRun) {
        console.log('take damage from scenario');
        takeDamage(10);
        displayHealth(player);
        checkHealth();
    } else if (currentScenario === voiceReply) {
        console.log('take damage from scenario');
        takeDamage(10);
        displayHealth(player);
        checkHealth();
    } else if (currentScenario === ratAttack ) {
        console.log('ratattack');
        if (giantRat.health === 45) {
        console.log('added helaing potion');
        player.healthPotions += 1;
        displayPotions(player);
        }
    } else if (currentScenario === umbralInspectCrystals) {
        console.log('added helaing potion');
        player.healthPotions += 1;
        displayPotions(player);
    }
}

let player = null;

//create player
const newPlayer = () => {
    const playerName = $('#playerName').val();
    console.log(playerName);
    player =  new Player(playerName);
}

//display player stats at the beginning of the game
const displayAllStats = () => {
    displayName(player);
    displayClass(player);
    displayWeapon(player);
    displayHealth(player);
    displayPotions(player);
}

//keeps track of which scenario is currently displayed in the DOM
let currentScenario = null;
console.log(`The current scenario is ${currentScenario}`);

//event listeners
$(() => {

    //when the start game button is clicked, display the player customization screen
	$('#startScreen-btn').on('click', () => {
        $('#startScreen').css('display', 'none');
        $('#playerCustomizeScreen').css('display', 'flex');
    })

    //when the customization button is clicked, display the player story intro screen
    $('#customize-btn').on('click', () => {
        $('#playerCustomizeScreen').css('display', 'none');
        $('#storyIntroScreen').css('display', 'flex');
    })

    //when the story intro button is clicked, start game, create new player object, display player stats, run first scenario
    $('#storyIntro-btn').on('click', () => { 
        $('#storyIntroScreen').css('display', 'none');
        $('#gameScreen').css('display', 'flex');
        newPlayer();
        displayAllStats();
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
        } else {
            const getScenario = game[currentScenario.name][2];
            runScenario(getScenario);
        }
    })
    
});

//TO-DO 
//add scenarios
//add player classes
//add reset button