/* Custom JavaScript */

jQuery(document).ready(function(){

/* Support for multiple logo images (Could also be done with Media Query) */


  //switch logo when browser resized  
  function imageresize() {
    var max = 992;//button shows at less than 992 px
    var wi = $(window).width(); 
    if (wi < max) {            
      $('.kr-logo').attr('src','assets/images/logo-small.png');
    } else {
      $('.kr-logo').attr('src','assets/images/logo.png');
    }
  }

  imageresize();//trigger when document first loads    

  $(window).bind("resize", function(){
    imageresize();
  });

  //animate nav menu on item click
   $(function(){ 
     var navMain = $("#kr-menu");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });

}); //End jQuery
