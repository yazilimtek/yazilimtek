// Klasörün URL'si
var folderUrl = "https://yazilimteknisyeni.com.tr//blog/";

// Fetch API kullanarak içerik alma
fetch(folderUrl)
  .then(response => {
    // HTTP durum kodunu kontrol et
    if (!response.ok) {
      throw new Error('Klasör yüklenirken bir hata oluştu: ' + response.status);
    }
    // Metni al ve döndür
    return response.text();
  })
  .then(data => {
    // Veriyi kullan
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, 'text/html');

    // Tüm linkleri al
    var links = Array.from(doc.querySelectorAll('a')).map(a => a.href);

    // HTML dosyalarını filtrele
    var htmlFiles = links.filter(link => link.toLowerCase().endsWith('.html'));

    // Rastgele 4 dosya seç
    var randomFiles = [];
    while (randomFiles.length < 4) {
      var randomIndex = Math.floor(Math.random() * htmlFiles.length);
      var randomFile = htmlFiles[randomIndex];
      if (!randomFiles.includes(randomFile)) {
        randomFiles.push(randomFile);
      }
    }

    // Seçilen dosyaların linklerini sayfaya ekleyin
    var blogLinksContainer = document.getElementById("blog-links");
    randomFiles.forEach((url, index) => {
      var linkElement = document.createElement('a');
      linkElement.href = url;
      linkElement.textContent = "Yazı " + (index + 1);
      blogLinksContainer.appendChild(linkElement);
      blogLinksContainer.appendChild(document.createElement('br'));
    });
  })
  .catch(error => {
    console.error('Klasör yüklenirken bir hata oluştu:', error);
  });
