jQuery(document).ready(function(){
  'use strict'      

    //pojedyncze zdarzenie na paragrafie
    $('p').click(function(){
       $(this).css({"color": "orange", "background-color": "blue"}); 
    });
    
    
    //grupa zdarzen na naglowku
    $('h1').on({
       'click': function () {
           $(this).css("color", "orange");
       },
        'mouseleave' : function () {
            $(this).css("color","inherit");
        }
        
    });
    
    
  
});

