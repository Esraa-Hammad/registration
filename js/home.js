var input=document.getElementById("SMART-LOGIN");
var val=document.getElementById("user");
val.innerHTML="Welcom"+" "+localStorage.getItem("username");
input.innerHTML=localStorage.getItem("username");
val.style.color="#17A2B8";
function logout () {
   
    localStorage.removeItem('user');
     window.location.href="home.html";
    console.log(localStorage.getItem("username"))
  }
