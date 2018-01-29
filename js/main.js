// add an event listener to the form to submit Dave's message

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

 var input = document.getElementById("chatInput");

input.addEventListener("keypress",logInput);

function logInput() {
	console.log("Something happened");
	if (event.keyCode === 13) {
		event.preventDefault();
		logPhrase();
	}
}

function logPhrase()
{
	var phrase = document.getElementById("chatInput").value;
	console.log("Phrase: " + phrase);
	write("dave",phrase);
	input.value = "";
	halResponse(phrase);
}

function write(user, phrase)
{
	var p = document.createElement("p");
	p.innerHTML = phrase;
	var side = document.getElementById(user);
	side.appendChild(p);
}

function halResponse(phrase)
{
	if (phrase === "Good morning, Dave") {
		write("hal","Good morning, Hal.");
	}
}