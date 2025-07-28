$(document).ready(function(){
  $.ajax({url: "/txt/footertext.txt", success: function(info){
    $("footer").load("../txt/footertext.txt");
  }});
});