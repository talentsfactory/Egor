var title = document.getElementById('myTitle');
var modal = document.getElementById('myModal');
var button = document.getElementById('myButton')
var krestik = document.getElementById('myClose')
var content = document.getElementById('myContent')
button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100)
}

// myModalButton.onclick = function() 
//     alert('бомба отправлена!')

krestik.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none,1000)
}

function opacity1() {
    content.style.opacity = "1";
}

function none() {
    modal.style.display = "none"
}