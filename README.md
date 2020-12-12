# Labyrinth of Lies

### App Demo: https://andrea-hidalgo.github.io/labyrinth-of-lies/

---

## Concept:

Labyrinth of Lies is a "choose your own adventure" RPG style game. 
Players will have the choice to select a character class and set their character name.
Players will make choices on how to navigate an underground labyrinth, ocasionally fighting monsters. 
Players' choices will actively affect the outcome of the game.
If a player dies, the game will start over from the beginning.

## Technologies Used:

* HTML
* CSS
* JavaScript 
* JQuery

##### Credits:

* Background vector created by brgfx - freepix.com

## Approach:

#### Overview

To start off with, I created a wireframe of what I envisioned the game would look like. This gave me a better idea of the features the user would expect to see and what I would need to add.

#### Wireframe

<img src="./images/wireframe.jpg" width="80%" >

Color Pallet:

Colors scheme is based on the background image.
```
    #ff6f23
    #271106
    #904d19
    #190600
    #3c1c07
    #ffa057
    #562308
    #89370b
```

#### User stories

As an user I expect to see ...

#### Development Plans

##### Initial Plan
I want to write the game in a way that allows me to easily expand the storyline if needed, without having to modify a huge if/else tree. The key to this would be creating a Scenario class that will update the DOM elements according to the particular story and options that the player has to make. Clicking a button in the browser will then run a function that pulls up the next scenario. 

#### MVP

MVP ONE
* Start screen
  * Player can select start button to start game
* Play screen
  * Player can see story and make choices
  * Display player stats

MVP TWO
* Player can fight monsters
* Player can heal
* Longer storyline

MVP THREE
* Create additional setup screens
  * Player can input their name
  * Player can select a class to play as, each class has different stats (in progress)

MVP FOUR
* Display monster pictures
  
#### Stretch goals

* Find additional health potions inside the labyrinth (done!)
* Find better weapons inside the labyrinth
* Add ability to rest to restore health to full 
* Introduce luck element, make players roll a virtual die to determine the outcome.
* There is a chance that Monsters will heal
* Changing labyrinth. Selecting the same option might yield different results based on chance with every playthrough. 
* Expand storyline

## Challenges:

The biggest challenge I faced was coming up with the architecture to avoid a large series of if/else statements to control the scenario displays. 

### App Demo: https://andrea-hidalgo.github.io/labyrinth-of-lies/
