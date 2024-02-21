document.addEventListener("DOMContentLoaded", function() {
    var blogPostsContainer = document.getElementById("blog-posts");
    var blogFolder = "../blog/";

    // AJAX isteği göndermek için yeni bir XMLHttpRequest nesnesi oluşturun
    var xhr = new XMLHttpRequest();
    xhr.open("GET", blogFolder, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var files = xhr.responseText.split("\n");

            // Klasör içindeki her dosya için döngü oluşturun
            files.forEach(function(file) {
                file = file.trim();
                if (file.endsWith(".html") && file !== "index.html") {
                    // Blog yazısının dosya yolunu oluşturun
                    var postFilePath = blogFolder + file;

                    // Yeni bir div oluşturun ve içeriğini blog yazısıyla doldurun
                    var postDiv = document.createElement("div");
                    postDiv.classList.add("blog-post");
                    postDiv.innerHTML = "<h2><a href='" + postFilePath + "'>" + file + "</a></h2>";

                    // Blog yazısını göstermek için ana div'e ekleyin
                    blogPostsContainer.appendChild(postDiv);
                }
            });
        }
    };
    xhr.send();
});
