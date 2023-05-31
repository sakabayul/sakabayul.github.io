let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// Image Slider
var imageno =1;
displayimg(imageno);

function nextimg(n){
    displayimg(imageno += n)
}

function currentSlide(n){
    displayimg(imageno = n)
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image-skill");
    var dots = document.getElementsByClassName("dot");

    if(n > image.length){
        imageno = 1;
    }

    if(n < 1){
        imageno = image.length;
    }

    for(i=0; i < image.length; i++){
        image[i].style.display = "none";
    }

    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
};