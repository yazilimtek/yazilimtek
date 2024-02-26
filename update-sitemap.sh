#!/bin/bash

# Sitemap dosyasının yolu
SITEMAP_FILE="sitemap.xml"

# Belirli bir klasördeki .html uzantılı dosyaları sitemap dosyasına ekleme
find blog/ -type f -name "*.html" | while read file; do
    # Dosyanın son değiştirilme tarihini al
    lastmod=$(date -r "$file" "+%Y-%m-%d")

    # URL'yi oluştur
    url="https://yazilimteknisyeni.com.tr/${file}"

    # Sitemap dosyasına eklemek için lastmod, changefreq ve priority değerlerini içeren XML'i oluştur
    echo "<url>" >> "$SITEMAP_FILE"
    echo "  <loc>${url}</loc>" >> "$SITEMAP_FILE"
    echo "  <lastmod>${lastmod}</lastmod>" >> "$SITEMAP_FILE"
    echo "  <changefreq>weekly</changefreq>" >> "$SITEMAP_FILE"
    echo "  <priority>0.8</priority>" >> "$SITEMAP_FILE"
    echo "</url>" >> "$SITEMAP_FILE"
done
