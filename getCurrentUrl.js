document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('life');
    checkPageButton.addEventListener('click', function() { 
        chrome.tabs.query({active:true},function(tabsArray) {
			var tab = tabsArray[0];
			var tabUrl = tab.url;
			console.log(tabUrl); 
        });
    },false);
},false);