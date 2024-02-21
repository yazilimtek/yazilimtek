document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");

    // Blog yazısının dosya yolu
    var postFilePath = "blog/nvidia-rtx-chatbot.html";

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

            // Blog yazısının dosya adını alın
            var postFileName = postFilePath;

            // Blog yazısının linkini, başlığını, resmini ve meta description'ını alın
            var postLink = postFileName;
            var postTitle = tempDiv.querySelector("meta[name='og:title']").getAttribute("content");
            var postImage = tempDiv.querySelector("meta[property='og:image']").getAttribute("content");
            var postMetaDescription = tempDiv.querySelector("meta[name='description']").getAttribute("content");

            // Blog yazısını göstermek için bir div oluşturun
            var postDiv = document.createElement("div");
            postDiv.innerHTML = "<a href='" + postLink + "'><img src='" + postImage + "' alt='" + postTitle + "'></a>" +
                "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>" +
                "<p>" + postMetaDescription + "</p>";

            // Blog yazısını göstermek için ana div'e ekleyin
            blogPostsContainer.appendChild(postDiv);
            console.log(postHTML);
        }
    };
    xhr.send();
    
});
