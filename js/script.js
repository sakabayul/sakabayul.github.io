var loadingScreen = document.getElementById("loading-screen");
var mainContent = document.getElementById("main-content");

// JavaScript untuk mengelola pemuatan konten
window.addEventListener('load', function () {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'block';
});