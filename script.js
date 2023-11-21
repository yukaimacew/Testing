(function ($) {
  

  $(window).on('load hashchange', function(){
    
    // First hide all content regions, then show the content-region specified in the URL hash 
    $('.content-region').hide();
  
    
    // Remove any active classes on the main-menu
    $('.main-menu a').removeClass('active');
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    var leaking = region.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    console.log(leaking + " undertale");

    
    // Now show the region specified in the URL hash
    $(region).show();
    
               
    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 
  });
  
})
document.getElementById("home").addEventListener("click", myFunction);  
document.getElementById("mirageBut").addEventListener("click", myFunction);  
document.getElementById("sorakaBut").addEventListener("click", myFunction);  
document.getElementById("bidoofBut").addEventListener("click", myFunction);  

function myFunction(){
  console.log('CLICKED');
    document.body.style.backgroundImage = 'none';
    var region = location.hash.toString() || $('.main-menu a:first').attr('href');
    var bkimg = region.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
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
      document.body.style.backgroundImage = 'none';
      console.log("huhhuh");
    }
}

  (jQuery);
