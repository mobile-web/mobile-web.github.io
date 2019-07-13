$(document).ready(function() {

   // Set year
   const date = new Date();
   $('#year').text(date.getFullYear());

   var i = 0;

   setInterval(function() {
      i++;
      if (i == 2) {
         $('#carousel').attr('src', 'images/monitor2.png');
         i = 0;
      } else {
         $('#carousel').attr('src', 'images/24.png');
      }
   }, 5000);

   $(window).scroll(function() {

      if ($(".navbar").offset().top > 50) {
         $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
         $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }

      var wScroll = $(this).scrollTop();

      animatedScroll('#features_row_one');
      animatedScroll('#features_row_two');
      animatedScroll('#features_row_three');
      animatedScroll('#features_row_four');
      animatedScroll('#features_row_five');
      animatedScroll('#features_row_six');
      animatedScroll('#features_row_seven');
      animatedScroll('#features_row_eight');
      animatedScroll('#features_row_nine');
      animatedScroll('#team');

      function animatedScroll(id) {
         if (wScroll > $(id).offset().top - ($(window).height() / 1.2)) {
            $(id + ' > div').each(function(i) {
                  setTimeout(function(){
                    $(id + ' > div').eq(i).addClass('slideup');
                  }, (500 * (Math.exp(i * 0.14))) - 500);
            }); // End of each function..
         } else {
            $(id + ' > div').each(function() {
               $(id + ' > div').removeClass('slideup');
            }); // End of each function..
         }
      }

   });
   //jQuery for page scrolling feature - requires jQuery Easing plugin
   $(function() {
      $('a.page-scroll').bind('click', function(event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
         }, 1500, 'easeInOutExpo');
         event.preventDefault();
      });
   });


   $('#download_button').click(function() {
      window.location.href = "https://play.google.com/store/apps/details?id=com.newmweb.llauderesv.mobileweb";
   }); // End of click function...

});
