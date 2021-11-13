//Navigation
const nav_toggle = document.getElementById("nav__toggle");
const nav_wrapper = document.getElementById("nav__wrapper");

nav_toggle.addEventListener("click", () => {
   nav_wrapper.classList.toggle("active");
})

//Close navbar when link clicked
const nav_btns = document.querySelectorAll(".nav__item");

nav_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        nav_wrapper.classList.remove("active")
    })
})

