// Blog klasörü URL'si
var blogFolderUrl = "https://yazilimteknisyeni.com.tr/blog/";

// Fetch API kullanarak blog klasöründeki içerikleri alma
fetch(blogFolderUrl)
  .then(response => {
    // HTTP durum kodunu kontrol et
    if (!response.ok) {
      throw new Error('Blog klasörü yüklenirken bir hata oluştu: ' + response.status);
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
    while (randomFiles.length < 4 && htmlFiles.length > 0) {
      var randomIndex = Math.floor(Math.random() * htmlFiles.length);
      var randomFile = htmlFiles.splice(randomIndex, 1)[0];
      randomFiles.push(randomFile);
    }

    // Seçilen dosyaların linklerini sayfaya ekleyin
    var blogPostsContainer = document.getElementById("blog-posts");
    randomFiles.forEach(url => {
      var linkElement = document.createElement('a');
      linkElement.href = url;
      linkElement.textContent = url; // Link metni olarak URL'i kullandık, isteğinize göre değiştirebilirsiniz
      blogPostsContainer.appendChild(linkElement);
      blogPostsContainer.appendChild(document.createElement('br'));
    });
  })
  .catch(error => {
    console.error('Blog klasörü yüklenirken bir hata oluştu:', error);
  });
