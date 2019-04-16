function getCurrentTime(){
	var elemCurrentTime = document.getElementsByClassName("ytp-time-current");
	return elemCurrentTime[0].textContent;
};
function getDurationTime(){
	var elemDurationTime = document.getElementsByClassName("ytp-time-duration");
	return elemDurationTime[0].textContent;
};
var url = window.location.href; 
var elemButtonPlay = document.getElementsByClassName('ytp-play-button');
var elemFullScreen = document.getElementsByClassName('ytp-fullscreen-button');
elemButtonPlay[0].addEventListener("click", function(){
		var currentTime = getCurrentTime();
		/*alert(currentTime);*/
		var durationTime = getDurationTime();
		/*alert(durationTime);*/
});
var div = document.createElement('div');
var circle = document.createElement('div');
var flag = 1;
var container = document.createElement('div');
var inputmessage = document.createElement('input');
elemFullScreen[0].addEventListener("click", function(){
	if (document.querySelector('[aria-label="Проигрыватель YouTube"]')!=null){
		if(flag>0){
			document.body.appendChild(container);
			container.appendChild( div );
			container.appendChild(circle);
			div.appendChild(inputmessage);
			container.style.position = 'absolute';
			container.style.backgroundColor = 'rgba(14, 14, 14, 0)';
			container.style.width = '100%';
			container.style.height = '90%';
			container.style.bottom = '10%';
			container.style.display = 'inline';
			container.style.cursor = 'pointer';
			div.style.position = 'absolute';
			div.style.display = 'none';
			div.style.width = '340px';
			div.style.height = '62px';
			div.style.left = '8.02%';
			div.style.right = '0%';
			div.style.bottom = '0%';
			div.style.backgroundColor = 'rgba(14, 14, 14, 0.4)';
			div.style.borderRadius = '25px';
			div.style.zindex = '1';
			div.style.cursor = 'pointer';
			inputmessage.type = 'text';
			inputmessage.id = 'send';
			inputmessage.name = 'Message';
			inputmessage.placeholder = 'Введите сообщение...';
			circle.style.position = 'absolute';
			circle.style.display = 'none';
			circle.style.width = '62px';
			circle.style.height = '62px';
			circle.style.left = '2.02%';
			circle.style.right = '0%';
			circle.style.bottom = '0%';
			circle.style.backgroundColor = 'rgba(14, 14, 14, 0.4)';
			circle.style.borderRadius = '35px';
			circle.style.zindex = '1';
			circle.style.cursor = 'pointer';
			flag = 0;
		}
		else {
			container.style.display = 'inline';
		}
	}
	else {
		if(flag == 0){
			div.style.display = 'none';
			circle.style.display = 'none';
			container.style.display = 'none';
		}
	}
});
function clearText() {
  text.value = "";
}
container.onmouseover = function(){
	div.style.display = 'inline';
	circle.style.display = 'inline';
};
container.onmouseout = function(){
	div.style.display = 'none';
	circle.style.display = 'none';
};
inputmessage.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    // Trigger the button element with a click
    
  }
});


