// Here's the basics of .js. Here, we concern ourselves with syntax and common functions

// Variables
let myName = "Julian";             // Modern way of declaring a variable
var myAge = "20";                  // Older way of declaring a variable
const isDepressed = "true";      // Constant variable. Can't be reassigned

// Functions
function henloo()
{
    console.log("I'm depressed. No, I'm actually " + myName + ". And I am " + myAge + ". No, I'm still " + myName + ".");
}

// Calling that function
henloo();

// We can run a .js file in these ways:

// -> Embedded in an HTML file (like what script.js is doing)
// -> On a browser console
// -> Using node.js