  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../content/footer.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Footer alanından sonra başka klasördeki HTML dosyasını enjekte et
      document.querySelector('taban').insertAdjacentHTML('afterend', xhr.responseText);
    }
  };
  xhr.send();

var script1 = document.createElement('script');
script1.src = 'https://yazilimteknisyeni.com.tr/assets/js/main.js';
document.body.appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/aos/aos.js';
document.body.appendChild(script2);

var script3 = document.createElement('script');
script3.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/swiper/swiper-bundle.min.js';
document.body.appendChild(script3);

var script4 = document.createElement('script');
script4.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/glightbox/js/glightbox.min.js';
document.body.appendChild(script4);

var script5 = document.createElement('script');
script5.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/purecounter/purecounter_vanilla.js';
document.body.appendChild(script5);

var script6 = document.createElement('script');
script6.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/isotope-layout/isotope.pkgd.min.js';
document.body.appendChild(script6);

var script7 = document.createElement('script');
script7.src = 'https://yazilimteknisyeni.com.tr/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
document.body.appendChild(script7);

var script8 = document.createElement('script');
script8.src = 'https://www.w3counter.com/tracker.js?id=151587';
document.body.appendChild(script8);
