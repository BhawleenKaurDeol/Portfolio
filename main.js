
const btn = document.querySelector(".btn-square");

btn.addEventListener("click",(e)=>{
    document.getElementById("mySidenav").style.width = "100%";
});

const btn1 = document.querySelector(".closebtn");
btn1.addEventListener("click",(e)=>{
    document.getElementById("mySidenav").style.width = "0";
})

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }