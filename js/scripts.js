$(document).ready(function() {
  const firstquestion = $("#mobile-web").val();

  if (firstquestion=== "web") {
    $("web-path").show();
  } else {
    $("mobile-path").show();
  }
}); 




