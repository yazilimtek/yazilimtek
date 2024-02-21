document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");

    // Blog yazılarının bulunduğu klasörün yolu
    var blogFolder = "blog/";

    // Son 4 yazıyı göstermek için bir döngü oluşturun
    for (var i = 1; i <= 4; i++) {
        // Blog yazısının dosya adını oluşturun
        var postFileName = "post" + i + ".html";

        // Blog yazısının dosya yolu
        var postFilePath = blogFolder + postFileName;

        // Blog yazısını içeriği çekmek için bir AJAX isteği gönderin
        var xhr = new XMLHttpRequest();
        xhr.open("GET", postFilePath, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // AJAX isteği tamamlandığında, blog yazısının içeriğini işleyin
                var postHTML = xhr.responseText;

                // Blog yazısının içeriğini analiz etmek için bir geçici div oluşturun
                var tempDiv = document.createElement("div");
                tempDiv.innerHTML = postHTML;

                // Blog yazısının linkini, başlığını, resmini ve meta description'ını alın
                var postLink = tempDiv.querySelector("a").href;
                var postTitle = tempDiv.querySelector("h1").innerText;
                var postImage = tempDiv.querySelector("img").src;
                var postMetaDescription = tempDiv.querySelector("meta[name='description']").content;

                // Blog yazısını göstermek için bir div oluşturun
                var postDiv = document.createElement("div");
                postDiv.innerHTML = "<a href='" + postLink + "'><img src='" + postImage + "' alt='" + postTitle + "'></a>" +
                                    "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>" +
                                    "<p>" + postMetaDescription + "</p>";

                // Blog yazısını göstermek için ana div'e ekleyin
                blogPostsContainer.appendChild(postDiv);
            }
        };
        xhr.send();
    }
});
