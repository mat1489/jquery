jQuery(document).ready(function(){
  'use strict'      
  var flaga= false;
  //efekt hide i show 
  $('p').css({"cursor": "pointer",
              "font-size": "25px"
              })
  $('p').click(function() 
               {
      
                      $('p').hide(5000, function()
                            { 

                                if(flaga==false){
                                console.log("zakonczono");
                                flaga=true;
                                }

                            }).show(3000);
    
                });
  
});


//efekt fadeout i fadein
//$('h1').fadeOut(3000).fadeIn(3000);


//efekt slideup slidedown

//$('h2').slideUp(3000).slideDown(3000);

//funkcja zwrotna animacji - tzw callback    ;jquery animate funkcja na necie
function animacja(){
    console.log("zakonczono pierwsza animacje. Zaraz startuje druga");
    $('h3').animate({'font-size': '3em', 'margin-left':'0px'},2000);
}


$('h3').css({"cursor": "pointer"}); 

//efekt animacji z funkcja zwrotna animacja
$('h3').click(function(){$('h3').animate({'font-size' : '3em', 'margin-left' : '100px'},2000, animacja);}
             );

