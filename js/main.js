jQuery(function ($) {
  console.log("Jquery Running");
  var options = {
      $menu: false,
      menuSelector: 'a',
      panelSelector: '> section',
      namespace: '.panelSnap',
      onSnapStart: function(){},
      onSnapFinish: function(){},
      onActivate: function(){},
      directionThreshold: 50,
      slideSpeed: 200,
      easing: 'cubic-bezier',
      offset: 0,
      navigation: {
        keys: {
          nextKey: false,
          prevKey: false,
        },
        buttons: {
          $nextButton: false,
          $prevButton: false,
        },
        wrapAround: false
      }
    };
  // Basic demo
  $('body').panelSnap();
});
