$.ajax({
    type:'get',
    url:'http://localhost/get_project.php',

    success:function(result){
//        console.log(result);
        var setoption = result.split("<br>");
//         console.log(setoption.length);
        
for(i = 0;i < setoption.length - 1;i++){
var setvalue = setoption[i].split("^");
            
            
var select = document.getElementById('select');
var option = document.createElement('option');
option.setAttribute('value',setvalue[0]);
option.innerHTML = setvalue[1];
select.appendChild(option);

            
        }
       
    }
}) ;

var $children = $('.children');
//var original = $children.html();
var $done = $('.done');

//1こ目のドロップダウンリストが変更されたら発火する
$('.parent').change(function() {
 
  //選択された地方のvalueを取得し変数に入れる
  var val1 = $(this).val();
//    alert(val1);
//    alert(form.projectid.value);
 
$.ajax({
    type:'POST',
    url:'http://localhost/getsubject.php',
    data:{projectid:val1},
    success:function(result){
//    console.log(result);
          var setoption = result.split("<br>");
        console.log(setoption);
        
        var select = document.getElementById('subject');
        while (select.firstChild) select.removeChild(select.firstChild);
        var option = document.createElement('option');
option.setAttribute('value',"");
option.innerHTML = "タイトルを選んで下さい";
select.appendChild(option);
        
        for(i = 0;i < setoption.length - 1;i++){
var setvalue = setoption[i].split("^");
//            console.log(setvalue);
   
var option = document.createElement('option');
option.setAttribute('value',setvalue[0]);
option.innerHTML = setvalue[1];
select.appendChild(option);
            
        }

    }
})
 
  //地方側のselect要素が未選択の場合、都道府県をdisabledにする
  if ($(this).val() == "") {
    $children.attr('disabled', 'disabled');
  } else {
    $children.removeAttr('disabled');
  }
 
});

//2こ目のダウンドロップリストが変更されたら発火する
$('.children').change(function() {
    var val1 = form.projectid.value;
    var val2 = form.subject.value;
//    alert(val1);
//    alert(val2);
$.ajax({
    type:'POST',
    url:'http://localhost/getdetails.php',
    data:{projectid:val1,subjectid:val2},
    success:function(result){
        var setresult = result.split("^");
        console.log(setresult);
        var result = document.getElementById('result');
         while (result.firstChild) result.removeChild(result.firstChild);
        
//        var title = document.createElement('h3');
//        title.innerHTML = setresult[0];
//        result.appendChild(title);
        
        //完了ボタンを追加しようとしてみた
//        var done = document.createElement('input');
//        done.setAttribute('type','button');
//        done.setAttribute('name','done');
//        done.setAttribute('value','完了');
//        done.setAttribute('id','done');
//        result.appendChild(done);
        
        var img = document.createElement('img');
        img.setAttribute('src',setresult[1]);
        img.setAttribute('width',400);
        img.setAttribute('height',400);
        result.appendChild(img);
        
         var details = document.createElement('h7');
        details.innerHTML = setresult[2];
        result.appendChild(details);
        
}
})
    if ($(this).val() == "") {
    $done.attr('disabled', 'disabled');
  } else {
    $done.removeAttr('disabled');
  }
    
});
    
   
    //完了ボタンを押された時の処理
    document.getElementById('done').onclick = function () {
        if(window.confirm('確認ボタンからこのissueを見ることができなくなりますがよろしいですか？')){
    console.log(form.projectid.value);
    console.log(form.subject.value);
        
        val1 = form.projectid.value;
        val2 = form.subject.value;
        
        
        $.ajax({
            type:'POST',
              url:'http://localhost/done.php',
           data:{projectid:val1,subjectid:val2},
            success:function(result){
                alert("完了処理を行いました");
            }
        })
        }else{
            window.alert('キャンセルしました');
        }
}

    
    
    
    