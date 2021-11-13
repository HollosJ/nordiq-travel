//Custom cursor 
const cursor = document.getElementById("cursor");
const hoverables = document.querySelectorAll(".hoverable");

document.addEventListener("mousemove", e => {
    cursor.style.left = (e.clientX - 20) + "px";
    cursor.style.top = (e.clientY - 20) + "px";
});

//Add active class to cursor when hovering over chosen elements
hoverables.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });
    btn.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    })
});
