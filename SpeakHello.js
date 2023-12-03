(function (name) {
  console.log("Hello " + name);
})("Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura");

var helloSpeaker = {};

var speakWord = "Hello";

function speak(name) {
	var helloSpeaker = {};
	helloSpeaker.name = "Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura";
	var speakWord = "Hello ";
	helloSpeaker.sayHello = function () {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

}(window);

