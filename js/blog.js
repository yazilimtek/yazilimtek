document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");

    // Blog yazılarının bulunduğu klasörün yolu
    var blogFolder = "blog/";

    // Dosya adı
    var indexFileName = "blog/index.html";

    // AJAX isteği göndermek için yeni bir XMLHttpRequest nesnesi oluştur
    var xhr = new XMLHttpRequest();
    xhr.open("GET", blogFolder, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // AJAX isteği tamamlandığında, klasör içeriğini işle
            var files = xhr.responseText.split("\n");

            // Son 4 yazıyı göstermek için bir döngü oluşturun
            for (var i = Math.max(0, files.length - 4); i < files.length; i++) {
                var file = files[i].trim();
                if (file.endsWith(".html")) {

         
                    
                    // Blog yazısının dosya yolu
                    var postFilePath = blogFolder + file;

           // index.html dosyasını atlayın
        if (postFileName === postFilePath) {
            continue;
        }
                    
                    // Blog yazısını içeriği çekmek için bir AJAX isteği gönderin
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
                            var postTitle = tempDiv.querySelector("meta[property='og:title']").content;
                            var postImage = tempDiv.querySelector("meta[property='og:image']").content;
                            var postLink = "siteniz.com/" + file;

                            // Blog yazısını göstermek için bir div oluşturun
                            var postDiv = document.createElement("div");
                            postDiv.innerHTML = "<a href='" + postLink + "'><img src='" + postImage + "' alt='" + postTitle + "'></a>" +
                                                "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>";

                            // Blog yazısını göstermek için ana div'e ekleyin
                            blogPostsContainer.appendChild(postDiv);
                        }
                    };
                    xhrPost.send();
                }
            }
        }
    };
    xhr.send();
});

