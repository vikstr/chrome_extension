var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function(){
    alert(xhr.responseText);
};
xhr.send(null);