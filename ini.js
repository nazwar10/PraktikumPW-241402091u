// Ambil semua slider-container dan semua gambar di dalamnya
const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(slider => {
    let slideIndex = 0;
    const slides = slider.querySelectorAll('.slide');
    const nextButton = slider.querySelector('.next');
    const prevButton = slider.querySelector('.prev');

    // Fungsi untuk menampilkan slide
    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0; // Kembali ke slide pertama
        } else if (n < 0) {
            slideIndex = slides.length - 1; // Pergi ke slide terakhir
        }

        slides.forEach(slide => {
            slide.classList.remove('active'); // Menyembunyikan semua slide
        });

        slides[slideIndex].classList.add('active'); // Menampilkan slide yang aktif
    }

    // Menampilkan slide pertama
    showSlides(slideIndex);

    // Mengatur event listener untuk tombol next dan prev
    nextButton.addEventListener('click', () => {
        slideIndex++;
        showSlides(slideIndex);
    });

    prevButton.addEventListener('click', () => {
        slideIndex--;
        showSlides(slideIndex);
    });
});

      