document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");

    // Blog yazılarının bulunduğu klasörün yolu
    var blogFolder = "blog/";
    // AJAX isteği göndermek için yeni bir XMLHttpRequest nesnesi oluşturun
    var xhr = new XMLHttpRequest();
    xhr.open("GET", blogFolder, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // AJAX isteği tamamlandığında, klasör içeriğini işle
            var files = xhr.responseText.split("\n");

            // Klasör içindeki her dosya için döngü oluşturun
            files.forEach(function(file) {
                file = file.trim();
                if (file.endsWith(".html") && file !== "index.html") {
                    // Blog yazısının dosya yolu
                    var postFilePath = blogFolder + file;

                    // Yeni bir XMLHttpRequest nesnesi oluşturun
                    var xhrPost = new XMLHttpRequest();
                    xhrPost.open("GET", postFilePath, true);
                    xhrPost.onreadystatechange = function () {
                        if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                            // AJAX isteği tamamlandığında, blog yazısının içeriğini işleyin
                            var postHTML = xhrPost.responseText;

                            // Blog yazısının içeriğini analiz etmek için bir geçici div oluşturun
                            var tempDiv = document.createElement("div");
                            tempDiv.innerHTML = postHTML;

                            // Blog yazısının linkini, başlığını, resmini ve meta description'ını alın
                            var postLink = postFilePath;
                            var postTitle = tempDiv.querySelector("title").innerText;
                            var postImage = tempDiv.querySelector("meta[property='og:image']").getAttribute("content");
                            var postMetaDescription = tempDiv.querySelector("meta[property='og:description']").getAttribute("content");

                            // Blog yazısını göstermek için bir div oluşturun
                            var postDiv = document.createElement("div");
                            postDiv.innerHTML = "<a href='" + postLink + "'><img src='" + postImage + "' alt='" + postTitle + "'></a>" +
                                "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>" +
                                "<p>" + postMetaDescription + "</p>";

                            // Blog yazısını göstermek için ana div'e ekleyin
                            blogPostsContainer.appendChild(postDiv);
                        }
                    };
                    xhrPost.send();
                }
            });
        }
    };
    xhr.send();
});
