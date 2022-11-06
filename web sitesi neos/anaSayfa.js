

var anaSayfa=document.getElementById("anaSayfa");
anaSayfa.addEventListener("click",()=>{
document.getElementById("hepsiBurda").innerHTML=
`
<section>
<div id="bg">
<div class="w-50" id="bg-text">
  <h1 class="display-1 text-light "></h1>
  <br>
  <br>
  <br>
  <br>
  <h1 class="display-1 text-warning kaydir">VS</h1>
  <h1 class="display-1 text-warning kaydir">Garage</h1>
  <br>
  <br>
  <h2 class="display-4 text-light kaydir">Temizliğin</h2>
  <h2 class="display-4 text-light kaydir">Tek</h2>
  <h2 class="display-4 text-light kaydir">Adresi</h2>
  <br>
  <br>
  <br>
</div>
</div>
</section>
<div  class="hepsi">
<ul class="puh">
    <li class="zart"><img src="img/pasta 1.jpg" alt=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias voluptatem, sunt perspiciatis libero nulla esse voluptates, quis itaque dolor accusantium laudantium modi sit facilis cum quia aspernatur ipsum doloribus!</p></li>
    <li class="zart"><img src="img/pasta 2.jpg" alt=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro quam, omnis expedita maiores rerum sunt mollitia quod architecto incidunt ratione laboriosam distinctio asperiores? At possimus maxime delectus fugiat quibusdam?</p></li>
    <li class="zart"><img src="img/pasta3.jpg" alt=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam explicabo optio ratione natus hic assumenda totam quis? Dolor vero porro totam deleniti, natus et impedit modi ipsum reprehenderit nesciunt.</p></li>
    <li class="zart"><img src="img/car-wash-2179231_1920.jpg" alt=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam explicabo optio ratione natus hic assumenda totam quis? Dolor vero porro totam deleniti, natus et impedit modi ipsum reprehenderit nesciunt.</p></li>
</ul>
<div class="t50">
<div class="t40">
<button type="button" class="akordisyon"><span>Arac yıkama</span><i class="fas fa-arrow-circle-down"></i></button>
<div class="kutu"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti eos eius rerum. Maiores tempore, accusamus iusto eos iure eius dolor, nulla assumenda, officia quae tempora iste expedita dicta? Voluptatum?</p></div>

<button type="button" class="akordisyon"><span>Detaylı Yıkama</span><i class="fas fa-arrow-circle-down"></i></button>
<div class="kutu"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti eos eius rerum. Maiores tempore, accusamus iusto eos iure eius dolor, nulla assumenda, officia quae tempora iste expedita dicta? Voluptatum?</p></div>

<button type="button" class="akordisyon"><span>Pasta cilah</span><i class="fas fa-arrow-circle-down"></i></button>
<div class="kutu"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti eos eius rerum. Maiores tempore, accusamus iusto eos iure eius dolor, nulla assumenda, officia quae tempora iste expedita dicta? Voluptatum?</p></div>
</div>

<iframe class="harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.1782460004051!2d26.576617629210794!3d41.66194289870249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b32f890f58d8ad%3A0xf32a8b1b3d2c542a!2s%C4%B0stasyon%2C%20Sanayi%20Sitesi%208.%20Sk.%20No%3A8%2C%2022100%20Edirne%20Merkez%2FEdirne!5e0!3m2!1str!2str!4v1667239454425!5m2!1str!2str"style="border-radius: 15px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div class="cekilis">
<h3 class="baslık">Çekilise kalan süre</h3>
<p id="sayim"></p>

<p class="yazi">Her ay yapılan çekilişimize <span> <i class="fa-solid fa-gift"></i></span> sende katıl
ve aracını bedava temizlet ve seçili aksesuarkardan kazan 
çekilişe katılmak <span class="link">linke</span> tıkla.
</p>
</div>
</div>
</div>



<div id="ilet" class="altbilgi">
<h4 class="altbas">Vs Garage</h4>

<p class="grm"><span class="ter">Telefon : </span>0541 728 1588 <a onclick="hakkimizda()" class="fat">Bizi değerlendirin</a></p>
<p class="grm"><span class="ter">E posta : </span>hy356210@gmail.com
<a onclick="hakkimizda()" class="fat">Şikayet ve önerileriniz</a></p>
<span class="ben">Developer : Hüseyin Yalçın</span>
</div>
`
});