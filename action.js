$(document).ready(function(){

  function togStuff(){
    $("#cardHolder").on("click", ".contactCardsFRONT", function(){
      $(this).children('.front').toggle();
      $(this).children('.back').toggle();
    });
  }
  togStuff();
//input information move to card
 $("#btn").click (function(event) {
   event.preventDefault();

   var user = {};
   user.fname = $("#fName").val();
   user.lname = $("#lName").val();
   user.contact = $("#contactInfo").val();
   user.fact = $("#factText").val();

   $("#cardHolder").append( "<div class='contactCardsFRONT'><p class='front'>" +
   user.fname + " " + user.lname + "</p><p class='front'>" +  user.contact + "</p><p class='back'>" +  user.fact + "</p></div>");

   $("#fName, #lName, #contactInfo, #factText").val('');

 });


});
