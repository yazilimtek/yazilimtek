document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");

    // Blog yazılarının bulunduğu klasörün yolu
    var blogFolder = "blog/";

    // Dosya adı
    var indexFileName = "index.html";

    // Son 4 yazıyı göstermek için bir döngü oluşturun
    for (var i = 1; i <= 2; i++) {
        // Blog yazısının dosya adını oluşturun
      
        var file = files[i].trim();
                if (file.endsWith(".html")) {
                    // Blog yazısının dosya yolu
                    var postFileName = blogFolder + file;

        // index.html dosyasını atlayın
        if (postFileName === indexFileName) {
            continue;
        }

        // Blog yazısının dosya yolu
        var postFilePath = blogFolder + postFileName;

        // Yeni bir XMLHttpRequest nesnesi oluşturun
        var xhr = new XMLHttpRequest();
        
        // İsteği aç
        xhr.open("GET", postFilePath, true);

        // İstek tamamlandığında yapılacak işlem
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // İstek başarılı oldu
                var postHTML = xhr.responseText;
                
                // Blog yazısının içeriğini analiz etmek için bir geçici div oluşturun
                var tempDiv = document.createElement("div");
                tempDiv.innerHTML = postHTML;

                // Blog yazısının linkini, başlığını, resmini ve meta description'ını alın
                var postLink = postFilePath;
                var postTitle = tempDiv.querySelector("meta[name='og:title']").getAttribute("content");
                var postImage = tempDiv.querySelector("meta[property='og:image']").getAttribute("content");
                var postMetaDescription = tempDiv.querySelector("meta[name='description']").getAttribute("content");

                // Blog yazısını göstermek için bir div oluşturun
                var postDiv = document.createElement("div");
                postDiv.innerHTML = "<a href='" + postLink + "'><div class='blog-area'><img class='img-area src='" + postImage + "' alt='" + postTitle + "'></a>" +
                    "<h2>" + postTitle + "</h2>" +
                    "<p>" + postMetaDescription + "</p></div></a>";

                // Blog yazısını göstermek için ana div'e ekleyin
                blogPostsContainer.appendChild(postDiv);
            } else {
                // İstek başarısız oldu
                console.error("AJAX isteği başarısız: " + xhr.status);
            }
        };

        // İsteği gönder
        xhr.send();
    }
});
