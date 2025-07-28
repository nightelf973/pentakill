var eventDate = '08/09/2021';
setInterval(function(){
  var t = Date.parse(new Date()) - Date.parse(eventDate);
  var days = Math.floor(t/(1000*60*60*24));
  var hours = Math.floor((t/(1000*60*60))%24);
  var minutes = Math.floor((t/(1000/60)%60));
  var seconds = Math.floor((t/1000)%60);
  var fulltime = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
  document.getElementById("clock").innerHTML = "Event expired";
},1000);