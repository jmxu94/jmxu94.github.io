$(document).ready(function() {

  $(window).on('hashchange', function() {
     $("#nav a").each(function() {
        if (this.href == window.location.href) {
            $("#nav a").removeClass("icon-active");
            $(this).addClass("icon-active");
        }
    });
  });


  $('.event').on('click', 'img', function() {
    $('.beginning-text').css("display", "none");
    $('.event-content').css("display", "none");
    $('.event img').attr('style','');

    $(this).css("opacity", "1");
    var ecNum = $('.event-container img').index(this);

    $('#ec' + ecNum).css("display", "unset");
  });

})
