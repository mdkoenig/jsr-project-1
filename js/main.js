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
	console.log(typeof phrase);
	if (phrase === "Good morning, Dave.") {
		write("hal","Good morning, Hal.");
	}
	else if (phrase === "How are you doing?") {
		var response = "I'm feeling pretty " + random("feeling");
		write("hal", response);
	}
	else if (phrase === "Do you have any friends?") {
		console.log("Friends")
		var response = "Yeah, my best friend is " + random("friend");
		write("hal", response);
	}
	else if (phrase.indexOf("activities")) {
		var regEx = /[0-9]/g;
		var number = phrase.match(regEx);
		if(number === null) {
			number = 1;
		}
		var response = "My " + number + " favorite acitivites are " + activities(number);
		write("hal", response);	
	} 
}

function random(type) 
{
	if (type === "feeling") {
		var feelings = ["angry", "excited", "disgusted", "envrious", "scared", "friendly", "indignant", "joyful", "kind", "loving", "empathetic", "sad", "ashamed", "surprised", "trust"];
		var randFeeling = Math.floor((Math.random()*feelings.length));
		console.log(randFeeling);
		var emotion = feelings[randFeeling];
		return emotion;
	}
	else if (type === "friend") {
		var friends = ["Bailey Seiner", "Mark K", "Rebecca", "Sonyl Nagale", "Bryan Duckworth", "Bryan A", "Carolyn", "Christie", "Courtney", "David Chua", "Derek J", "Elaine", "Ellen", "Emily", "Andreina", "Whitney", "Joe", "Joe W", "Kenneth", "Liana", "Morris", "Richard Briddock", "Zach"];
		var randFriend = Math.floor((Math.random()*friends.length));
		console.log(randFriend);
		var friend = friends[randFriend];
		return friend;
	}
}

function activities(number)
{
	var activities = ["blow bubbles","bring a blanket and lie on the grass at an outdoor concert","build a sandcastle at the beach","buy a creamsicle from the neighborhood ice cream truck","buy fresh produce at the farmers’ market","catch fireflies at night","collect seashells at the beach","dangle your feet off a dock","dig your own clams","eat a slice of watermelon","eat a soft-serve vanilla ice cream cone with rainbow sprinkles","eat a whole lobster with your hands","eat and drink","eat corn on the cob","feel the sun on your back","get caught in a summer rainstorm","go camping","go fishing","go for a hike","go kayaking or canoeing","go to a baseball game","have a barbecue","have a picnic in the park","make a summer playlist","make lemonade from scratch","mix up a pitcher of sangria","nap in a hammock","pick berries and peaches at a farm","pick wildflowers","play miniature golf","play tag, hopscotch, or one of your favorite childhood games","play tennis","read a trashy novel","relax","rent a bike","ride a roller coaster","roast marshmallows over a fire and make s’mores","roll up your pant legs and go wading","see a movie at the drive-in","see a summer blockbuster","sip a sweating glass of iced tea","sit on a porch swing","sleep with the windows open","smell freshly-cut grass","stargaze while lying in the grass","swim in a lake","take a last-minute road trip","toss a frisbee","walk barefoot in the grass","walk on the boardwalk and listen to the boards creak under your feet","watch the sun set from a beach","win a prize at the fair"]
	var list = number;
	console.log(list);
	var favorite = "";
	for (i = 0; i < list; i++) {
		var rand = Math.floor(Math.random()*activities.length);
		if(i === 0) {
			favorite = activities[rand];
			delete activities[rand];
		}
		else {
			favorite = favorite + " and " + activities[rand];
			delete activities[rand];
		}
	}
	return favorite;
}