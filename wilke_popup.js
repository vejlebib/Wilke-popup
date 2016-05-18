(function($) {

  Drupal.behaviors.wilkePopup = {
      attach: function(context, settings) {
        // Only show the popup if it hasn't been shown in this user agent.
        if ($.cookie('wilke_popup_shown') === undefined) {
          var wilke_popup = $("#wilke-popup", context);
          if (wilke_popup.length > 0) {
            $("#wilke-popup")[0].click();
            $.cookie('wilke_popup_shown', 1, {"expires": 60});
          }
        }
    }
  };

}(jQuery));
