function ShowTime(){
        var strgreet = "";
        var datetime = new Date();   
        var hour = datetime.getHours(); 
        var minu = datetime.getMinutes(); 
        var seco = datetime.getSeconds(); 
        strtime =hour+":"+minu+":"+seco+" ";  
        if(hour >= 0  && hour < 5){
          strgreet ="Good Morning, ";
        }
        if(hour >= 5  && hour < 8){
          strgreet ="Good Morning, ";
        }
        if(hour >= 8  && hour < 13){ 
          strgreet ="Good Day, ";
        }

        if(hour >= 13  && hour < 17){ 
          strgreet ="Good Afternoon, ";
        }
        if(hour >= 17  && hour < 21){
          strgreet ="Good Evening, ";
        }
        if(hour >= 21  && hour < 24){
          strgreet ="Good Night, ";
        }

        window.setTimeout("ShowTime()",1000); 
        document.getElementById("greet").innerText=strgreet;
      }
      window.οnlοad=ShowTime();