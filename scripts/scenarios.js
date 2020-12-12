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