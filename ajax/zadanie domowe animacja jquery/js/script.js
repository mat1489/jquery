'use strict';
// jesli dokument zaladowany
$(document).ready(function(){
    $('input').click(function(){
       
        $( 'div' ).animate( { 'height': '100px',
                             'width' : '100px',
                             'margin-left' : '100px'
                            }, 3000);
                            
        $('div').animate({
                            'background-color' : 'blue'
                            },5000,dodanyTekst)
            
            
        function dodanyTekst(){
         $('div').html( "<h2>Gratulacje, animacja zakonczona</h2>" );
     }  
                           
        
       
        /*$('div')*/
    });
   

    
    
});