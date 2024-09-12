/* Görev 1: Uzun Kelimeler

Edebiyat bölümünde okuyan kuzenin bir tez yazıyor. Bir kelimenin karakter sayısı çift haneli sayılara ulaştığında algılamanın zorlaştığını kanıtlamak istiyor. Her kelimeyi test etmek için senden yardım rica ediyor.

Bunun için bir fonksiyon oluşturalım, adı isHardToComprehend olsun.
Bu fonksiyon değeri string olan tek bir parametre alsın.
Bu fonksiyon kendisine gelen kelimenin karakter sayısı ÇİFT basamaklı ise boolean olarak true, değil ise false dönsün.

Örnek Kullanımlar:

[object Object],[object Object],[object Object],[object Object],[object Object]
true dönmeli.


[object Object],[object Object],[object Object],[object Object],[object Object]
false dönmeli.


İpucu: String'lerdeki .length özelliğine bakabilirsin.
İpucu: if else ifadesi kullanabilirsin. */

function isHardToComprehend(kelime) {
    if (kelime.length >= 10) {
      return true;
    } else {
      return false;
    }
  }
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = isHardToComprehend;

  
  /* Görev 2: Uzun Cümleler

Kuzeninin bir iddiası daha var: Cümleler uzadıkça da algılama zorlaşıyor. Bunun için bir cümledeki kelimelerin toplam karakter sayılarını hesaplayan bir uygulamaya ihtiyacı var. Sana cümledeki kelimeleri bir array içinde tek tek verip, senden toplam karakter sayısını hesaplamanı istiyor.

Bunun için adı totalCharCount olan bir fonksiyon yazalım.
Bu fonksiyon parametre olarak 1 array alsın.
Bu fonksiyon kendisine gelen array'deki tüm kelimelerin toplam karakter sayısını geri dönsün.
Örnek Kullanım: totalCharCount(["Issız", "bir", "adada", "yalnız", "kaldı"]) 24 dönmeli. totalCharCount(["Tren", "kaçtı", "bir", "kere"]) 16 dönmeli.

İpucu: .join() metodunu araştırabilirsin. */
function totalCharCount(words) {
    // Kelimeleri birleştirip tek bir string oluştur
    const combinedString = words.join('');
    // Birleşik string'in uzunluğunu döndür
    return combinedString.length;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = totalCharCount;

  
  /* Görev 3: Derece Bursları

Yıllık okul ücreti 150000 olan bir okulda burslu okumak için bir sınav yapıldı. İlk 3'e girenler bedava okuyor. Sonraki 3 kişi %50 burslu. Sonraki 4 öğrenci %30 burslu okuyabiliyor. Bir öğrencinin bu sınav sonucunda ne kadar ücret ödemesi gerektiğini hesaplayan bir fonksiyon yazalım.

Bu fonksiyonun adı calTuition olsun.
Bu fonksiyon 2 tane parametre alsın: ilk parametre sınavdaki sıralamayı içeren bir array, 2. parametre ise okul ücretini öğrenmek isteyen öğrencinin adı.
Bu fonksiyon öğrencinin sınavdaki sırasına göre okul ücretini geri dönsün.
Örnek Kullanım: calTuition(["Emre", "Erdem", "Hatice", "Fatih", "Ayşe", "Selen", "Alp", "Mehmet", "Turan", "Melis", "Gamze"], "Selen") 75000 dönmeli. calTuition(["Emre", "Erdem", "Hatice", "Fatih", "Ayşe", "Selen", "Alp", "Mehmet", "Turan", "Melis", "Gamze"], "Kazım") 150000 dönmeli.

İpucu: .indexOf() metodunu araştırabilirsin.
İpucu: if else ifadesi kullanabilirsin. */

function calTuition(siralama, isim) {
    const sira = siralama.indexOf(isim);
    let ucret = 150000;
    if (sira >= 0 && sira <= 2) {
      ucret = 0;
    } else if (sira >= 0 && sira <= 5) {
      ucret = ucret * 0.5;
    } else if (sira >= 0 && sira <= 9) {
      ucret = ucret * 0.7;
    } else {
      ucret = ucret;
    }
    return ucret;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = calTuition;

  /* Görev 4: Arrayden eleman çıkarmak

Verilen bir array'den eleman çıkaran ve kalan elemanları return eden bir fonksiyon yazalım.

Bu fonksiyonun adı removeItems olsun.
Bu fonksiyon bir array'i parametre olarak alsın.
Bu fonksiyon kendisne gelen array'deki ilk 2, son 2 elemanı çıkarsın.
Kalan arrayde tek sayıda eleman varsa tam ortadakini de çıkarsın.
Kalan elemanları return etsin.
Eğer eleman sayısı 4 ve daha azsa boş array return etsin.
Örnek Kullanım: removeItems([1,5,9,12,17,14,21]) işlemi [9,17] dönmeli. removeItems(["Erdem", "Hatice", "Fatih", "Ayşe", "Alp", "Mehmet", "Melis", "Gamze"]) işlemi ["Fatih", "Ayşe", "Alp", "Mehmet"] dönmeli. removeItems(["kiraz", "çilek"]) işlemi [] dönmeli.

İpucu: .pop() ve .push() metodunu araştırabilirsin.
İpucu: .splice() metodunu araştırabilirsin. */
function removeItems(elemanlar) {
    const elemanSayisi = elemanlar.length;
    if (elemanSayisi <= 4) {
      return [];
    }
    if (elemanSayisi % 2 === 1) {
      const ortadakiEleman = (elemanSayisi - 1) / 2;
      elemanlar.splice(ortadakiEleman, 1);
    }
    elemanlar.shift();
    elemanlar.shift();
    elemanlar.pop();
    elemanlar.pop();
  
    return elemanlar;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = removeItems;

  /* Görev 5: Tiyatro biletleri

6 arkadaş birlikte tiyatroya gitmeye karar veriyorlar. Aynı sıradan bilet alıyorlar ama biletlerini farklı zamanlarda aldıkları için numaralar karışık. (örneğin 1,5,9,12,17,14)
Koltuklarına tek seferde hızlıca ve doğru sırayla oturmak için bilet numaralarını küçükten büyüğe dizmişler ve bir array oluşturmuşlar. (örneğin [1,5,9,12,14,17])
Sonra içlerinden biri, tiyatro salonlarında tek ve çift koltukların gruplandığını hatırlıyor, yani büyükten küçüğe gruplamak yeterli olmayacak, sayıları tek ve çift olarak gruplamaları gerekiyor (örneğin [12,14,1,5,9,17]).
Bu yüzden yardımınızı istiyorlar. Size küçükten büyüğe sıralanmış 6 sayı içeren bir array verecekler, sizin de bu sayıları tek ve çift olarak gruplayıp önce çiftleri, sonra tekleri yine tek bir array olarak geri vermenizi istiyorlar (örneğin [12,14,1,5,9,17]).
Bu fonksiyonun adı groupEvenAndOdds olsun.

Bu fonksiyon sayılardan oluşan 6 elemanlı bir array'i parametre olarak alsın.
Bu fonksiyon önce çift sayıları, sonra tek sayıları içeren array'i geri dönsün.
Örnek Kullanım: groupEvenAndOdds([1,5,9,12,14,17]) işlemi [12,14,1,5,9,17] dönmeli. groupEvenAndOdds([2,8,19,144,151,157]) işlemi [2,8,144,19,151,157] dönmeli.

İpucu: çift sayıları ve tek sayıları ayrı ayrı tutmak için veri tipi array olan 2 tane değişken tanımlayabilirsin.
İpucu: Bu 2 array'i birleştirmek için bir metod araştırabilirsin. */

function groupEvenAndOdds(numaralar) {
    const ciftSayilar = [];
    const tekSayilar = [];
    if (numaralar[0] % 2 === 0) {
      ciftSayilar.push(numaralar[0]);
    } else {
      tekSayilar.push(numaralar[0]);
    }
    if (numaralar[1] % 2 === 0) {
      ciftSayilar.push(numaralar[1]);
    } else {
      tekSayilar.push(numaralar[1]);
    }
    if (numaralar[2] % 2 === 0) {
      ciftSayilar.push(numaralar[2]);
    } else {
      tekSayilar.push(numaralar[2]);
    }
  
    if (numaralar[3] % 2 === 0) {
      ciftSayilar.push(numaralar[3]);
    } else {
      tekSayilar.push(numaralar[3]);
    }
    if (numaralar[4] % 2 === 0) {
      ciftSayilar.push(numaralar[4]);
    } else {
      tekSayilar.push(numaralar[4]);
    }
    if (numaralar[5] % 2 === 0) {
      ciftSayilar.push(numaralar[5]);
    } else {
      tekSayilar.push(numaralar[5]);
    }
    if (numaralar[6] % 2 === 0) {
      ciftSayilar.push(numaralar[6]);
    } else {
      tekSayilar.push(numaralar[6]);
    }
    const result = ciftSayilar.concat(tekSayilar);
    return result;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = groupEvenAndOdds;

  /* Gün Projesi: Elektrikli Araba Çekilişi

Yeni elektrikli araba projesi çok ilgi gördü ve bunun için talep toplandı. Hazırda 11 tane araba var. Bu arabalar sırasıyla:

başvuru yapan ilk 5 kişiye,
başvuru sırasına göre sıradaki her 10. kişiye(10., 20., 30., 40. , 50.) toplam 5 tane,
ve rastgele seçilecek 1 kişiye verilecek.
Çalıştığın şirket, bu şanslı kişileri belirleyecek uygulamayı geliştirme işini aldı ve müdürün bu işi sana verdi.

Fonksiyonun adı lottery olsun.

Fonksiyon, isimlerden oluşan bir array'i parametre olarak alsın.
Yukarıdaki kurallara uygun seçilen 11 kişiyi array olarak geri dönsün.
Dikkat

Fonksiyon her çalıştığında geri döndüğü array'in ilk 10 elemanı aynı olmalı, son elemanı hep farklı olmalı.
Aynı kişiye 2. bir araba denk gelmemeli. Bunu nasıl yapabilirsin? */

function lottery(array) {
    const isimler = [...array];
    const sanslilar = [];
  
    sanslilar.push(isimler[0]);
    sanslilar.push(isimler[1]);
    sanslilar.push(isimler[2]);
    sanslilar.push(isimler[3]);
    sanslilar.push(isimler[4]);
  
    sanslilar.push(isimler[9]);
    sanslilar.push(isimler[19]);
    sanslilar.push(isimler[29]);
    sanslilar.push(isimler[39]);
    sanslilar.push(isimler[49]);
  
    isimler.splice(49, 1);
    isimler.splice(39, 1);
    isimler.splice(29, 1);
    isimler.splice(19, 1);
    isimler.splice(9, 1);
  
    const elemanSayisi = isimler.length;
    const sansli = Math.floor(Math.random() * elemanSayisi);
    sanslilar.push(isimler[sansli]);
    return sanslilar;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = lottery;
  