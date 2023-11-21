(function ($) {
  console.log('test');

  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    $('.content-region').hide();
  console.log('omg');
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    console.log('region successful' + region);
    
    // Now show the region specified in the URL hash
    $(region).show();
    
               
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 
  });
  
})(jQuery);



function myFunction(){
  console.log('CLICKED');
    var pyke = location.hash.toString();
    console.log(pyke);
    var bkimg = pyke.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    console.log(bkimg);

    if(bkimg == "mirage"){

      document.body.style.backgroundImage = "url('mirage.jpg')";
      console.log("hihihi");
    } else if (bkimg == "soraka"){

      document.body.style.backgroundImage = "url('soraka.jpg')";
      console.log("goodbye");
    } else if (bkimg == "bidoof"){

      document.body.style.backgroundImage = "url('bidoof.jpg')";
      console.log("bibarel");
    } else {

      document.body.style.backgroundColor = 'grey';
      console.log("huhhuh");
    };
};

setInterval(myFunction, 100);
document.getElementById("menubut").addEventListener("click", myFunction);  
document.getElementById("menubut1").addEventListener("click", myFunction);  
document.getElementById("menubut2").addEventListener("click", myFunction);  
document.getElementById("menubut3").addEventListener("click", myFunction);  
document.getElementById("menubut4").addEventListener("click", myFunction);  
  (jQuery);
