$(document).ready(function() {
  $("#form-1 form").submit(function(event) {

  var first = $("#input1").val();
  var second = $("#input2").val();
  var third = $("#input3").val();
  var forth = $("#input4").val();

  var array1 = [first, second, third, forth];
  var array2 = [second,' '+ first,' '+ third,' '+ forth+'.'];

  $("#array1").text(array1);
  $("#array2").text(array2);
  $("ul").show();

  event.preventDefault();
  });
});
