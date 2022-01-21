$(document).ready(function() {
  $('.submit-btn').on('click', function(){
      $('.submit-btn').hide();
      $('.otp-field').slideDown("slow").animate({opacity:1});
  })
});
