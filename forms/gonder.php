<?
$konu = "Yeni Mesaj";
$kime = "yazilimteknisyeni@gmail.com";
$adsoyad = $_POST["name"];
$eposta = $_POST["email"];
$konu = $_POST["subject"];
$mesaj = $_POST["message"];

$ustbilgi = "From: $eposta\r\n";
$ustbilgi .= "Reply-to: $eposta\r\n";
$ustbilgi .= "X-Mailer: PHP/".phpversion();

if(mail($kime,$konu,$mesaj,$ustbilgi)){
echo "<script>window.locaiton.href='index.html';</script>";
} else{
echo "<script>alert('HATA: Mail gönderilemedi.');window.locaiton.href='index.html';</script>";
}

?>
