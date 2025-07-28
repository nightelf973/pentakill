window.onload = reveal();
function reveal(){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      document.getElementById("aboutextra").innerHTML = this.responseText;
    }
  };
  request.open("GET", "../txt/reveal.txt", true);
  request.send();
}

$(document).ready(function(){
  $("#about").hover(function(){
    $(this).css("background", "rgba(0,0,0,0.95)");
    }, function(){
    $(this).css("background", "rgba(0,0,0,0)");
  });
});