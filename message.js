var elemFullScreen = document.getElementsByClassName('ytp-fullscreen-button');
var flag = 1;
var container = document.createElement('div');
elemFullScreen[0].addEventListener("click", function(){
	if (document.querySelector('[aria-label="Проигрыватель YouTube"]')!=null){
		if(flag>0){
			document.body.appendChild(container);
			container.style.position = 'absolute';
			container.style.backgroundColor = 'rgba(14, 14, 14, 0)';
			container.style.width = '500%';
			container.style.height = '90%';
			container.style.bottom = '10%';
			container.style.left = '49%';
			container.style.display = 'inline';
			container.style.cursor = 'pointer';
			flag = 0;
		}
		else {
			container.style.display = 'inline';
		}
	}
	else {
		if(flag == 0){
			container.style.display = 'none';
			let chat = document.querySelector("#chat");
			chat.style.display = 'none';
		}
	}
});
/*let bod = document.getElementById('content');
bod.insertAdjacentHTML('beforeend', `
	<div id="chat">
		<div class="container">
			<div class="flex-wrapper">
			</div>
		</div>
		<div class="field-container for-input">
			<div class="circle"></div>
			<input type="text" class="message" placeholder="Введите сообщение" id="message-field" name="message">
		</div>
	</div>
`);
let chat = document.querySelector("#chat");
chat.style.display = 'none';*/
var bod = document.getElementsByTagName('body')[0];
bod.insertAdjacentHTML('beforeend', `
<div id="chat">
  <div class="container">
    <div class="flex-wrapper">
    </div>
  </div>
  <div class="field-container for-input">
    <div class="circle"></div>
    <input type="text" class="message" placeholder="Введите сообщение" id="message-field" name="message">
  </div>
</div>
`);
let chat = document.querySelector("#chat");
chat.style.display = 'none';
function addMessage(message) {
    let chat = document.querySelector("#chat .flex-wrapper");
    let circle = document.createElement("div");
    circle.classList.add("circle");
    let message_div = document.createElement("div");
    message_div.classList.add("message");
    message_div.textContent = message;
    let div_container = document.createElement("div");
    div_container.classList.add("field-container");
    div_container.appendChild(circle);
    div_container.appendChild(message_div);
    chat.appendChild(div_container);
    let chat_container = document.querySelector("#chat > .container");
    chat_container.scrollTop = chat_container.scrollHeight;
}

let input = document.getElementById("message-field");

input.onkeypress = function (event) {
    if(event.which === 13) {
        let message = this.value;
        addMessage(message);
        this.value = "";
        this.blur();
    } else {
        if(this.value.length >= 70) return false;
    }
};
container.onmouseover = function(){
	let chat = document.querySelector("#chat");
	chat.style.display = 'none';
};
container.onmouseout = function(){
	let chat = document.querySelector("#chat");
	chat.style.display = 'inline';
	let chat_container = document.querySelector("#chat .field-container");
	chat_container.style.bottom = '0%';
};
