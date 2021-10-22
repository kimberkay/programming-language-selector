$(document).ready(function() {
  const  = parseInt(prompt("How old are you?"));

  if ( >= 21) {
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});
