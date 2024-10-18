// Confirm the script is loaded correctly
console.log("Script loaded successfully :3");

// Make a div to print out messages
const printDiv = document.createElement("div");
document.body.appendChild(printDiv);

// Select the button and text input
const dePression = document.getElementById("littleNub");
const textInput = document.getElementById("notJustSad");

// Variable to play that MP3 file
const audio = new Audio("Bloodbath - Ominous Bloodvomit.mp3");

// Function to handle button clicks
function handleButtonClick(event)
{
    // Logging event type and event target
    console.log("Event Type: ", event.type);
    console.log("Event Target: ", event.target);

    // Make the button go to a URL
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs";
}

// Function to handle text input events
function handleTextInput(event)
{
    // Check if the user pressed Enter
    if (event.key === "Enter")
    {
        // Log the event type and event target
        console.log("Event Type: ", event.type);
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

// Add an event listener to the button and text input
dePression.addEventListener('click', handleButtonClick);
textInput.addEventListener('keydown', handleTextInput);

// Confirm the event listener is added
console.log("Event listener added to the button :3");
console.log("Event listener added to the text input :3");