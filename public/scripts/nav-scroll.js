let nav = document.getElementsByTagName('nav')[0];

// Menambahkan event listener untuk mengontrol efek scroll
window.addEventListener("scroll", function () {
    // Memeriksa apakah halaman telah di-scroll hingga 100px atau lebih dari atas
    if (window.pageYOffset >= 100) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    }
});

