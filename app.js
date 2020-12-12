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

//create all monsters
//monsters must be declared before fight scenarios
const bullywug = new Monster ('Bullywug', 'Greataxe', 5, 30);
const giantRat = new Monster ('Giant Rat', 'Bite', 2, 45);
const illusionist = new Monster ('Illusionist', 'Magic Missile', 7, 40);

//scenarios

const startScenario = new Scenario (
    'startScenario',
    "You descend into the tunnels of the Cave of Sorrows. Following the rough map the King gave you, you navigate through a series of natural caverns. <br><br> Soon you hear the sound of running water. <br><br> Ahead, you see that a sizable underground stream runs across your path.", 
    "Run and jump across the stream",
    "Wade through the stream"
    )

const jumpStream = new Scenario (
    'jumpStream',
    "You launch yourself forward into the air, easily clearing the stream. Glancing back, you see that the surface of the water remains undisturbed. <br><br> You turn your attention back to the passage ahead and continue on.",
    'Continue on'
)    

const bullywugFight = new FightScenario (
    'bullyWugFight',
    'You wade into the water slowly, picking your way carefully across the rocky bottom. You are halfway through when all of a sudden you see something stirring within the depths! As you watch, you see a bizarre creature emerging from the water: a frog-like humanoid, wielding a greataxe!',
    bullywug
)

const twoExits = new Scenario (
    'twoExits',
    'You reckon you must be at least two miles below the surface by now. You walk for what seems like hours, seeing no other signs of life other than fungi growing on the rough passage walls. <br><br> Some time later you see that the passage opens into a cavern ahead. <br><br> You see two exits leading out of this room, in addition to the passage you entered by.',
    'Take the left diagonal',
    'Take the right diagonal'
)

const boulder = new Scenario (
    'boulder',
    'You continue down a curving passage, wondering whether it will ever end. Suddenly, there is a booming sound, followed by a deep thrum, as of something large rolling. <br><br> No... it can\'t be...To your horror you look behind and see it...<br><br> A huge boulder, the width of the entire passage, rolling towards you! <br><br> You have only a few seconds before this boulder reaches you and squashes you flat!',
    'Turn tail and run!',
    'Attempt to dodge the boulder'
)

const boulderRun = new Scenario (
    'boulderRun',
    'Running for all you\'re worth, you are horrified when you feel a section of the floor give way. <br><br> You plummet head-first into a pit, seeing spikes rushing up to meet you. You hit the spikes at full speed and are pierced horribly. <br><br> You take 10 damage.',
    "Continue On"
);

const boulderDodge = new Scenario (
    'boulderDodge',
    'Bracing yourself, you wait until the boulder is almost upon you, then try and flatten yourself against the wall to avoid being crushed. <br><br> It\'s at that moment that something catches your eye, a flicker in the boulder through which you can see the tunnel beyond, and then you realize - this boulder is an illusion! <br><br> Whoever placed this illusion here has a wicked sense of humour, but they\'ll have to try harder than that to get the better of you!',
    'Continue on'
)

const ratRoom = new Scenario (
    'ratRoom',
    'Continuing on, the tunnel seems to curve slightly towards the left before opening up into a large cavern. <br><br> Within the room you can see three rats, one the size of a boulder, fighting noisily over a pile of bones... <br><br> This natural cavern area is littered with rubble, which could be slippery underfoot.',
    'Attempt a surprise attack',
    'Attempt to sneak by'
)

const ratAttack = new FightScenario (
    'ratAttack',
    'You stealth closer to get a better shot, but trip on a large piece of rubble. You look up to see a small bottle, filled with red liquid, resting in front of your face. <br><br> The bigger rat begins scuttling towards you, screeching horribly. <br><br> You pick up the bottle, smile, and get ready for battle. <br><br> You found a health potion!',
    giantRat
)

const ratSneak = new Scenario (
    'ratSneak',
    'Quietly, you pad through the room, keeping to the walls and the darkened areas, and being careful to not disturb the rubble. <br><br> The rats squabble over their bone pile, and do not notice you as you creep past them. <br><br> Eventually you make it to the exit on the far wall and slip out of this room.',
    'Continue On'
)

const voice = new Scenario (
    'voice',
    'For two hours you walk through the darkness...with only your mind for company. So it comes as a shock when, out of nowhere, a disembodied voice addresses you from out of the gloom. <br><br> "What do you seek, fool? For you have wandered far, and without purpose... Into regions where you do not belong. You proceed at your peril, brave one... only death awaits you on the paths you approach...". <br><br> You struggle to master yourself in the face of this haunting voice.',
    'Attempt to communicate',
    'Ignore it and continue walking'
)

const voiceReply = new Scenario (
    'voiceReply',
    'You stop in your tracks and begin talking..”Wh--” You attempt to continue the thought but the more you think about the voice, the more it’s aura overwhelms you. <br><br> You clutch your head, trying to block its laughter out, but it is everywhere, inescapable… The terrifying voice has totally shattered your nerves. <br><br> You take 10 damage.',
    'Continue On'
)

const voiceIgnore = new Scenario (
    'voiceIgnore',
    'You steel your nerves and tell yourself that this is just an illusion, a phantasm to get inside your mind...and you succeed in overcoming your fear. <br><br> Wow, that was easier than you expected. #byeFelicia',
    'Continue On'
)

const umbralChamber = new Scenario (
    'umbralChamber',
    'After a long while, you emerge in a huge cavern. Crystals grow in various places around walls that ascend upwards to a ceiling, towering at least 100 ft overhead. <br><br> It is like a subterranean cathedral. This must be the Umbral Chamber! <br><br> Your attention is drawn to a huge, amethyst growth in one corner of the chamber.',
    'Approach the Amethyst',
    'Inspect the Chamber'
)

const umbralApproach = new Scenario (
    'umbralApproach',
    'You approach the large amethyst, curious. <br><br> As you draw near you begin to see light within it, you see visions swirling…apocalyptic visions. Entire empires turn into ash as you watch. <br><br> You pull back.',
    'Inspect the Amethyst further',
    'Inspect the other crystals'
)

const umbralInspectAmethyst = new Scenario (
    'umbralInspectAmethyst',
    'As far as you can tell, this crystal appears like any other naturally occurring crystal in this cavern. <br><br> Looking around, you see crystals of various colours: moon white, coal red, jade green... but this is certainly the largest purple amethyst growth here.',
    'Inspect the other crystals',
    'Inspect the chamber'
)

const umbralInspectCrystals = new Scenario (
    'umbralInspectCrystals',
    'You walk over to a large cluster of white, red and green crystals. <br> Moving closer to them, you peer within, but can see nothing like the visions you saw in the huge amethyst. <br><br> What you do see however, is a healing potion lying in the corner. Yay!',
    'Inspect the chamber'
)

const umbralInspectChamber = new Scenario (
    'umbralInspectChamber',
    'You begin inspecting this natural cavern. There does not seem to be anything here but crystals and rough rock walls. <br><br> However, as you near the north wall you see that an opening in the rock leads through into another cavernous area. You fancy you can hear a sound coming from here. <br><br> Is that... a crying child?',
    'Enter larger chamber'
)

const illusionistChamber = new Scenario (
    'illusionistChamber',
    'You move through the opening and into the larger chamber. <br><br> By the light of the luminous crystals, you see a child sitting by the far wall, sobbing, with his head buried in his knees.',
    'Approach the child',
    'GTFO'
)

const illusionistApproach = new FightScenario (
    'illusionistApproach',
    'Slowly you walk up to the child. Sensing your presence, he looks up. <br> "Who... who are you?" he says in a choked-up voice. <br> "That doesn\'t matter," you reply. "Are you hurt?"<br>You reach the boy and the child immediately stops sobbing. <br> "So, it is you who have been journeying through my labyrinth!" he says in a changed voice. "You’ve done well to get this far, my friend! Most do not survive this long... And now, you die!”',
    illusionist
)

const gtfo = new Scenario (
    'gtfo',
    'The sound of a crying child this deep in the earth fills you with dread. You were never good with children. <br> You take a moment to readjust your priorities and turn back towards the surface. <br><br> You might not get the gold and the land, but at least you\'ll have your life. <br><br> Thank you for playing!'
)

const victory = new Scenario (
    'victory',
    'The illusionist lies dead at your feet, and now it all becomes clear. This devious individual wanted nothing other than to sow seeds of chaos. <br> The King of Iskar seems surprised to see you back and rather reluctant to hand you your prize. Alas, a deal is a deal. <br> Now 1000 gold richer and with a farmstead in your name, you decide to stay in Iskar for a while longer. <br> But soon the road, and the promise of adventure calls to you once more... <br><br> Congratulations! You have successfully completed “Labyrinth of Lies”'
)

//stores which scenarios should be displayed depending on players choices
//must be declared after scenarios are created
const game = {
    startScenario: [jumpStream, bullywugFight],
    jumpStream: [twoExits],
    bullyWugFight: [twoExits],
    twoExits: [boulder, ratRoom],
    boulder:[boulderRun, boulderDodge],
    boulderRun: [voice],
    boulderDodge: [voice],
    ratRoom: [ratAttack, ratSneak],
    ratAttack: [voice],
    ratSneak:[voice],
    voice:[voiceReply, voiceIgnore],
    voiceReply: [umbralChamber],
    voiceIgnore: [umbralChamber],
    umbralChamber: [umbralApproach, umbralInspectChamber],
    umbralApproach: [umbralInspectAmethyst, umbralInspectCrystals],
    umbralInspectAmethyst: [umbralInspectCrystals, umbralInspectChamber],
    umbralInspectCrystals: [umbralInspectChamber],
    umbralInspectChamber: [illusionistChamber],
    illusionistChamber: [illusionistApproach, gtfo],
    illusionistApproach: [victory]
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