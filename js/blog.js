console.log("JavaScript dosyası yüklendi.");

// Aynı klasördeki HTML dosyalarının linklerini al
var links = Array.from(document.querySelectorAll('a')).map(a => a.href);
console.log("linkler alındı");
// Sadece .html uzantılı olanları filtrele
var htmlFiles = links.filter(link => link.toLowerCase().endsWith('.html'));
console.log("html uzantılı dosyalar filtrelendi");
// HTML dosyalarını blog-posts divine yazdır
var blogPostsContainer = document.getElementById('blog-posts');
htmlFiles.forEach(file => {
  console.log("Döngüye girildi");
  var linkElement = document.createElement('a');
  console.log(linkElement);

  linkElement.href = file;
  linkElement.textContent = file; // Link metni olarak URL'yi gösterir, istediğiniz şekilde düzenleyebilirsiniz
  blogPostsContainer.appendChild(linkElement);
  blogPostsContainer.appendChild(document.createElement('br')); // Her link arasına bir satır ekler
});

console.log("İşlem bitti.");
