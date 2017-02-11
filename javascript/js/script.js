'use strict';
var wyslij = document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault();
    
  
    
    var test = document.querySelectorAll('input');
    //console.log(test);
    for (var i=0; i<test.length; i++){
        if(test[i].type== 'text'){
            //console.log(test[i].value);
        }
    }
    
    var dzieciFormularza = document.getElementsByTagName('form')[0].childNodes;
//    console.log(dzieciFormularza);
    
    dzieciFormularza.forEach(function(element){
        
//        console.log(element.name);
        
        if(element.name=='imie'){
            console.log(element.value);
        }
        
        if(element.name=='nazwisko'){
            console.log(element.value);
        }
        
    })
    
    

});