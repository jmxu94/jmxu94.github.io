$(document).ready(function(){
  $('.element').hover(
     function(){
       $(this).addClass('animated pulse');
       $(this).prev().addClass('animated tada');
     },
     function(){
       $(this).removeClass('animated pulse');
       $(this).prev().removeClass('animated tada');
     }
   )
});
