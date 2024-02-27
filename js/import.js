  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../content/footer.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Footer alanından sonra başka klasördeki HTML dosyasını enjekte et
      document.querySelector('taban').insertAdjacentHTML('afterend', xhr.responseText);
    }
  };
  xhr.send();
