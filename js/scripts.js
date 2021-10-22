$(document).ready(function() {
  $('form#language').submit(function(event) {
    event.preventDefault();
    $('#csharp').hide();
    $('#python').hide();
    $('#swift').hide();
    $('#java').hide();
    const firstQuestion= $("input:radio[name=prefer1]:checked").val();
    const secondQuestion= $("input:radio[name=prefer2]:checked").val();
    const thirdQuestion= $("input:radio[name=prefer3]:checked").val();
    const fourthQuestion= $("input:radio[name=prefer4]:checked").val();
    const fifthQuestion= $("input:radio[name=prefer5]:checked").val();
    

    if (thirdQuestion === "traditional" && (fourthQuestion === "webdev")) {
      $('#csharp').show(); 
    } else if (thirdQuestion === "startup" && (fourthQuestion === "webdev")) {
      $('#python').show();
    } else if (fourthQuestion === "mobile" && (fifthQuestion=== "ios")){
      $('#swift').show();
    } 
      else {
      $('#java').show();
  }
    

  }); 
});


