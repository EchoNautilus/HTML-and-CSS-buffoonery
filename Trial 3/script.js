// Making functions for a button and a text input

// Confirm the script is loaded correctly
console.log("Script loaded successfully :3");

// Select the button by its ID (aka the name, which in this case, "littleNub")
const dePression = document.getElementById("littleNub");

// And also the text input, in this case, "notJustSad"
const textInput = document.getElementById("notJustSad");

// We'll also need a div to print out messages
const printDiv = document.createElement("div"); // Always name it "div" when making a new div
document.body.appendChild(printDiv);            // appendChild() appends the specified child element (printDiv in this case) to the parent element (document.body). This means that the newly created <div> element is added to the end of the <body> element, making it part of the visible HTML structure.

// Declare a variable to play that MP3 file
const audio = new Audio("Bloodbath - Ominous Bloodvomit.mp3");

// Lo, for I breathe life unto the littleNub!
function handleButtonClick(event)
{
    // But first, we must log every single little thing that happens to keep track of the code's execution which makes it easier to debug

    // First, the event type, in this case, a button "click".
    console.log("Event Type: ", event.type);
    
    // Second, the event target, in this case, which element specifically is triggered, so, "littleNub".
    console.log("Event Target: ", event.target);

    // Make the button go to a URL
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs";
}

// Lo, for I breathe life once more unto thee, notJustSad!
function handleTextInput(event) {
    // Check if the user pressed Enter
    if (event.key === "Enter")
    {
        // Log the event type
        console.log("Event Type: ", event.type);

        // And the event target, too
        console.log("Event Target: ", event.target);

        // Get the input value and convert it to lowercase to make it case insensitive
        const inputValue = event.target.value.toLowerCase();

        // If the user types certain things, send them different things.
        if (inputValue === "depression")
        {
            printDiv.textContent = "there, there :(";
        }
        else if (inputValue === "anxiety")
        {
            printDiv.textContent = "the bed is right there. Hop in, get some sleep :)";
        } 
        else
        {
            printDiv.textContent = "MWAHAHAHHAA";
            // Log before playing the audio
            console.log("Playing audio: Bloodbath - Ominous Bloodvomit");

            // Play the MP3 file
            audio.play();
        }
    }
}

// Add an event listener to the button (basically, assigning what function goes to what button)
dePression.addEventListener('click', handleButtonClick);

// Add another one for the text input
textInput.addEventListener('keydown', handleTextInput);

// Confirm the event listener is added
console.log("Event listener added to the button :3");
console.log("Event listener added to the text input :3")