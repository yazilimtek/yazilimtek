document.addEventListener("DOMContentLoaded", function () {
    var blogPostsContainer = document.getElementById("blog-posts");
    var blogFolder = "https://yazilimteknisyeni.com.tr/blog/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", blogFolder, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var files = xhr.responseText.split("\n");

            // Tüm dosyaların içeriğini tek bir istekte alın
            Promise.all(files.map(file => fetch(blogFolder + file).then(response => response.text())))
                .then(contents => {
                    contents.forEach(content => {
                        var tempDiv = document.createElement("div");
                        tempDiv.innerHTML = content;

                        var postLink = blogFolder + content;
                        var postTitle = tempDiv.querySelector("title").innerText;

                        var postDiv = document.createElement("div");
                        postDiv.classList.add("blog-post");
                        postDiv.innerHTML = "<h2><a href='" + postLink + "'>" + postTitle + "</a></h2>";

                        blogPostsContainer.appendChild(postDiv);
                    });
                })
                .catch(error => {
                    console.error("Hata oluştu: ", error);
                });
        }
    };
    xhr.send();
});
