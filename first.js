const header = document.querySelector("header");

window.classList.toggle("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});