/* Görev 1: Maaş Hesaplama
İşyerinizin muhasebe servisinde çalışan yazılıma meraklı bir arkadaşınız, aylık personel giderini hesaplarken kullanmak için sumPersonelSalaries adında bir fonksiyon yazmaya başlamış, fakat devamını getirememiş. Ve sizden yardım istiyor: "Bu fonksiyon şirkette çalışan 5 kişinin aylık maaş ücretlerini 5 ayrı parametre olarak alsın. Bu maaşları toplayıp, toplamı geri dönsün."


Örnek Kullanım:

[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
sonucu 20000 dönmeli.


İpucu: Fonksiyon 5 tane parametre almalı.(employee1, employee2 v.b.)
İpucu: Fonksiyon toplam maaşı return etmeli. */

function sumPersonelSalaries(
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
  ) {
    const toplama = employee1 + employee2 + employee3 + employee4 + employee5;
    return toplama;
  }
  console.log(toplama);
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = sumPersonelSalaries;


/* Görev 2: Geçme Notu Hesaplama

Kardeşiniz, üniversitenin ilk döneminde her genç gibi derslere pek az vakit ayırabilmiş, fakat finaller yaklaştıkça biraz endişelenmeye başlamış. Onu sürekli "2. vizeden şu notu alsam, finalden de şunu alsam" diye hesap yaparken görüyorsunuz. Ders çalışmaya odaklanması için ona bir geçme notu hesaplayıcı yazmaya karar verdiniz: Vizeler ve finallerden alınan notları kullanarak ders geçme puanı hesaplayan calFinalNote adında bir fonksiyon!

Bu fonksiyon, 2 vize ve 1 final notunu temsil eden, number türünde 3 ayrı parametre almalı ve hesapladığı geçme notunu number olarak geri dönmeli.


Örnek kullanım

calFinalNote(60, 80, 90);
işlemi 84 dönmeli.


Geçme puanı: vize ortalaması'nın %30'u, final notunun %70'idir. */

function calFinalNote(vize1, vize2, final) {
    const vizeOrtalama = (vize1 + vize2) / 2;
    const gecmeNotu = vizeOrtalama * 0.3 + final * 0.7;
    return gecmeNotu;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = calFinalNote;

  /* Görev 3: Çekiliş

Okulunuzun mezunlar gününde küçük bir çekiliş yapılacak ve kazananlara küçük hediyeler verilecek. Yazılımcı olduğunuzu duyunca dernek başkanı sizden yardım istemeye karar vermiş: "0 ile 1000 arası rastgele bir sayı üreten randomNumber adında bir fonksiyona ihtiyacımız var. Bir de ürettiği sayının tek mi çift mi olduğunu belirtmeli."

Bu fonksiyonun sonuçlarına birkaç örnek: "354 sayısı çift sayıdır", "133 sayısı tek sayıdır"

İpucu: Math.random() metoduna bakabilirsin. (0 ile 1 arasında bir sayı oluşturur: 0 <= x < 1 )
İpucu: 0-X arası bir sayı oluşturmak için Math.random()'u X ile genişletebilirsin.
İpucu: if-else ifadesi kullanabilirsin. */

function randomNumber() {
    const rastgele = Math.floor(Math.random() * 1000);
    if (rastgele % 2 === 0) {
      return rastgele + ' sayısı çift sayıdır';
    } else {
      return rastgele + ' sayısı tek sayıdır';
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = randomNumber;

  /* Görev 4: Sayı tahmin oyunu

Çalıştığımız firma bizden tahminEt adında küçük bir sayı tahmin oyunu yapmamızı istedi: "kolay", "orta" ve "zor" modları olan bu oyun, rastgele bir sayı üretecek ve bu sayıyı kullanıcının tahmini ile kıyaslayacak.

Oyunumuz modu temsil eden bir parametre almalı ve

kolay modda 0-3 arası (3 dahil değil)
orta modda, 0-5 arası (5 dahil değil)
zor moddda, 0-7 arası (7 dahil değil) random bir tam sayı oluşturmalı.
Kullanıcının tahminini temsil eden, değeri 0-7 arasında olan bir parametre almalı ve bunu ürettiği sayıyla kıyaslamalı.

Eğer tahmin doğruysa "Kazandın!", değilse "Kaybettin: (kullanıcı: 3, bilgisayar: 2)" gibi bir sonuç vermeli.

Kullanıcı tahmini sayı değilse ya da istenen sınırlar içinde değilse konsola "0-7 aralığında seçim yapmalısın" yazdırmalı.

İpucu: Math.random() metoduna bakabilirsin.
İpucu: if else ifadesi kullanabilirsin.
İpucu: Bir değişkenin sayı olup olmadığını anlamak için typeof metodunu araştırıp kullanabilirsin. */

function tahminEt(mod, tahmin) {
    if (tahmin < 0 || tahmin > 7 || typeof tahmin !== Number) {
      console.log('0-7 aralığında seçim yapmalısın');
    }
    let bilgisayar = 0;
    if (mod === 'kolay') {
      bilgisayar = Math.floor(Math.random() * 3);
    } else if (mod === 'orta') {
      bilgisayar = Math.floor(Math.random() * 5);
    } else {
      bilgisayar = Math.floor(Math.random() * 7);
    }
    if (bilgisayar === tahmin) {
      return 'Kazandın!';
    } else {
      return (
        'Kaybettin: (kullanıcı: ' + tahmin + ', bilgisayar: ' + bilgisayar + ')'
      );
    }
  }
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = tahminEt;

  /* Gün Projesi: Taş-Kağıt-Makas!
  Çalıştığımız yer, kullanıcıların hoş vakit geçirmesi için web sayfasına bu sefer bir taş-kağıt-makas oyunu eklemeye karar verdi. Bugünkü işimiz javascript kullanarak taş-kağıt-makas oyunu için tasKagitMakas adında bir fonksiyon yazmak.

Bu oyun 2 kişiyle oynanır. Kullanıcılar taş, kağıt ya da makas'tan birini seçer ve aynı anda birbirlerine söylerler. Taş makası, makas kağıdı, kağıt taşı yener. Bu üstünlük kurallarına göre kimin kazandığı belirlenir. Seçimlerin aynı olması durumunda beraberlik oluşur.

Bu fonksiyon;

Kullanıcının seçimini parametre olarak almalı,
Bilgisayar için rastgele bir tercih oluşturmalı,
Aşağıdaki örneklerdeki gibi bir metni geri dönmeli.

Örnek Kullanımlar

tasKagitMakas("makas");
"Senin seçimin: makas. Bilgisayarın seçimi: kağıt. Kazandın!" (Demek ki bu sefer bilgisayar seçimi kağıtmış.)

--

tasKagitMakas("kağıt");
"Senin seçimin: kağıt. Bilgisayarın seçimi: taş. Kazandın!" (Demek ki bu sefer bilgisayar seçimi taşmış.)

--

tasKagitMakas("taş");
"Senin seçimin: taş. Bilgisayarın seçimi: taş. Beraberlik!" (Demek ki bu sefer bilgisayar seçimi taşmış.) */
function tasKagitMakas(kullanici) {
    const rastgele = Math.floor(Math.random() * 3);
    let bilgisayar;
    if (rastgele === 2) {
      bilgisayar = 'makas';
    } else if (rastgele === 1) {
      bilgisayar = 'kağıt';
    } else {
      bilgisayar = 'taş';
    }
  
    if (
      (bilgisayar === 'makas' && kullanici === 'taş') ||
      (bilgisayar === 'taş' && kullanici === 'kağıt') ||
      (bilgisayar === 'kağıt' && kullanici === 'makas')
    ) {
      return (
        'Senin seçimin: ' +
        kullanici +
        '. Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Kazandın!'
      );
    } else if (bilgisayar === kullanici) {
      return (
        'Senin seçimin: ' +
        kullanici +
        '. Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Beraberlik!'
      );
    } else {
      return (
        'Senin seçimin: ' +
        kullanici +
        '. Bilgisayarın seçimi: ' +
        bilgisayar +
        '. Kaybettin!'
      );
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = tasKagitMakas;