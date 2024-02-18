<script>
  async function loadContent() {
  const header = await fetch("header.html").then(response => response.text());
  const main = await fetch("main.html").then(response => response.text());
  const footer = await fetch("footer.html").then(response => response.text());

  const content = header + main + footer;

  document.write(content);
}

loadContent();
</script>
