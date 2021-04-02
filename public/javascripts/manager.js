// window.onload = document.getElementById("nav").style.height = document.getElementById("main").offsetHeight + "px";
      // document.getElementById("main").style.height = document.getElementById("wrap").offsetHeight + "px";
      //greetings
      function Greetings(){
        var datetime = new Date();   
        var hour = datetime.getHours(); 
        var min = datetime.getMinutes(); 
        var sec = datetime.getSeconds(); 
        var strgreet = "";
        strtime = hour + ":" + min + ":" + sec + " ";  
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
      window.οnlοad=Greetings();

      //show time

      //if digits are now 2, add a zero before the digit
      function fix(num, length) {
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
      }
      //show time
      function ShowTime(){
        var date = new Date().toDateString();
        var datetime2 = new Date();   
        var hour2 = datetime2.getHours(); 
        var min2 = datetime2.getMinutes(); 
        var sec2 = datetime2.getSeconds(); 
        var strtime = fix(hour2,2)+":"+fix(min2,2)+":"+fix(sec2,2)+"  "+date;
        document.getElementById("time").innerHTML="It's "+strtime+" now";
        document.getElementById("time2").innerHTML="Posted on "+strtime;
        window.setTimeout("ShowTime()",1000);
      }

      window.οnlοad=ShowTime(); 



        //window open&close
        var tasksPage2 = document.getElementById("tasksPage");  
        var stuPage2 = document.getElementById("stuPage");  
        var gruPage2 = document.getElementById("gruPage"); 
        var annPage2 = document.getElementById("annPage"); 

      

        function displayDash(){ 
                  if(tasksPage2.style.display == "none"){  
                      tasksPage2.style.display = "";
                      stuPage2.style.display = "none";
                      gruPage2.style.display = "none";
                      annPage2.style.display = "none";
                    }
                 }
             

        function displayAllT(){ 
                if(stuPage2.style.display == "none"){  
                    stuPage2.style.display = "";
                    tasksPage2.style.display = "none";
                    gruPage2.style.display = "none";
                    annPage2.style.display = "none";
                  }
               }
             
        function displayIn(){ 
                if(gruPage2.style.display == "none"){  
                    gruPage2.style.display = "";
                    tasksPage2.style.display = "none";
                    stuPage2.style.display = "none";
                    annPage2.style.display = "none";
                  }
               }

        function displayAnn(){ 
                if(annPage2.style.display = "none"){  
                    annPage2.style.display = "";
                    gruPage2.style.display = "none";
                    tasksPage2.style.display = "none";
                    stuPage2.style.display = "none";
                  }
               }

        //colorchange for tasks
        function colorChangeDash(){
                if (tasksPage2.style.display == ""){   
                  document.getElementById("ccd").className = "sidenavBActive";
                  document.getElementById("cca").className = "sidenavB";
                  document.getElementById("cci").className = "sidenavB";
                  document.getElementById("ccan").className = "sidenavB";
                }   
            }

        window.οnlοad=colorChangeDash();

        //colorchange for students
        function colorChangeAllT(){
                if (stuPage2.style.display == ""){ 
                  document.getElementById("ccd").className = "sidenavB";
                  document.getElementById("cca").className = "sidenavBActive";
                  document.getElementById("cci").className = "sidenavB";   
                  document.getElementById("ccan").className = "sidenavB";
            }
          }

        //colorchange for groups
        function colorChangeIn(){
                if (gruPage2.style.display == ""){   
                  document.getElementById("ccd").className = "sidenavB";
                  document.getElementById("cca").className = "sidenavB";
                  document.getElementById("ccan").className = "sidenavB";
                  document.getElementById("cci").className = "sidenavBActive";   
            }
          }

        //colorchange for annoucements
        function colorChangeAnn(){
                if (annPage2.style.display == ""){   
                  document.getElementById("ccd").className = "sidenavB";
                  document.getElementById("cca").className = "sidenavB";
                  document.getElementById("cci").className = "sidenavB";   
                  document.getElementById("ccan").className = "sidenavBActive";   
            }
          }

        //change directory title
        function changeDirTitle (){
                 if (tasksPage2.style.display == ""){
                    document.getElementById("dir").innerText = "Tasks";
                 }else if(stuPage2.style.display == ""){
                    document.getElementById("dir").innerText = "Users";
                 }else if(gruPage2.style.display == ""){
                    document.getElementById("dir").innerText = "Groups";
                 }else if(annPage2.style.display == ""){
                    document.getElementById("dir").innerText = "Announcements";
               }
             }

         window.οnlοad=changeDirTitle();

        



        //display & disappear assign page


        function disappearAssign() {
          if (document.getElementById("modal1").style.display == "") {
            document.getElementById("modal1").style.display = "none";
          }else{
            document.getElementById("modal1").style.display = "";
          }
        }

        //display & disappear post page

        function disappearPost() {
          if (document.getElementById("modal2").style.display == "") {
            document.getElementById("modal2").style.display = "none";
          }else{
            document.getElementById("modal2").style.display = "";
          }
        }



        //create task

        function addTask() {
            var title = document.getElementById("taskTitleID").value;
            var content = document.getElementById("taskInfoID").value;

            // var hrs = document.getElementById("taskDueID").value.getHours();
            // var mins = document.getElementById("taskDueID").value.getMinutes();
            // var secs = document.getElementById("taskDueID").value.getSeconds();

            var DueDate = document.getElementById("taskDueID").value;
            var addTaskRequest = new XMLHttpRequest();

                addTaskRequest.onreadystatechange = function() {
                    if (addTaskRequest.readyState == 4) {
                        if (addTaskRequest.status == 200) {
                            console.log("Successfully Added");
                        }
                        if (addTaskRequest.status == 404) {
                            console.log('404 Not Found');
                        }
                    }
                };

            addTaskRequest.open('POST', "/users/addTask", true);
            addTaskRequest.setRequestHeader("Content-type", "application/json");
            addTaskRequest.send(JSON.stringify({ "title": title, "DueDate": DueDate, "content": content }));
        }


        //append tasks
        function appendTasks(task) {
            var Div = document.createElement("div");
            var Ti = document.createElement("p");
            var Due = document.createElement("p")
            var Con = document.createElement("p");

            Div.className = 'eachTask';
            Ti.className = 'eTaskName';
            Due.className = 'eTaskDue';
            Con.className = 'eTaskInfo';

            Div.appendChild(Ti);
            Div.appendChild(Due);
            Div.appendChild(Con);
            Ti.innerText = task.title;
            Due.innerText = task.DueDate;
            Con.innerText = task.content;
            document.getElementById('AllCreatedTasksID').appendChild(Div);
        }

        //get tasks
        function getTasks() {
            var getTasksRequest = new XMLHttpRequest();
            var Class = document.getElementsByClassName('eachTask');
            var AllCreatedTasksID = document.getElementById('AllCreatedTasksID');
            getTasksRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    while (Class.length > 0) {
                        AllCreatedTasksID.removeChild(Class[0]);
                    }
                    var Tasks = JSON.parse(getTasksRequest.responseText);
                    for (var i = 0; i < 5; i++) {
                        appendTasks(Tasks[i]);
                    }
                }
            };
            getTasksRequest.open("GET", "/users/getTasks", true);
            getTasksRequest.send();
        }

        window.οnlοad=getTasks();



        // Announcement Page
        // Announcement Page
        // Announcement Page
        // Announcement Page
        // Announcement Page
        //create task

        function addPost() {
            var ptitle = document.getElementById("postTitleID").value;
            var pcontent = document.getElementById("postInfoID").value;

            var date3 = new Date().toDateString();
            var datetime3 = new Date();   
            var hour3 = datetime3.getHours(); 
            var min3 = datetime3.getMinutes(); 
            var sec3 = datetime3.getSeconds(); 

            // var hrs = document.getElementById("taskDueID").value.getHours();
            // var mins = document.getElementById("taskDueID").value.getMinutes();
            // var secs = document.getElementById("taskDueID").value.getSeconds();

            var strtime2 = fix(hour3,2)+":"+fix(min3,2)+":"+fix(sec3,2)+"  "+date3;
            var postTime = "Posted on " + strtime2;
            var addPostRequest = new XMLHttpRequest();

                addPostRequest.onreadystatechange = function() {
                    if (addPostRequest.readyState == 4) {
                        if (addPostRequest.status == 200) {
                            console.log("Successfully Added");
                        }
                        if (addPostRequest.status == 404) {
                            console.log('404 Not Found');
                        }
                    }
                };

            addPostRequest.open('POST', "/users/addPost", true);
            addPostRequest.setRequestHeader("Content-type", "application/json");
            addPostRequest.send(JSON.stringify({ "ptitle": ptitle, "postTime": postTime, "pcontent": pcontent }));
        }


        //append tasks
        function appendPosts(post) {
            var Div2 = document.createElement("div");
            var Ti2 = document.createElement("p");
            var Time = document.createElement("p")
            var Con2 = document.createElement("p");

            Div2.className = 'eachPost';
            Ti2.className = 'ePostName';
            Time.className = 'ePostTime';
            Con2.className = 'ePostInfo';

            Div2.appendChild(Ti2);
            Div2.appendChild(Time);
            Div2.appendChild(Con2);
            Ti2.innerText = post.ptitle;
            Time.innerText = post.postTime;
            Con2.innerText = post.pcontent;
            document.getElementById('AllPostsID').appendChild(Div2);
        }

        //get tasks
        function getPosts() {
            var getPostsRequest = new XMLHttpRequest();
            var Class2 = document.getElementsByClassName('eachPost');
            var AllPostsID = document.getElementById('AllPostsID');
            getPostsRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    while (Class2.length > 0) {
                        AllPostsID.removeChild(Class2[0]);
                    }
                    var Posts = JSON.parse(getPostsRequest.responseText);
                    for (var i = 0; i < 5; i++) {
                        appendPosts(Posts[i]);
                    }
                }
            };
            getPostsRequest.open("GET", "/users/getPosts", true);
            getPostsRequest.send();
        }