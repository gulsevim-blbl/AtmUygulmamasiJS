/* 
1- Bakiye Görüntüleme
2- Para Çekme
3- Para Yatırma
4-Çıkış

ATM Uygulaması

*/
let yeniSatir = "\r\n";
let Bakiye = 1000;
let metin = "1- Bakiye Görüntüleme" + yeniSatir
+ "2- Para Çekme" + yeniSatir
+ "3- Para Yatırma" + yeniSatir
+ "4- Çıkış" + yeniSatir
+ "Lütfen Bir Değer Seçiniz.";

// alert(metin);

let secim = prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz:" + Bakiye);
       break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek İstediğinizTutarı Giriniz:"));
        if(cekilecekTutar){
            Bakiye = Bakiye -cekilecekTutar;
            alert("Kalan Bakiye: "+ Bakiye);
        }else{
            alert("Bakiyenizden Fazla Para Çekemezsiniz" + yeniSatir
            + "Bakiyeniz:" + Bakiye + " " + "Cekilecek Tutar:" + cekilecekTutar);
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı Giriniz:"));
       Bakiye =  Bakiye + yatirilacakTutar;
        alert("Güncel Bakiyeniz" + Bakiye);
        break;
    case "4":    
        console.log("Sistemden Çıkılmıştır...")
        break;
    default:
           console.log(" Lütfen 1- 4 arasında değer giriniz!");
           break; 
}