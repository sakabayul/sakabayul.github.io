// Fungsi untuk slides gambar
var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    var buttons = document.getElementsByClassName("slide-number");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }

    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].style.backgroundColor = "rgba(250, 250, 250, 0.8)";
}

var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", function () {
    plusSlides(-1);
});

nextButton.addEventListener("click", function () {
    plusSlides(1);
});



// Fungsi untuk membuka popup gambar
var popup = document.getElementById("imagePopup");

function openPopup(imageSrc) {
    var popupImage = document.getElementById("popupImage");
    // Menghentikan animasi sebelumnya
    popup.classList.remove("fade-out");
    popupImage.src = imageSrc;
    popup.style.display = "block";
    // Memulai animasi fade-in dengan menggunakan setTimeout
    setTimeout(function () {
        popup.classList.add("fade-in");
    }, 10);
    document.body.classList.add("popup-open");
}

// Fungsi untuk menutup popup gambar
function closePopup() {
    // Menghentikan animasi sebelumnya
    popup.classList.remove("fade-in");
    // Memulai animasi fade-out dengan menggunakan setTimeout
    setTimeout(function () {
        popup.classList.add("fade-out");
    }, 10);
    // Menunggu animasi fade-out selesai sebelum menghilangkan popup
    setTimeout(function () {
        popup.style.display = "none";
    }, 300);
    document.body.classList.remove("popup-open");
}
// Mendaftarkan event listener pada elemen dokumen
document.addEventListener("click", function (event) {
    if (event.target === popup) {
        closePopup();
    }
});