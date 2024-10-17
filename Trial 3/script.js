// Select the button by its ID (aka the name, which in this case, "littleNub")
const dePression = document.getElementById("littleNub");

// Lo, for I breathe life into the littleNub!
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

// Add an event listener to the button (basically, assigning what function goes to what button)
dePression.addEventListener('click', handleButtonClick);