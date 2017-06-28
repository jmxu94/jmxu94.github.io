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

    $(this).css({"opacity": "1", "filter": "drop-shadow(1px 1px pink)"});

    var ecNum = $('.event-container img').index(this);

    $('#ec' + ecNum).css("display", "unset");
  });

  $('.project-thumbnail').on('click', 'img', function() {
    $('.project-thumbnail img').attr('style','');
    $('.project-lightbox').fadeIn(300);
    $('.lightbox-content').css('display','none');


    $(this).css({"opacity": "1", "filter": "drop-shadow(2px 2px pink)"});

    var projectNum = $('.project-container img').index(this);

    $('#project' + projectNum).css("display", "unset");
  });

  $('.exit').on('click', function() {
    $('.project-lightbox').fadeOut(300);
  })

})
