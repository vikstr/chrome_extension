var url = window.location.href;
/*var getActiveUrl = document.addEventListener('DOMContentLoaded', function() {
	alert("URL");
    var checkPageButton = document.getElementById('life');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.query({active:true},function(tabsArray) {
			var tab = tabsArray[0];
			var tabUrl = tab.url;
			url = tabUrl; 
			alert(url);
        });
    },false);
},false);*/
function getCurrentTime(){
	var elemCurrentTime = document.getElementsByClassName("ytp-time-current");
	return elemCurrentTime[0].textContent;
}
function getDurationTime(){
	var elemDurationTime = document.getElementsByClassName("ytp-time-duration");
	return elemDurationTime[0].textContent;
}
var elemButtonPlay = document.getElementsByClassName('ytp-play-button');
elemButtonPlay[0].addEventListener("click", function(){
	const xhr = new XMLHttpRequest();
	xhr.open('GET',url);
	xhr.send();
	alert("send");
	var currentTime = getCurrentTime();
	alert(currentTime);
	var durationTime = getDurationTime();
	alert(durationTime);
});
