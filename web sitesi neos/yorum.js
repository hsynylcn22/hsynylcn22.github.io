

function hakkimizda(){

    document.getElementById("hepsiBurda").innerHTML=
    `
    <div class="neVarsaArtık">
      <h3 class="sbas">Şikayet ve Önerileriniz</h3>
      <input type="text" id="inp" placeholder="Lütfen buraya yazınız...">
      <button class="buron" onclick="but()">ekle</button>
      <ul>
          <li>Bekleme salonunda sigara içiliyor içilmese iyi olur</li>
          <li>Arabamın camı lekeli kalmış biraz daha dikkat ederseniz iyi olur </li>
          <li>Kullandığınız süt arabamı yapış yapış yapmış markasını lütfen değiştirin</li>

      </ul>

      <h3 class="tbas">Müşteri yorumları</h3>
      <input type="text" id="inpu" placeholder="Lütfen buraya yazınız...">
      <button class="buron" onclick="buk()">ekle</button>
      <ul>
          <li>Aracımı çok güzel yıkamışsınız ellerinize sağlık böyle devam etmeniz dileğiyle</li>
          <li>İşini önemseyerek yapan bir dükkansınız esnaflığınızda çok güzel böyle devam</li>
          <li>Oto parfümünüz çok güzel oto parfüm satıyormusunuz</li>
          
      </ul>
     
</div>
<p class="tesekkur">Bizi değerlendirdiğiniz için teşekkür ederiz <span><i class="fa-solid fa-heart"></i></span></p>
<div class="altbilgi">
  <h4 class="altbas">Vs Garage</h4>
  <p class="grm"><span class="ter">Telefon : </span>0541 728 1588 <a href="#" class="fat">Bizi değerlendirin</a></p>
  <p class="grm"><span class="ter">E posta : </span>hy356210@gmail.com
 <a href="#" class="fat">Şikayet ve önerileriniz</a></p>
  <p class="ben">Developer : Hüseyin Yalçın</p>
</div>
    `
}