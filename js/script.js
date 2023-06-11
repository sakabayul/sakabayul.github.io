// Mendapatkan elemen yang akan diganti tema
// Mendapatkan referensi elemen-elemen yang terlibat
const htmlElement = document.querySelector('html');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
// Mendapatkan tema saat ini dari localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        updateThemeToggle(currentTheme);
    }
});
// Fungsi untuk memperbarui tampilan tombol tema sesuai dengan tema saat ini
function updateThemeToggle(theme) {
    if (theme === 'dark') {
        themeToggle.classList.add('on');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeToggle.classList.remove('on');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}
// Event listener saat tombol tema diklik
themeToggle.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-theme');
    // Toggle tema
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        updateThemeToggle('light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        updateThemeToggle('dark');
        localStorage.setItem('theme', 'dark');
    }
});



// Mendisable Button
function disable() {
    var link = document.getElementById("disable");
    link.removeAttribute("href"); // Menghapus atribut href
    return false; // Menghentikan navigasi ke URL yang ditentukan di href
}



// Memunculkan Button Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}



// Active
var menuItems = document.getElementsByClassName('menu-item');
// Tambahkan event listener pada setiap elemen menu
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function () {
        // Hapus kelas "active" dari semua tautan menu
        for (var j = 0; j < menuItems.length; j++) {
            menuItems[j].classList.remove('active');
        }

        // Tambahkan kelas "active" pada tautan menu yang sedang di-klik
        this.classList.add('active');
    });
}



// Saat navbar paling atas maka akan hilang
var header = document.querySelector('.hidden-navbar');
var threshold = header.offsetHeight; // Tinggi header

window.addEventListener('scroll', function () {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentPosition >= threshold) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
});



// fitur tombol share open and close
var shareModal = document.getElementById("shareModal");
// Fungsi untuk menutup modal
function closeModal() {
    shareModal.style.display = "none";
    document.body.classList.remove("modal-open");
}
// Mendaftarkan event listener pada elemen dokumen
document.addEventListener("click", function (event) {
    if (event.target === shareModal) {
        closeModal();
    }
});
// Fungsi untuk menampilkan atau menyembunyikan modal
function toggleShareModal() {
    if (shareModal.style.display === "block") {
        closeModal();
    } else {
        shareModal.style.display = "block";
        document.body.classList.add("modal-open");
    }
}

function openPopup(imageUrl) {
    // Kode untuk membuka gambar dalam popup
    // Gantikan dengan logika yang sesuai dengan kebutuhan Anda
}



document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close-btn')) {
        event.target.parentNode.style.display = 'none';
    }
});