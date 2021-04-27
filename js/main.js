
var nameinput=document.getElementById("name");
var emailinput=document.getElementById("email");
var passwordinput=document.getElementById("password");
var _confirm=document.getElementById("confirm");
var Invaildname=document.getElementById("Invaild");
Invaildname.style.display="none";
var passvaild=document.getElementById("pass-Invaild");
passvaild.style.display="none";
var emailvaild=document.getElementById("email-vaild");
emailvaild.style.display="none";
var conMas1=document.getElementById("m-ass1");
// var  camera=document.getElementById("i-con");
// var imginput=document.getElementById("image");
var openeye=document.getElementById("icon-open");
openeye.style.display="none";
var message=document.getElementById("mess");
message.style.display="none";
var closeeye=document.getElementById("icon-close");

var users=[];
var username="";
var btnadd=document.getElementById("ADD");
if((JSON.parse(localStorage.getItem("users")))!=null){
    users=JSON.parse(localStorage.getItem("users"));
    
  }
btnadd.onclick=function(){
    if(nameinput.value=="" || emailinput.value=="" || passwordinput.value==""){
      message.style.display="block";
     
    }
else{ adduser();
  
}
}
function adduser(){
   var user={
      //  image:imginput.value,
       name:nameinput.value,
       email:emailinput.value,
       password:passwordinput.value,
   }
  
  if(check()==true){
    alert("Failed\nThis email is aleady exist\nPlease try agin") 
  }
  else{
  users.push(user);
  localStorage.setItem("users",JSON.stringify(users));
    alert("hello"+nameinput.value)
    window.location.href="home.html";
      localStorage.setItem("username",nameinput.value)
  }
  
}
function check(){
  for(var i=0;i<users.length;i++){
    
    if( (users[i].email.includes(emailinput.value))){
     
     return true;
    }
   
  }
}

closeeye.onclick=function(){
if(passwordinput.type=="password"){
    passwordinput.type="text";
    openeye.style.display="block";
    closeeye.style.display="none";
}
}
openeye.onclick=function(){
    if(passwordinput.type=="text"){
        passwordinput.type="password";
        openeye.style.display="none";
    closeeye.style.display="block";
    }
}


nameinput.onblur=function(){
  var namerejex=/^[A-Z][a-z]{2,8}/
  if(!namerejex.test(nameinput.value)){
    Invaildname.style.display="block";  
  }
  else{ 
      Invaildname.style.display="none";  
  }
}
passwordinput.onkeyup=function(){
  var passrejex=/(?=.{8,})/
  if(!passrejex.test(passwordinput.value)){
    passvaild.style.display="block";  
  }
  else{ 
    passvaild.style.display="none";  
  }
}

emailinput.onblur=function(){
  var emailrejex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if(!emailrejex.test(emailinput.value)){
    emailvaild.style.display="block";  
  }
  else{ 
    emailvaild.style.display="none";  
  }
}


_confirm.onkeyup=function(){
  
   
    var pass=passwordinput.value;
    var con= _confirm.value;
    if(con!=pass){
      conMas1.style.color="red";
        conMas1.innerHTML="Confirm Not Match";      
    }
    else{
     
      conMas1.innerHTML="";  
    }

}


// window.addEventListener('load',function(){
//     document.querySelector('input[type="file"]').addEventListener('change',function(){
       
//       if(this.files && this.files[0]){
//           camera.style.display="none";
//         var img=document.querySelector('img');
//         img.onload= () => {
//           URL.revokeObjectURL(img.src);

//         }
       
//         img.src=URL.createObjectURL(this.files[0])
//       }
     
     
//     });
//   });



  