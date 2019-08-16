 function shakeButton() {
    setTimeout(function() {
        $(".add-to-cart").addClass("shake");
        shakeButton();
      // Shakes every 6 seconds
    }, 6000);
    setTimeout(function() {
        $(".add-to-cart").removeClass("shake");
        
    }, 1500)
}

shakeButton();