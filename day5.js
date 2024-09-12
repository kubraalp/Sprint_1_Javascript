/* Görev 1: En Büyük ve En Küçük Sayı Arasındaki Fark

Mezun olduğun okulda başarıyı ölçmek için yeni bir araştırma yapılıyor. Sınıflardaki en yüksek ve en küçük not arasındaki farkın, zaman içindeki ve öğretmene göre değişimini ölçmek istiyorlar. Her sınıf için ayrı ayrı bu farkı hesaplayacak bir uygulamaya ihtiyaç var.

Bunun için adı difMaxMin olan bir fonksiyon yazalım.
Bu fonksiyon bir sınıftaki notları(array) parametre olarak alsın.
Bu array'deki en büyük sayı ile en küçük sayı arasındaki farkı dönsün.
Örnek Kullanım:

[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
İpucu: Döngü ile max min sayıyı bulabilirsin.
İpucu: veya .sort() metoduna bakabilirsin. */

function stuff(array) {
    if (array.length === 0) {
      return 'Liste boş';
    }
    let enKucuk = array[0];
    let enBuyuk = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < enKucuk) {
        enKucuk = array[i];
      } else if (array[i] > enBuyuk) {
        enBuyuk = array[i];
      }
    }
    return enBuyuk - enKucuk;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = stuff;

  /* Görev 2: Şifre Kurallarında Değişiklik

Çalıştığın şirket aldığı yatırım sonucu büyümeye başladı. Büyük şirket büyük sorumluluk demek. Güvenlik risklerini azaltmak için çalışanların şifrelerinin daha güvenli olmasını istiyorlar. Bunun için şifreleri oluştururken dikkat edilmesi gereken kuralları değiştirdiler. Bu kurallara uymayan kişilerin şifrelerini değiştirmelerini isteyecekler.

Adı resetNeeded olan bir fonksiyon yazalım.
Bu fonksiyon kullanıcı şifrelerinden oluşan bir array'i parametre olarak alsın.
Yeni şifre kurallarına uymayan şifreleri bir liste olarak dönsün.
Yeni şifre kuralları:
en az 8 karakter uzunluğunda olmalı,
en az 1 büyük harf ve 1 küçük harf içermeli,
Örnek Kullanım:

resetNeeded(["Axy1", "aytemiz123", "eRDeM1234", "Hatice12"]) 

["Axy1", "aytemiz123"] dönmeli

İpucu: .toLowerCase() metodunu kullanarak bir karşılaştırma yapabilirsin.
İpucu: döngü yapma, .push(), boş array [], .length yardımcı olabilir. */

function resetNeeded(sifreler) {
    // yeni şifre kurallarına uymayanlar liste olarak dönecek
    const uyumsuzSifreler = [];
    for (let i = 0; i < sifreler.length; i++) {
      const sifre = sifreler[i];
      let uzunlukUygun = false;
      let kucukHarfUygun = false;
      let buyukHarfUygun = false;
  
      // Şifre uzunluğu kontrolü yapılacak
      if (sifre.length >= 8) {
        uzunlukUygun = true;
      }
      // küçük harf kontrolü
      for (let j = 0; j < sifre.length; j++) {
        if (sifre[j] >= 'a' && sifre[j] <= 'z') {
          kucukHarfUygun = true;
          break;
        }
      }
      // büyük harf kontrolü
      for (let k = 0; k < sifre.length; k++) {
        if (sifre[k] >= 'A' && sifre[k] <= 'Z') {
          buyukHarfUygun = true;
          break;
        }
      }
      if (!uzunlukUygun || !kucukHarfUygun || !buyukHarfUygun) {
        uyumsuzSifreler.push(sifre);
      }
    }
    return uyumsuzSifreler;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = resetNeeded;


  /* Görev 3: Kişilik Testi

Yapılan araştırmalar Z kuşağının çalıştığı kurumlara bağımlılıklarının çok azaldığını ortaya koyuyor. Bu yüzden şirketlerin İnsan Kaynakları departmanları kuruma bağlımlılığı artırmak için bir şey yeni metodları deniyorlar. Çalıştığın şirketin İK ekibi de bunun için çalışanların karakter yapılarını nasıl analiz edebileceklerini öğrenmek için bir eğitim katıldılar. Bu eğitim sayesinde, iletişimi çalışanların kendi karakter yapılarına göre şekillendirerek kuruma bağlılıklarını artırmak istiyorlar. Senden istedikleri ise her çalışana yaptıracakları kişilik testi sonucunu hesaplayan bir uygulama geliştirmen.

Kişilik testi:

5 sorudan oluşuyor.

Her sorunun da a,b,c gibi 3 şıkkı var.

Her sorunun şıkları ayrı ayrı puana denk geliyor.

Sorulardan alınan toplam puan üzerinden de katılımcının karakteri ortaya çıkıyor.

Adı myCharacter olan bir fonksiyon yazalım.

Bu fonksiyon kullanıcının 5 soruya verdiği cevapları array olarak alsın.

Verdiği cevaplara göre toplam puanı hesaplansın ve o puana denk gelen karakteri string olarak dönsün.

Soruların Puanları:

Soru: a şıkkı 20, b şıkkı 10, c şıkkı 5 puan
Soru: a şıkkı 10, b şıkkı 5, c şıkkı 20 puan
Soru: a şıkkı 5, b şıkkı 20, c şıkkı 10 puan
Soru: a şıkkı 5, b şıkkı 10, c şıkkı 20 puan
Soru: a şıkkı 10, b şıkkı 20, c şıkkı 5 puan
Toplam puana göre kişilik:

80-100 arası "Cesur"
50-79 arası "Düşünceli"
0-49 ise "Sevimli"
Örnek Kullanım:

myCharacter(["a", "c", "b", "a", "c"]) 

// "Düşünceli" dönmeli (70 puana denk geliyor)
myCharacter(["a", "c", "b", "c", "b"]) 

// "Cesur" dönmeli (100 puana denk geliyor)
İpucu: Her soru için ayrı ayrı if else'ler yazabilirsin.
İpucu: Her sorudan alınan puanı total isimli bir değişkende toplayabilirsin.
İpucu: Merak ediyorsan switch nasıl kullanılır araştırabilirsin.*/

function myCharacter(cevaplar) {
    let total = 0;
  
    for (let i = 0; i < cevaplar.length; i++) {
      if (i === 0) {
        if (cevaplar[i] === 'a') {
          total += 20;
        } else if (cevaplar[i] === 'b') {
          total += 10;
        } else if (cevaplar[i] === 'c') {
          total += 5;
        }
      } else if (i === 1 || i === 3) {
        if (cevaplar[i] === 'a') {
          total += 10;
        } else if (cevaplar[i] === 'b') {
          total += 5;
        } else if (cevaplar[i] === 'c') {
          total += 20;
        }
      } else if (i === 2) {
        if (cevaplar[i] === 'a') {
          total += 5;
        } else if (cevaplar[i] === 'b') {
          total += 20;
        } else if (cevaplar[i] === 'c') {
          total += 10;
        }
      } else if (i === 4) {
        if (cevaplar[i] === 'a') {
          total += 10;
        } else if (cevaplar[i] === 'b') {
          total += 20;
        } else if (cevaplar[i] === 'c') {
          total += 5;
        }
      }
    }
  
    if (total >= 80 && total <= 100) {
      return 'Cesur';
    } else if (total >= 50 && total <= 79) {
      return 'Düşünceli';
    } else {
      return 'Sevimli';
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = myCharacter;

  /* Görev 4: Palindrom

Edebiyatçı kuzenin tezi için araştırma yaparken yeni bir tanımla karşılaştı: Palindrom... Palindrom, tersten okunuşu da aynı olan cümle, sözcük ve sayılara denilmekte. Örn: 6336, Kabak, Küçük, Yatay Senden bir kelimenin palindrom olup olmadığını kontrol eden bir uygulama yazmanı istiyor.

Adı isPalindrom olan bir fonksiyon yazalım.
Bu fonksiyon parametre olarak bir string alsın.
Gelen kelime palindrom ise true dönsün. Değil ise false dönsün.
Örnek Kullanım: isPalindrom("Yapay") // true dönmeli isPalindrom("Teğet") // true dönmeli isPalindrom("Kasım") // false dönmeli

İpucu: Büyük küçük harfe dikkat. */

function isPalindrom(kelime) {
    kelime = kelime.toLowerCase();
    let tersKelime = '';
    for (let i = kelime.length - 1; i >= 0; i--) {
      tersKelime += kelime[i];
    }
    if (kelime === tersKelime) {
      return true;
    } else {
      return false;
    }
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = isPalindrom;

  /* Görev 5: Toplam Alan Hesabı

Marangoz enişten, yeni aldığı bir işte tahtadan dikdörtgenler halinde parçalar hazırlıyor. Bu işin sadece malzeme tutarını hazırladığı parçaların alanlarından hesaplıyor. Senden, toplam malzeme giderini hesaplayacak bir uygyulama yazmanı istedi.

Adı totalArea olan bir fonksiyon yazalım.
Bu fonksiyon parçaların ölçülerini(örn: [yukselik, genislik]) içeren bir listeyi parametre olarak alsın.
Gelen listedeki her bir dikdörtgenin alanını hesaplayıp, toplam alanı dönsün.
Örnek Kullanım: totalArea([[3,5], [2,8], [3,12]]) // 67 dönmeli (35 + 28 + 3*12) totalArea([[1,100], [2,10], [3,40]]) // 240 dönmeli

İpucu: Gelen listenin(array) her bir elemanı 2 elemanlı bir array!
İpucu: Bir alternatif olarak for of döngüsünü araştırabilirsin. */

function totalArea(parcalar) {
    let toplamAlan = 0;
    for (let i = 0; i < parcalar.length; i++) {
      let dikdortgen = parcalar[i];
      let yukseklik = dikdortgen[0];
      let genislik = dikdortgen[1];
      let alan = yukseklik * genislik;
      toplamAlan += alan;
    }
    return toplamAlan;
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = totalArea;

  /* Gün Projesi: Emeklilikte Yaşa Takılanlar(EYT) Hesabı

Emeklilikte Yaşa Takılanlar için devlet kanunda geçici bir düzenleme yayınladı. İlk işe giriş tarihi 1999 ve öncesi olup, kadınlarda 20 yıl, erkeklerde 25 yıl sigortalı olanlar, 5000 gün üzerinde prim yatırmış olma şartı ile EYT düzenlemesi ile erkenden emekli olabiliyor.

Çalıştığın şirketin İnsan Kaynakları(İK) departmanı da senden 3 bilgiyi çıkartmanı istedi: 1- emekli olabileceklerin listesi 2- emekli olanlardan sonra kalan güncel çalışan listesi 3- emekli olanlardan sonra şirketin kalan toplam maaş gideri

İK, çalışan bilgilerini içeren bir liste hazırladı. Bu listede her çalışan için gerekli bilgiler var: [calisanAdi, cinsiyet, iseGirisTarihi, sigortaliYillar, primGunSayisi, guncelMaas]

İstenen bilgileri verebilmek için eytDetaylari adında bir fonksiyon yazalım.
Bu fonksiyon çalışan bilgilerinden oluşan bir array'i parametre olarak alsın.
Geriye bir array olarak [eytliListesi, guncelCalisanListesi, toplamMaasGideri] şeklinde istenen bilgileri geri dönsün.
Örnek Kullanım: const calisanListesi = [ ["Hatice", "Kadın", 1999, 21, 5200, 50000], ["Muhammed", "Erkek", 2001, 22, 5001, 80000], ["Halime", "Kadın", 1995, 17, 5101, 90000], ["Fatma", "Kadın", 2015, 8, 2200, 110000], ["Mehmet Ali", "Erkek", 1994, 26, 4000, 40000], ["Ramazan", "Erkek", 1992, 26, 8200, 75000], ["Furkan", "Erkek", 1999, 24, 3500, 52000], ["Sultan", "Kadın", 2001, 16, 5001, 78000], ["Kadir", "Erkek", 1985, 27, 8000, 150000], ["Şükrü", "Erkek", 2021, 1, 500, 20000], ] eytDetaylari(calisanListesi) aşağıdakini geri dönmeli. [ ["Hatice", "Ramazan", "Kadir"], ["Muhammed", "Halime", "Fatma", "Mehmet Ali", "Furkan", "Sultan", "Şükrü"], 470000 ]

Dikkat:

Geri dönen bilgi array olmalı,
3 elemanlı olmalı,
İlk 2 elemanı gene bir array olmalı, sadece çalışan adlarını içermeli,
eleman bir sayı olmalı, kalanların toplam maaşını vermeli. */

function eytDetaylari(calisanListesi) {
    // EYT için uygun çalışanları depolamak için boş bir dizi oluştur
    let eytliListesi = [];
    // Emekli olmayanları ve toplam maaş giderini depolamak için boş bir dizi ve değişken oluştur
    let guncelCalisanListesi = [];
    let toplamMaasGideri = 0;
  
    // 1999 öncesi yılını belirlemek için
    const tarih1999Oncesi = 1999;
  
    // Her bir çalışanı kontrol et
    calisanListesi.forEach((calisan) => {
      // Çalışan bilgilerini çöz
      const [
        calisanAdi,
        cinsiyet,
        iseGirisTarihi,
        sigortaliYillar,
        primGunSayisi,
        guncelMaas,
      ] = calisan;
  
      // İse giriş yılını hesapla
      const iseGirisYili = iseGirisTarihi;
  
      // Emeklilik yaşını hesapla
      const emeklilikYili = iseGirisYili + (cinsiyet === 'Kadın' ? 20 : 25);
  
      // Emeklilik durumunu kontrol et
      const emekliOlabilirMi =
        iseGirisYili <= tarih1999Oncesi &&
        primGunSayisi >= 5000 &&
        (cinsiyet === 'Kadın' ? sigortaliYillar >= 20 : sigortaliYillar >= 25) &&
        emeklilikYili <= new Date().getFullYear();
  
      if (emekliOlabilirMi) {
        // Emekli olabilecek çalışanı eytliListesi'ne ekle
        eytliListesi.push(calisanAdi);
      } else {
        // Emekli olamayan çalışanları guncelCalisanListesi'ne ekle ve maaş giderini topla
        guncelCalisanListesi.push(calisanAdi);
        toplamMaasGideri += guncelMaas;
      }
    });
  
    // Sonuçları bir dizi olarak döndür
    return [eytliListesi, guncelCalisanListesi, toplamMaasGideri];
  }
  
  /* Bu satırdan sonraki satırları silmeyin! */
  module.exports = eytDetaylari;
  


  