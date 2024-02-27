var sitemapURL = 'https://yazilimteknisyeni.com.tr/sitemap.xml';
var sonYazilarDiv = document.getElementById('blog-body');
function fetchSitemapLinks(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, 'text/xml');
            var locTags = xmlDoc.getElementsByTagName('loc');
            var urls = [];
            Array.from(locTags).forEach(locTag => {
                var url = locTag.textContent;
                if (url.endsWith('.html')) { // Sadece HTML uzantılı linkleri kontrol et
                    urls.push(url);
                }
            });
            shuffleArray(urls); // Alınan URL'leri karıştır
            urls.forEach(url => {
                fetchPostData(url);
            });
        })
        .catch(error => console.error('Fetch Error:', error));
}

function fetchPostData(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var pageDoc = parser.parseFromString(data, 'text/html');
            var title = pageDoc.querySelector('meta[name="og:title"]').getAttribute('content');
            var metaDescription = pageDoc.querySelector('meta[name="description"]').getAttribute('content');
            var image = pageDoc.querySelector('meta[property="og:image"]').getAttribute('content');
            displayPost(url, title, metaDescription, image);
        })
        .catch(error => console.error('Fetch Error:', error));
}

function displayPost(url, title, description, image) {
    var postDiv = document.createElement('div');
    postDiv.classList.add('col-md-6', 'd-flex', 'align-items-stretch'); // Class ekleme işlemi
    postDiv.innerHTML = `
        <a href="${url}">
<div class="card" style="background-image: url('${image}')"; data-aos="fade-up" data-aos-delay="100" alt='${title}'">
     <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                </div></div>
        </a>
    `;
    sonYazilarDiv.appendChild(postDiv);
}

 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

fetchSitemapLinks(sitemapURL);
