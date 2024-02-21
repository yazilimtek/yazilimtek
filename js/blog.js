// Aynı klasördeki HTML dosyalarının linklerini al
var links = Array.from(document.querySelectorAll('a')).map(a => a.href);

// Sadece .html uzantılı olanları filtrele
var htmlFiles = links.filter(link => link.toLowerCase().endsWith('.html'));

// HTML dosyalarını blog-posts divine yazdır
var blogPostsContainer = document.getElementById('blog-posts');
htmlFiles.forEach(file => {
  var linkElement = document.createElement('a');
  linkElement.href = file;
  linkElement.textContent = file; // Link metni olarak URL'yi gösterir, istediğiniz şekilde düzenleyebilirsiniz
  blogPostsContainer.appendChild(linkElement);
  blogPostsContainer.appendChild(document.createElement('br')); // Her link arasına bir satır ekler
});
