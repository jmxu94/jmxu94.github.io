$(window).on('hashchange', function() {
   $("#nav a").each(function() {   
      if (this.href == window.location.href) {
          $("#nav a").removeClass("icon-active");
          $(this).addClass("icon-active");
      }
  });
});
