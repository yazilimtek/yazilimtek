// Rastgele 4 blog yazısı almak için bir dizi oluştur
var blogPosts = [];

// Blog klasöründeki yazıların listesini al
fetch('https://yazilimteknisyeni.com.tr/blog/')
  .then(response => response.text())
  .then(data => {
    // HTML içeriğini ayrıştır
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, 'text/html');

    // Tüm linkleri al
    var links = Array.from(doc.querySelectorAll('a')).map(a => a.href);

    // Sadece .html uzantılı olanları filtrele
    var htmlFiles = links.filter(link => link.toLowerCase().endsWith('.html'));

    // Rastgele 4 yazı seç
    while (blogPosts.length < 4) {
      var randomIndex = Math.floor(Math.random() * htmlFiles.length);
      var randomPost = htmlFiles[randomIndex];
      if (!blogPosts.includes(randomPost)) {
        blogPosts.push(randomPost);
      }
    }

    // Seçilen yazıları anasayfada göster
    var blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
      var linkElement = document.createElement('a');
      linkElement.href = post;
      linkElement.textContent = post; // Link metni olarak URL'yi gösterir, istediğiniz şekilde düzenleyebilirsiniz
      blogPostsContainer.appendChild(linkElement);
      blogPostsContainer.appendChild(document.createElement('br')); // Her link arasına bir satır ekler
    });
  })
  .catch(error => console.error('Yazılar yüklenirken bir hata oluştu:', error));
