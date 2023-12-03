(function (name) {
  console.log("Hello " + name);
})("John", "Jen", "Jason", "Jim");

var byeSpeaker = {};

var speakWord = "Good Bye";

function speak(name) {
	var byeSpeaker = {};
	byeSpeaker.name = "John", "Jen", "Jason", "Jim";
	var speakWord = "Good Bye ";
	byeSpeaker.sayGoodBye = function () {
		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

}(window);
