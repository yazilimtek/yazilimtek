<script>
var pageTitle = document.title;
document.querySelector('meta[name="og:title"]').setAttribute("content", pageTitle);
document.querySelector('meta[name="twitter:title"]').setAttribute("content", pageTitle); 
document.querySelector('meta[property="og:title"]').setAttribute("content", pageTitle);


var paragraphContent = document.getElementById("desc").textContent;
var description = paragraphContent.slice(0, 200)."...";
document.querySelector('meta[name="description"]').setAttribute("content", description);
document.querySelector('meta[property="og:description"]').setAttribute("content", description);       
document.querySelector('meta[name="twitter:description"]').setAttribute("content", description);
document.querySelector('meta[name="og:description"]').setAttribute("content", description);


var fileName = window.location.pathname.split('/').pop();
var canonicalURL = window.location.origin + '/blog/' + fileName;
document.querySelector('link[rel="canonical"]').setAttribute("href", canonicalURL);
document.querySelector('meta[property="og:url"]').setAttribute("content", canonicalURL);

var imageFileName = fileName.replace(".html", ".jpg");

var imageURL = window.location.origin + '/img/' + imageFileName;
document.querySelector('meta[property="og:image"]').setAttribute("content", imageURL);
document.querySelector('meta[name="twitter:image"]').setAttribute("content", imageURL);
    
</script>
