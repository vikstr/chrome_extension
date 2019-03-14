var elem = document.getElementsByClassName('ytp-play-button');
elem[0].addEventListener("click", function(){
	
	const Http = new XMLHttpRequest();

	var url = 'https://www.youtube.com/watch?v=K7CK-Fx4z-c';

	Http.open('GET',url);

	Http.send();

	console.log("send")

});
var currenttime = document.getElementsByClassName("ytp-time-current");
console.log(currenttime[0].textContent);
var durationtime = document.getElementsByClassName("ytp-time-duration");
var time = durationtime[0].textContent;
console.log(time);
