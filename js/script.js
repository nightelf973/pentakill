function reveal(){
  var parentNode = document.createElement("a")
  parentNode.setAttribute("href", "https://pentakill.leagueoflegends.com/en_US/#s/band");
  parentNode.setAttribute("class", "newlink metal");
  var childNode = document.createTextNode("If you're really sure you can handle it, click here");
  parentNode.appendChild(childNode);
  document.getElementById("revealbut").appendChild(parentNode);
}
