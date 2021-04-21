function myFunction() {

    const endpoint = "http://httpbin.org/";



    // (1)XMLHttpRequestオブジェクトを作成
var xmlHttpRequest = new XMLHttpRequest();

// (2)onreadystatechangeイベントで処理の状況変化を監視
xmlHttpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
}

// (3)HTTPのGETメソッドとアクセスする場所を指定
xmlHttpRequest.open('GET',endpoint,true);

// (4)HTTPリクエストを送信
xmlHttpRequest.send();


console.log("iku!");
    
  
  }