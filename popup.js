'use strict';

window.onload = function() {
	document.getElementById("field-file").onclick = function() {
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
	}
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
			  let photoDiv = document.querySelector('#friendDiv');
			  let profileImg = document.createElement('img');
              profileImg.src = 'https://62.img.avito.st/640x480/4097554062.jpg';
              photoDiv.appendChild(profileImg);
          });
		chrome.storage.sync.set({"token" : token}, function() {
			if (chrome.runtime.error) {
				console.log("Runtime error.");
			}
		});
	});
      
  });
};
