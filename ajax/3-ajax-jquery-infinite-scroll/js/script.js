'use strict';
// jesli dokument zaladowany
$(document).ready(function(){
   

    
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log("bottom!");
           
            
           
            $.getJSON('https://jsonplaceholder.typicode.com/users',function (dataJSON){
            //console.log(dataJSON); 
                var poczatek=document.createElement('p');
                poczatek.innerHTML="<br><br><br><br>---------------Start---------------<br><br>";
                document.body.appendChild(poczatek);
                
                for(var i=0; i<dataJSON.length; i++){
                   console.log(dataJSON[i].id);
                   
                   var pUserId=document.createElement('p');
                   var pUserName=document.createElement('p');
                   var pUserWebsite=document.createElement('p');
                   //var odstep=document.createElement('p');
                   
                   pUserId.innerHTML="User ID: "+dataJSON[i].id;
                   pUserName.innerHTML="User Name: "+dataJSON[i].name;
                   pUserWebsite.innerHTML="User URL: "+dataJSON[i].website+"<br>--------";
                   //odstep.innerHTML="--------";
                   
                   document.body.appendChild(pUserId);
                   document.body.appendChild(pUserName);
                   document.body.appendChild(pUserWebsite);
                   //document.body.appendChild(odstep);
                   
                   
               }
                
                var koniec=document.createElement('p');
                koniec.innerHTML="<br><br><br><br>-------------Koniec--------------<br><br>";
                document.body.appendChild(koniec);
                //console.log(field[i].id);
                
        
            
        
           
            });
           
           
       }
    });
    
    
    
   

  
    
    
    
});