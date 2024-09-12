//Görev 1: Değişken tanımlama
/* result isimli bir değişken tanımlayalım ve değerini 0 yapalım.
puan1, puan2, puan3, puan4 isimli 4 ayrı değeri sabit olan bir değişken tanımlayalım ve değerleri sırasıyla 10, 20, 30, 40 yapalım.
Tüm puanları result isimli değişkende toplayalım. */

let result = 0;
const puan1 = 10;
const puan2 = 20;
const puan3 = 30;
const puan4 = 40;
result = puan1 + puan2 + puan3 + puan4;
console.log(result);


/* Görev 2: Koşullu İfadeler

yas isimli bir değişken tanımlayalım ve değerini 0-100 arası bir sayı yapalım.
ucret isimli bir değişken tanımlayalım ve değerini 450 yapalım.
Tren bilet ücretindeki indirim oranları aşağıdaki gibidir. yaşa göre indirim oranlarını kullanarak ödenmesi gereken ucret degerini guncelleyin.

Eğer yas 65-100 arasında ise ücretsiz seyahat edebilir.
Eğer yas 25-65 arasında indirim yok. (65 hariç).
Eğer yas 15-25 arasında %50 indirimli seyahat edebilir. (25 hariç).
Eğer yas 10-15 arasında %80 indirimli seyahat edebilir. (15 hariç).
Eğer yas 0-10 arasında ise ücretsiz seyahat edebilir. (10 hariç).
İpucu 1: Bunun içi koşul ifadesi olan 'if' kullanılabilir.
İpucu 2: %20 indirim uygulanmış fiyatı hesaplamak için 0.80 ile çarpabilirsin.
İpucu 3: 3'ten fazla koşul olduğu zaman 'if else if else' şeklinde kullanılabilirsin. */

const yas = 10;
let ucret = 450;
if (yas >= 65 || yas < 10) {
  ucret = 0;
} else if (yas < 15) {
  ucret = ucret * 0.2;
} else if (yas < 25) {
  ucret = ucret * 0.5;
} else {
  ucret = ucret;
}

/* Gün Projesi: Dönem Sonu Notu Uygulaması

Çalıştığınız yazılım şirketi bir üniversiteye platform geliştiriyor. Siz de geliştirme ekibine alındınız. Ve ekip yöneticinizden sabah bir email aldınız. Projenin önemli bir kodunu yazmanızı istiyor: "Öğrencilerin sınav sonuçlarını hesaplayan kodu yazıp bugün akşama kadar gönderir misin? Kolay gelsin." Böylece yazılımcı olarak ilk işinizi aldınız. Başarılar!

Yöneticiniz bilgi notunda şu detayları vermiş:

Kodun öğrencinin dönem sonu notunu hesaplayacak.
Dönem sonu notu, öğrencinin final ve vize notundan hesaplanacak. Vizenin ağırlığı %30, finalin ise %70. Örneğin, vizeden 50, finalden 100 almışsa, notu 85 olacak.
Projede diğer arkadaşların kodlarıyla uyumlu olması için onların kullandığı değişken adlarını kullan. Vize notunu, final notunu, dönem sonu ortalamasını ve harf notunu temsilen sırayla vize, final, donemNotu, harfNotu adlarında değişkenler oluşturalım.
Okulda notlar A, B, C, D, E, ya da F şeklinde veriliyor:
Eğer dönem puanı 90-100 arasında ise harfNotu değerini 'A' yapalım.
Eğer dönem puanı 80-89 arasında ise harfNotu değerini 'B' yapalım.
Eğer dönem puanı 70-79 arasında ise harfNotu değerini 'C' yapalım.
Eğer dönem puanı 60-69 arasında ise harfNotu değerini 'D' yapalım.
Eğer dönem puanı 50-59 arasında ise harfNotu değerini 'E' yapalım.
Eğer dönem puanı 50'nin altında ise harfNotu değerini 'F' yapalım. */

const vize = 50;
const final = 100;
const donemNotu = vize * 0.3 + final * 0.7;
let harfNotu;
if (donemNotu >= 90) {
  harfNotu = 'A';
} else if (donemNotu >= 80) {
  harfNotu = 'B';
} else if (donemNotu >= 70) {
  harfNotu = 'C';
} else if (donemNotu >= 60) {
  harfNotu = 'D';
} else if (donemNotu >= 50) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}