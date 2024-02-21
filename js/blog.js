// Klasörün URL'si
var folderUrl = "siteadi.com.tr/blog/";

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

    // Fetch API kullanarak içerik alma
    Promise.all(randomFiles.map(url =>
      fetch(url).then(response => {
        if (!response.ok) {
          throw new Error('Yazı yüklenirken bir hata oluştu: ' + response.status);
        }
        return response.text();
      })
    ))
    .then(dataArray => {
      // Veriyi kullan
      dataArray.forEach((data, index) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(data, 'text/html');

        // Başlık al
        var postTitle = doc.querySelector('title').innerText;

        // Açıklama al (meta etiketi içindeki description)
        var postDescription = doc.querySelector('meta[name="description"]').content;

        // Resim al (meta etiketi içindeki og:image)
        var postImage = doc.querySelector('meta[property="og:image"]').content;

        // Yazı içeriğini oluştur
        var postHTML = "<div class='blog-post'>";
        postHTML += "<h2>" + postTitle + "</h2>";
        postHTML += "<p>" + postDescription + "</p>";
        postHTML += "<img src='" + postImage + "' alt='" + postTitle + "'>";
        postHTML += "</div>";

        // Yazı içeriğini sayfaya ekleyin
        var blogPostsContainer = document.getElementById("blog-posts");
        blogPostsContainer.innerHTML += postHTML;
      });
    })
    .catch(error => {
      console.error('Yazı yüklenirken bir hata oluştu:', error);
    });
  })
  .catch(error => {
    console.error('Klasör yüklenirken bir hata oluştu:', error);
  });
