const menu = document.querySelector(".icon-menu > img");
const nav = document.querySelector(".header nav");

menu.onclick =()=>{
    // nav.style.transform = "translateY(0)";
    if(nav.style.transform == "translateY(0)"){
        nav.style.transform = "none";
    }else{
        nav.style.transform = "translateY(0)"
    }
}