'use strict';

window.onload = function() {
	/*document.getElementById("field-file").onclick = function() {
		var d = document.getElementById("login-field").value;
		var img_ = document.getElementById("password-field").value;
		chrome.storage.sync.set({ "name" : d }, function() {
			if (chrome.runtime.error) {
				console.log("Runtime error.");
			}
		});
		chrome.storage.sync.set({ "image" : img_ }, function() {
			if (chrome.runtime.error) {
				console.log("Runtime error.");
			}
		});
	}*/
  document.querySelector("#log_in").addEventListener('click', function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      var init = {
        method: 'GET',
        async: true,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        'contentType': 'json'
      };
      fetch(
          'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=<API_Key_Here>',
          init)
          .then((response) => response.json())
          .then(function(data) {
			let xhr = new XMLHttpRequest();
			xhr.open("GET", "https://reqres.in/api/products/3", true);
			xhr.onload = function(){
				let photoDiv = document.querySelector('#friendDiv');
			};
			xhr.send(null);
			  
          });
		chrome.storage.sync.set({"token" : token}, function() {
			if (chrome.runtime.error) {
				console.log("Runtime error.");
			}
		});
	});
      
  });
  document.querySelector("#submit").addEventListener('click', function() {
	  let photoDiv = document.querySelector('#friendDiv');
			  let profileImg = document.createElement('img');
              profileImg.src = 'https://62.img.avito.st/640x480/4097554062.jpg';
			  profileImg.style.position = 'relative';
			  profileImg.style.display='inline-block';
			  profileImg.style.width='150px';
			  profileImg.style.height='150px';
			  profileImg.style.borderRadius = '50%';
			  profileImg.style.marginTop = '15px';
			  profileImg.style.left = '40px';
              photoDiv.appendChild(profileImg);
  });
};
