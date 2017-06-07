$(document).ready(function() {

  $(window).on('hashchange', function() {
     $("#nav a").each(function() {   
        if (this.href == window.location.href) {
            $("#nav a").removeClass("icon-active");
            $(this).addClass("icon-active");
        }
    });
  });

  $('.event-content').first().css("display", "unset");

  $('.event-container').on('click', 'img', function() {
    $('.event-content').css("display", "none");
    var ecNum = $('.event-container img').index(this);

    $('#ec' + ecNum).css("display", "unset");
  });

})

