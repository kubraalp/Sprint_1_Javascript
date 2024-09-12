/* Görev 1: Kalanlar Toplamı
100%
Marangoz enişten büyük bir proje aldı. Daha önceki işlerde elinde kalan parçaları kullanarak çevreyi korumak istiyor. Yapması gereken ürünler 3cm genişliğinde çubuklar. Elinde de değişik ölçülerde -boyu yeterli- tahta parçaları var. Elindeki parçaların ölçüsünü verip, kullanılamayacak parçaların toplam ölçüsünü öğrenmek istiyor.

Ona yardımcı olmak için:

Adı totalRemainder olan bir fonksiyon yazalım.
Bu fonksiyon sayılardan oluşan bir arrayi parametre olarak alsın.
Bu array'deki her sayının 3'e bölümünden kalanların toplamını dönsün.
Örnek Kullanım:

[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
İpucu: döngü kullanabilirsin.
İpucu: Modulo operatörü (%) kullanabilirsin. */

function totalRemainder(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 3 !== 0) {
        total += numbers[i] % 3;
      }
    }
    return total;
  }
  console.log(totalRemainder([1, 5, 11, 145, 51, 2]));
  console.log(totalRemainder([2, 9, 13, 14]));
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = totalRemainder;


  /* Görev 2: Ortalamadan Büyükler
100%
Mezun olduğun okulda başarıyı ölçmek için ders notları üzerinden bir araştırma yapmak istiyorlar. Bir sınıftaki öğrencilerden kaçı sınıf ortalamasının üzerinde? Bunun için senden yardım istediler.

Adı aboveAverage olan bir fonksiyon yazalım.
Bu fonksiyon sayılardan oluşan bir arrayi parametre olarak alsın.
Bu fonksiyon bu arraydeki sayıların ortalamasını alıp, ortalamadan büyük olanların sayısını dönsün.

Örnek Kullanımlar:

aboveAverage([1,2,3,4,5,6,7,8,9]);

// işlemi 4 dönmeli.
aboveAverage([1,12,13,14,15,100]);

// işlemi 1 dönmeli.
aboveAverage([1,13,14,15]);

// işlemi 3 dönmeli.
İpucu: 2 kere döngü kullanabilirsin.
İpucu: Önce ortalamayı hesaplayabilirsin. (Ortalama = Toplam / Adet) */

function aboveAverage(notlar) {
    toplam = 0;
    for (let i = 0; i < notlar.length; i++) {
      toplam += notlar[i];
    }
    let ortalamadanBuyukler = 0;
    let ortalama = toplam / notlar.length;
    for (let k = 0; k < notlar.length; k++) {
      if (notlar[k] > ortalama) {
        ortalamadanBuyukler++;
      }
    }
    return ortalamadanBuyukler;
  }
  console.log(aboveAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(aboveAverage([1, 12, 13, 14, 15, 100]));
  console.log(aboveAverage([1, 13, 14, 15]));
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = aboveAverage;

  /* Görev 3: Harf Tekrar Sıklığı
100%
Aynı okulda okuduğun girişimci bir arkadaşın özel bir klavye tasarlamak istiyor. En çok kullanılan harfleri en hızlı parmakların olduğu yere koyarak yazma hızını ve 10 parmak öğrenmeyi kolaylaştırmak istiyor. Bunun için ön araştırma aşamasında ve senden yardım istiyor.

Bazı harfleri, günlük hayatımızdaki metinlerde kontrol ederek hangi harfi daha çok kullandığımızı anlamaya çalışıyor.

Ona yardımcı olmak için:

Adı 'Adı countOfChar olan bir fonksiyon yazalım.
Bu fonksiyon 1. parametre olarak bir metin, 2. parametre olarak metinde araştıracağımız karakteri alsın.
Bu karakterin metinde kaç kere geçtiğini hesaplayıp dönsün.
Örnek Kullanım:

countOfChar("Sprint 1 4. gün konusu diziler", "e")

// sonucu 1 dönmeli.
countOfChar("Sprint 1 4. gün konusu diziler", "i")

// sonucu 3 dönmeli

İpucu: Döngü kullanabilirsin.
İpucu: Büyük küçük harfe dikkat.
İpucu: Stringlerdeki karakterlere index'inden ulaşabilirsin veya .split() ile karakterleri bir array'de toplayabilirsin. */

function countOfChar(metin, karakter) {
    let tekrar = 0;
  
    for (let i = 0; i < metin.length; i++) {
      if (metin.charAt(i).toLowerCase() == karakter.toLowerCase()) {
        tekrar++;
      }
    }
    return tekrar;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = countOfChar;

  
  /* Görev 4: Cümledeki En Uzun Kelime
100%
Edebiyat okuyan kuzenin tezi için yeni bir bilgiye ihtiyaç duydu. Türkçedeki uzun kelimeler... Bir edebi metindeki her cümlenin en uzun kelimesini bulmak istiyor.

Adı getLongestWord olan bir fonksiyon yazalım.
Bu fonksiyon bir cümleyi parametre olarak alsın.
Bu cümledeki en uzun kelimeyi geri dönsün.
Örnek Kullanım:

getLongestWord("ÖTV matrah artırımı ile arabalar ucuzlayacak");

// "ucuzlayacak" dönmeli
getLongestWord("Split metodu ile bir metni kelimelerden oluşan bir array'e dönüştürebilirsin");

//  "dönüştürebilirsin" dönmeli
İpucu: Örneklerde bir ipucu gizli. 😉
İpucu: .length özelliğini kullanabilirsin.
İpucu: maxUzunluk ve enUzunKelime diye değişken oluşturabilirsin.
İpucu: Her kelimede döngü yapıp, maxUzunluk'tan büyük mü kontrolü yapabilirsin.
İpucu: Büyükse maxUzunluk ve enUzunKelime'yi güncelleyebilirsin. */

function getLongestWord(metin) {
    const kelimeler = metin.split(' ');
  
    let maxUzunluk = 0;
    let enUzunKelime = '';
    for (let i = 0; i < kelimeler.length; i++) {
      if (kelimeler[i].length > maxUzunluk) {
        maxUzunluk = kelimeler[i].length;
        enUzunKelime = kelimeler[i];
      }
    }
    return enUzunKelime;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = getLongestWord;

  /* Gün Projesi: Yardım Tutarı Hesaplama
100%
Büyük bir televizyon kanalında developer olarak çalışmaya başladın. Bu kanalda canlı yayında bir yardım kampanyası düzenleniyor. Telefonla arayan yardımsever insanlar belli tutarlarda yardım yapıyorlar.

Ahmet isimli bir kişi yardım yapanların isimlerinde kendi adında bulunan harflerden kaç tane geçiyor ise 1000 katı TL'yi bağışlayacağını açıkladı. Kanal yönetimi senden bağışlar geldikçe Ahmet isimli kişinin söz verdiği yardım tutarını hesaplamanı istiyorlar.

Bunu hesaplayacak fonksiyonun adı tutarHesapla olsun.
Bu fonksiyon yardım yapanların isimlerini içerin bir array'i parametre olarak alsın.
Gelen listedeki isimlerde 'Ahmet' ismindeki harflerden toplam kaç tane olduğunu hesaplayıp, 1000 katını geri dönsün.

Örnek Kullanım:

const yardimYapanlar = [
	"Leyla Mert",
	"Fevzi Kaya",
	"Aysel Hataylı",
	"Furkan Menekşe",
	"Zeliha Aydın"
];

tutarHesapla(yardimYapanlar);
a harfi 9 kere,
h karfi 2 kere,
m harfi 2 kere,
e harfi 8 kere,
t harfi 2 kere = toplam 23 kere olduğundan, 
23.000 TL dönmeli. */

function tutarHesapla(isimler) {
    let tekrar = 0;
  
    const karakterler = ['a', 'h', 'm', 'e', 't'];
    for (let i = 0; i < isimler.length; i++) {
      let isim = isimler[i].toLowerCase();
      for (let h = 0; h < karakterler.length; h++) {
        for (let k = 0; k < isim.length; k++) {
          if (isim.charAt(k) === karakterler[h]) {
            tekrar++;
          }
        }
      }
    }
    return tekrar * 1000;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = tutarHesapla;