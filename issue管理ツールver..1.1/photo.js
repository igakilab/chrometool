
html2canvas(document.body, {
  onrendered: function(canvas) {
  
    document.body.appendChild(canvas);
    canvas.style.backgroundColor="#FFF";


    html2canvas(canvas, {
      onrendered: function(mycanvas) {
        saveCanvas(mycanvas);
    canvas.style.display="none";
      }
    });
  }
});



function saveCanvas(canvas){
  var imageType = "image/jpg";
  var fileName = "sample.jpg";
  var base64 = canvas.toDataURL(imageType);
//    console.log(base64);
    var url = location.href ;
    console.log(url);
  var count = 1;
  var name="test";
 $.ajax({
     url:'http://localhost/storage.php',
      data:{img_data:base64,img_id:count,name:name,url:url},

     type:"POST",
     contentType:"application/x-www-form-urlencoded",
    success:function(result){
        alert("保存されました");
    }
 });
    
  // base64データをblobに変換
//  var blob = Base64toBlob(base64);
//    sendImageBinary(blob);

    
    
  // blobデータをa要素を使ってダウンロード
//  saveBlob(blob, fileName);
}
// Base64データをBlobデータに変換
function Base64toBlob(base64)
{
    // カンマで分割して以下のようにデータを分ける
    // tmp[0] : データ形式（data:image/png;base64）
    // tmp[1] : base64データ（iVBORw0k～）
    var tmp = base64.split(',');
    // base64データの文字列をデコード
    var data = atob(tmp[1]);
    // tmp[0]の文字列（data:image/png;base64）からコンテンツタイプ（image/png）部分を取得
	var mime = tmp[0].split(':')[1].split(';')[0];
    //  1文字ごとにUTF-16コードを表す 0から65535 の整数を取得
	var buf = new Uint8Array(data.length);
	for (var i = 0; i < data.length; i++) {
        buf[i] = data.charCodeAt(i);
    }
    // blobデータを作成
	var blob = new Blob([buf], { type: mime });
    return blob;
}
 
// 画像のダウンロード
function saveBlob(blob, fileName)
{
    var url = (window.URL || window.webkitURL);
    // ダウンロード用のURL作成
    var dataUrl = url.createObjectURL(blob);
    // イベント作成
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    // a要素を作成
    var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    // ダウンロード用のURLセット
    a.href = dataUrl;
    // ファイル名セット
    a.download = fileName;
    // イベントの発火
    a.dispatchEvent(event);
}

var sendImageBinary = function(blob) {
	var formData = new FormData();
	formData.append('acceptImage', blob);
    console.log(formData.acceptImage);
    console.log(blob);
	$.ajax({
		type: 'POST',
		url: 'http://localhost/storage.php',
		data: formData,
		contentType: false,
		processData: false,
		success:function(date, dataType){
			var $img = $('img');
			var imgSrc = $img.attr('src');
			$img.attr('src', "");
			$img.attr('src', imgSrc + '?' + (new Date())*1);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
		}
	});
};

