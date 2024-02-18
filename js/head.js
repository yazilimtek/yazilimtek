var xhr = new XMLHttpRequest();
xhr.open("GET", "../content/head.html", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var content = xhr.responseText;
    var parser = new DOMParser();
    var parsedHtml = parser.parseFromString(content, 'text/html');
    var headContent = parsedHtml.head.innerHTML;
    document.head.innerHTML += headContent;
  }
};
xhr.send();
