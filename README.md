# Bitirme Tezinin Konu Basliklari, Guncellenebilinir Tekrardan

1. Video Konferans Sistemi ve Yapay Zeka 
    1. Video Konferans Sistemi
        1. Video Konferansın Sistenin Tarihçesi
        2. Video Konferansın Kullanım Alanları
        3. Tarayicida Video Konferans Deneyimi
        4. …
    2. Yapay Zeka
        1. Kullaninim Alanlarına Gore Yapay Zeka Teknikleri
        2. Yapay Zeka’nin Tarihçesi
        3. …
        4. …
    3. Video Konferans ile Yapay Zekanin Birlikte Kullanımı
        1. …
        2. …
        3. …

2. Sayisal Görüntu ve Ses Isleme Teknikleri
    1. Sayısal Görüntü Isleme 
        1. Görüntü Isleme Temelleri ve Kullanım Alanları
        2. Görüntü Islemede Kullanılan Terimler
        3. Yuz tanilama ve bulma
        4. Görüntü Isleme ile Duygu Analizi
    2. Sayısal Ses Isleme
        1. Sayısal Ses Islemenin Temelleri
        2. Ses Tanıma Yöntemleri
        3. Ses Kodlama Yöntemleri
        4. Sesi Metne Çevirme Metotlari
3. Kullanılan Teknolojiler ve Metotlar
    1. Kullanılan Teknolojiler
        1. On Uc Teknolojieri(Frontend)
        2. Arka Uc Teknolojileri(Backend)
    2. Metotlar
        1. …


# Graduation Project Backend

Yapmis oldugumuz projemizde, teknoloji cagina ayak uydurmak ve gunumuzde yapilan bircok isin(egitim, is toplantlari, kocluk vb.) uzaktan oldugunu goz onunde buludurdugumuz zaten uzerinde calistigimiz ve gelistirdigimiz projede kisisel bilgilerin korunmasiyla birlikte istenildigi zaman kayit altina alarak daha surdurulebilir hale getirdik.



## Proje Amaci
- Projede, kisisel verilerin korunmasi kanunu dahilinde  yapay zekayi kullanmaktayiz. 
- Video konferans sistemimizde, isitsel engelliler icin anlik konusulanlar metin halinda veya istege bagli olarak tercume etmekteyiz.
- Video konferansta konusulanlarin anlik olarak takip etmek ve daha sonrasinda istege bagli olarak indirilip kullanilmasi hedeflenmektedir.
- Video konferans sistemimizde anlik kamera goruntulerini yapay zeka ile duygu analizi ve nesne takibi ile kullanim alanina gore cikarimlar yapilabilmektedir.


## Proje Ozellikleri
- Video Konferans ortami olusturulduk
- Mesajlasma
- Ekran Paylasimi
- Toplanti Kaydi
- Ses analizi
- Toplantida konusulanlari metine cevirme
- Konusulanlari anlik olarak istenilen dile tercume etme
- Konusulanlari istege bagli olarak indirme
- Video konferans sisteminde goruntu isleme ile duygu analizi
- Video konferans sisteminde konusulanlari takip edilip edilmedigini goruntu islemeyle tespit etme


## Yenilikci Yonu
...

## Used technologies
Backend tarafinda bir server ayaga kalkmaktadir bu server'ida Express.js framework'u ile yapmaktayiz. Socket programlama icin yogun kullanilan socket.io kutuphanesini tercih ettik. 
Frontend tarafinda ise react kullanilmaktadir server ile haberlesmeyi socket.io-client kutuphanesini kullanmaktayiz. Kamera, ses ve ekran paylasimi gibi ozellikler icin tarayicilarin webRTC apilerini kullanmaktayiz.

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose

### Frontend
- HTML
- CSS
- SASS
- React.js
- Socket.io Client
- webRTC
- Reactstrap
- MetarialUI
- Jest

### Desktop
- Electron.js
- React.js

## Project Screenshot
![Project Login Page](https://user-images.githubusercontent.com/57585087/156552155-dddc4655-a565-4e89-aea9-383400eace30.png)

![Enter Username Page](https://user-images.githubusercontent.com/57585087/156552156-e6a504ca-8fbe-486e-a66a-a295d3117d46.png)

![Project Dashboard Page](https://user-images.githubusercontent.com/57585087/156552151-b78d141f-909f-4e81-ac75-1d7b4d9ba99a.png)

## Project Use Case Diagram
![use-case-diagram](https://user-images.githubusercontent.com/57585087/156552142-01e5834d-fd0a-4e52-8fb6-c5ad02393e96.png)
