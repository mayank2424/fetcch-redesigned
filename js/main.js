
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
 $('body').scrollspy({target: "navbar-example", offset: 50});
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
 


	
