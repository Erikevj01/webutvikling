const menu = document.getElementById("main-menu");

const mobileMenu = () =>{
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}
