var loginemail=document.getElementById("loginemail");
var loginpsaa=document.getElementById("loginpassword");
var btnlogin=document.getElementById("btnlogin");
var loginmess=document.getElementById("logmess");
loginmess.style.display="none";
var loginopen=document.getElementById("login-open");
loginopen.style.display="none";
var loginclose=document.getElementById("login-close");
var namevalue="";
var users=[];
loginclose.onclick=function(){
    if(loginpsaa.type=="password"){
        loginpsaa.type="text";
        loginopen.style.display="block";
        loginclose.style.display="none";
    }
    }
    loginopen.onclick=function(){
        if(loginpsaa.type=="text"){
            loginpsaa.type="password";
            loginopen.style.display="none";
        loginclose.style.display="block";
        }
    }

  

   btnlogin.onclick=function(){
    if(loginemail.value=="" || loginpsaa.value==""){
     
        loginmess.style.display="block";
        loginmess.innerHTML="All inputs is required";
      }
   else{
    if((JSON.parse(localStorage.getItem("users")))!=null){
        var users=JSON.parse(localStorage.getItem("users"));
        
        for(var i=0;i<users.length;i++){
            if(loginemail.value==users[i].email && loginpsaa.value==users[i].password)
          {      
           namevalue=users[i].name;           
           localStorage.setItem("username",users[i].name)
           window.location.href="home.html";   
         }
        }
        for(var i=0;i<users.length;i++){
            if(!(loginemail.value==users[i].email && loginpsaa.value==users[i].password)){
            loginmess.style.display="block";
            loginmess.innerHTML="Invaild Email";
        }
        
        }
      
    }
    
   }
   }
  

 