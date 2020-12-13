# Angular Firebase Todo App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 


Angular 9 ve Firestore 6.1 kullanarak yaptığım todo uygulaması. 

## Projeden Basit Görünüm

![Uygulamadan görsel](todoapp.PNG)

## Uygulamayı Kendi Bilgisayarında Çalıştırmak için Yapmanız Gerekenler

- İlk olarak [Firebase](https://firebase.google.com/) adresinden bir hesap açın.

- Ardından console'a gidin ve yeni bir proje başlatın. 

- Karışına gelen ekrandan web, ios ya da android simgelerinden web'e tıkayın.

![BaslamaEkrani](baslamaEkrani.PNG)

- Gelen Ekrandan uygulamanıza bir ad verin ve uygulamayı kaydete basın.


![Firebase](firebase.PNG)

Eğer böyle bir ekranla karşılatıysanız. Doğru ilerliyorsunuz.

````
firebaseConfig = {
    apiKey: "AIzaSyDa1e8WX_-pYFG_h146ZkYkwzgnNAnPXVE",
    authDomain: "fsefsf.firebaseapp.com",
    projectId: "fsefsf",
    storageBucket: "fsefsf.appspot.com",
    messagingSenderId: "295617756306",
    appId: "1:295617756306:web:70a1a955659a9b26093a4b"
  }

````

- Ekranınızda gördüğünüz firebaseConfig dosyasını kopyalayın. Projemize geçince lazım olacak.

- Şimdi veritabanımızı oluşturalım.

- Ana ekrana geri geldiğinizde sağ tarafta bulunan **realtime database** menüsüne girin.

- Veritabanı oluştura tıklayın. İstediğiniz bir lokasyonu seçin ve ileri diyin.

- **Uygulamayı test modunda** etkinleştirin.

# Angular Projemize dönelim.

- Az önce kopyaladığımız veriyi 

````
  src\environments\enviroment.ts dizinine aşağıdaki gibi yapıştırın.
  
````

````
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDa1e8WX_-pYFG_h146ZkYkwzgnNAnPXVE",
    authDomain: "fsefsf.firebaseapp.com",
    projectId: "fsefsf",
    storageBucket: "fsefsf.appspot.com",
    messagingSenderId: "295617756306",
    appId: "1:295617756306:web:70a1a955659a9b26093a4b"
  }
};
````

````
  npm i firebase @angular/fire 
  çalıştırın ve artık uygulamayı ayağa kaldırmaya hazırız.
  Bunun için ng serve komutunu kullanın. 
````

## Running unit tests

- Not: Testleri yakın zamanda yazmayı planlıyorum.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

