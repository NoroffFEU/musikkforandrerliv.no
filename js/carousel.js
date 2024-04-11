let slides = document.getElementsByClassName("mySlides");
let slideIndex = Math.ceil(slides.length /2)

showSlides(slideIndex); 

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.height = "250px";
        slides[i].childNodes[1].style.height = "250px";

    }
    slides[slideIndex-1].style.height = "300px";
    slides[slideIndex-1].childNodes[1].style.height = "300px";
}