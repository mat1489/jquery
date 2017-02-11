jQuery(document).ready(function(){
  'use strict'  
    
    //wybieranie elementu z kolekcji za pomoca metody eq()
    $('body').find('p').eq(1).css({'color': 'green'});
    
    //petla each dodajaca do paragrafow klase z kolejnym numerem
    $('p').each(function(index){
       $(this).addClass('paragraf-' + index); 
        console.log(jQuery(this));
        
    });
    
    
    //pojedyncze zdarzenie na paragrafie
    $('p').click(function(){
       $(this).css("color", "orange"); 
    });
  
});

