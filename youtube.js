var url = 'https://www.youtube.com/watch?v=K7CK-Fx4z-c';
var elemButtonPlay = document.getElementsByClassName('ytp-play-button');
elemButtonPlay[0].addEventListener("click", function(){
	const xhr = new XMLHttpRequest();
	xhr.open('GET',url);
	xhr.send();
	console.log("send")
});

function getCurrentTime(){
	var elemCurrentTime = document.getElementsByClassName("ytp-time-current");
	return elemCurrentTime[0].textContent;
}
currentTime = getCurrentTime();
console.log(currentTime);
function getDurationTime(){
	var elemDurationTime = document.getElementsByClassName("ytp-time-duration");
	return elemDurationTime[0].textContent;
}
var durationTime = getDurationTime();
console.log(durationTime);


