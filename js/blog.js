document.addEventListener("DOMContentLoaded", async function() {
    var blogPostsContainer = document.getElementById("blog-posts");
    var blogFolder = "blog/";

    var filesResponse = await fetch(blogFolder);
    var files = await filesResponse.text();

    files.split("\n").forEach(async function(file) {
        file = file.trim();
        if (file.endsWith(".html")) {
            var postFilePath = blogFolder + file;
            var postResponse = await fetch(postFilePath);
            var postHTML = await postResponse.text();

            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = postHTML;

            var postLink = postFilePath;
            var postTitleElement = tempDiv.querySelector("meta[name='og:title']");
            var postTitle = postTitleElement ? postTitleElement.innerText : "Başlık bulunamadı";
            var postDescriptionElement = tempDiv.querySelector("meta[name='description']");
            var postDescription = postDescriptionElement ? postDescriptionElement.getAttribute("content") : "Açıklama bulunamadı";
            var postImageElement = tempDiv.querySelector("meta[property='og:image']");
            var postImage = postImageElement ? postImageElement.getAttribute("content") : "Resim bulunamadı";

            var postDiv = document.createElement("div");
            postDiv.classList.add("blog-post");
            postDiv.innerHTML = "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>" +
                                "<p>" + postDescription + "</p>" +
                                "<img src='" + postImage + "' alt='" + postTitle + "'>";

            blogPostsContainer.appendChild(postDiv);
        }
    });
});
