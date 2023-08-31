$(document).ready(function() {
    $(".nav-link").click(function() {
      const targetContent = $(this).attr("href");
      
      $(".content").hide();
      $(targetContent).show();
    });
  });
  
  
