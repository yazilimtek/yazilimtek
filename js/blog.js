document.addEventListener("DOMContentLoaded", async function() {
    var blogPostsContainer = document.getElementById("blog-posts");
    var blogFolder = "../blog/";
console.log(blogFolder);
    var filesResponse = await fetch(blogFolder);
    var files = await filesResponse.text();

    files.split("\n").forEach(async function(file) {
        file = file.trim();
        if (file.endsWith(".html")) {
            var postFilePath = blogFolder + file;
            var postResponse = await fetch(postFilePath);
            var postHTML = await postResponse.text();
console.log(postFilePath);
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = postHTML;

            var postLink = postFilePath;
            var postTitle = tempDiv.querySelector("title").innerText;

            var postDiv = document.createElement("div");
            postDiv.classList.add("blog-post");
            postDiv.innerHTML = "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>";

            blogPostsContainer.appendChild(postDiv);
        }
    });
});
