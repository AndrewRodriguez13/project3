//alert("JavaScript works!");

// Andrew Rodriguez
// Sdi - 1404
// Assignment 3 Project 3
// JavaScript - Flowchart
// " Dragon ", " Slaying", "Armor"

// Preparing to fight a dragon! Deciding which armor to get and what weapon we will use our money on.

// Variables

var myname = "Andrew";
var light = "Lightweight";
var heavy = "heavyduty";
var weapon1 = "Sword";
var weapon2 = "CrossBow";
var numberofdragons = 1;
var fightingadragon = true;
var money = 150;
var swordcost = 50;
var CrossBowcost = 40;
var Lightweightcost = 75;
var heavydutycost =50;
var Prepare = " I will go to the store to purchase our weapons and armor to fight the dragons"; // string
var Thejourney = " time to fight some dragon\'s"; // escape string


// OutPut

console.log("Morning everyone, My name is" ,Myname, "Arod for short.");
console.log("Today I will fight" ,Numberofdragons, "dragon");
console.log("first I will need to decide what kind of armor I will be using");
console.log("If I use" ,Armor1, "Armor my choice of weapon is a" ,Weapon1, ".");
console.log("The reason for this choice is I will be more swift");
console.log("If I decide to go with the" ,Armor2, "Armor My choice of weapon would then be" ,Weapon2, ".");
console.log("The" ,Armor2, "Armor will weigh a lot therefore making me not so swift.");
console.log("The" ,Weapon2, "however makes good for long distances and if there was multiple dragons");
console.log("Time to Pick my Armor.");
console.log("If i buy the sword it will cost me" + swordcost + "dollars.");
console.log("if buying the crossbow it will cost" + CrossBowcost + "dollars");
console.log("I would spend" + Lightweightcost + "dollars when buying" + light + "armor.");
console.log("buying the" + heavy + "armor i would spend" + heavydutycost + "dollars.");

// Boolean

FightingADragon = confirm("Are We Going To Slay A Dragon Today?");

// Conditionals

if (FightingADragon === true) {
    Myprompt = prompt("How many dragons are we going to fight today?", "type number of dragons");
    Myprompt = parseInt("1");
       if (Myprompt <= 1)
       alert("Its time to slay a single dragon with my lightweight armor and sword!!!");
       else
       alert("multiple dragons!! No need to worry my heavy-duty armor and crossbow will do the trick");
} else { 
    Myprompt = prompt("If there are multiple dragons then what weapon will I choose?","Type a weapon choice");
       if (Myprompt === "crossbow")
           alert("Awesome I will win the battle with my crossbow!! You Win!!!" ,Myprompt);
        else 
        alert(Myname + " will lose the fight against the dragons.!! You lose GameOver!!!" ,Myprompt);
        
} 
 
 
// Numbers
if ( moneyinmypocket <= 150){
  console.log ("I will have enough money to buy a" + weapon1 + ".");

};

// Math
if (moneyinmypocket >= swordcost) {
  moneyinmypocket -= swordcost;
  console.log("I will purchase the" + weapon1 + "and still have a enough left over for the" + light + "Armor.");

}


