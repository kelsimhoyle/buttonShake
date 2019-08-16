 function shakeButton() {
    setTimeout(function() {
        $(".add-to-cart").addClass("shake");
      start();
      // Shakes every 10 seconds
    }, 5000);
}

shakeButton();