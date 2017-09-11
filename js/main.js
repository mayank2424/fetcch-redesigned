
$(document).ready(function(){
// var myNav = document.getElementById('navbar');
// window.onscroll = function () { 
   
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//       }
//   });
 // });
//  $(document).on('scroll', function (e) {
//     $('.navbar').css('opacity', ($(document).scrollTop() / 500));
// });

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 300) {
        $(".navbar-default").css("background" , "white");
        $(".navbar-default").css("box-shadow" , "0 0  30px black");
        $(".navbar-default a").css("color" , "black");
      }

      else{
          $(".navbar-default").css("background" , "transparent");
          $(".navbar-default").css("box-shadow" , "0 0 0px");
          $(".navbar-default a").css("color" , "white"); 
      }
  })
})
 // $('body').scrollspy({target: "navbar-example", offset: 50});
 $('#bs-example-navbar-collapse-1 a').on('click', function(event){
 	if (this.hash !== "") {
 		event.preventDefault();
 		var hash= this.hash;

 	$('html,body').animate({
 		scrollTop: $(hash).offset().top
 	},1800, function(){

 		window.location.hash=hash;
 	 });
    }
  });


});

$(window).scroll(function() {
    if ($(this).scrollTop() >= 30) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});
