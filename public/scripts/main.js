const navbutton = document.querySelector(".nav-button");
const nav = document.querySelector(".nav");
let showNav = false;
navbutton.addEventListener("click", (event) => {
    if (!showNav) {
        nav.classList.remove("hidden"); 
        nav.classList.remove("navbar-animation-reverse")
        nav.classList.add("navbar-animation-forward");
        showNav = true;
    } else {
        nav.classList.add("navbar-animation-reverse");
        nav.classList.remove("navbar-animation-forward")
        setTimeout(() => {
            nav.classList.add("hidden");
            showNav = false;     
        }, 200);
    }
    event.preventDefault();
});