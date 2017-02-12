'use strict'

function ajax (ajaxOptions){

    //parametry polaczenia i jego typu
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function() {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function() {},
        dataType: ajaxOptions.dataType || "text"
    };
    
    //funkcj sprawdzajaca czy polaczenie sie udalo?
    function httpSuccess(httpRequest){
        try{
            return(httpRequest.status>=200 && httpRequest.status<300||
                  httpRequest.status == 304 ||
                  navigator.userAgent.indexOf("Safari")>=0 && typeof httpRequest.status== "undefined");
        }catch (e){
            return false;
        }
    }
    
    
    //utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    //otwarcie polaczenia
    httpReq.open(options.type, options.url, true);
    
    //jesli stan dokumentu zostal zmieniony -> httpReq.readyState
    //0: polaczenie nie nawiazane
    //1:polaczenie nawiazane
    //2:zadanie odebrane
    //3:przetwarzanie
    //4:dane zwrocone i gotowe do uzycia
    httpReq.onreadystatechange = function() {
        
        //jesli 4: dane zwrocone i gotowe do uzycia
        if(httpReq.readyState==4){
            
            //sprawdz status polaczenia
            if(httpSuccess(httpReq)){
                
                //jesli dane w formacie XML to zwroc obiekt returnXML, w przeciwnym wypadku responseText (Json to tekst)
                var returnData = (options.dataType=="xml")? httpReq.responseXML : httpReq.responseText;
                
                //jesli wszystko ok
                options.onSuccess(returnData);
                //console.log(returnData);
                
                //zeruj obiekt, aby nie utrzymywac nie potrzebnego juz polaczenia z serwerem
                httpReq = null;
                
                }else {
                //w przypadku bledu
                options.onError(httpReq.statusText);
            }
        }
    }
    
    httpReq.send();
    
}

function pobierzDane(event){
    event.preventDefault();
    //console.log("dziala");
    
    ajax({
        type: "GET",
        url:
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        onError: function (msg){
            console.log(msg);
        },
        onSuccess:function(response){
            
            console.log("polaczenie dziala i dane sa pobierane");
/*            var jsonObj = JSON.parse(response);
            console.log(jsonObj);
            
            var pUserId = document.createElement('p');
            var pUserName = document.createElement('p');
            var pUserURL = document.createElement('p');
            
            pUserId.innerHTML = "User ID: " + jsonObj.userId;
            pUserName.innerHTML= "User Name: " + jsonObj.userName;
            pUserURL.innerHTML = "User URL: http://" + jsonObj.userURL + "<br>--------";
            
            document.body.appendChild(pUserId);
            document.body.appendChild(pUserName);
            document.body.appendChild(pUserURL);*/
            
            
            
        }
    })
    
    
}