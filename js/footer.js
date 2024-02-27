Promise.all([
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/aos/aos.js'),
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/swiper/swiper-bundle.min.js'),
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/glightbox/js/glightbox.min.js'),
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/purecounter/purecounter_vanilla.js'),
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/isotope-layout/isotope.pkgd.min.js'),
    loadScript('https://yazilimteknisyeni.com.tr/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
]).then(() => {
    console.log('Tüm JavaScript dosyaları başarıyla yüklendi.');
}).catch(error => {
    console.error('Hata oluştu:', error);
});

