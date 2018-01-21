var $children = $('.children');


//ページが開かれると自動でprojectnameを取得する
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
});

//一つ目のドロップダウンリストが変更されると発火する
$('.parent').change(function(){
    var val1 = form.projectid.value;
    
   $.ajax({
       type:'POST',
       url:'http://localhost/geturl.php',
       data:{projectid:val1},
       success:function(result){
//           console.log(result);
           var setoption = result.split("<br>");
//           console.log(setoption);
           var url = document.getElementById('url');
           while(url.firstChild) url.removeChild(url.firstChild);
           
            var option = document.createElement('option');
           option.setAttribute('value',"");
           option.innerHTML = "urlを選んで下さい";
           url.appendChild(option);
           
           for(i = 0;i < setoption.length - 1;i++){
               var setvalue = setoption[i];
               var url = document.getElementById('url');
               var option = document.createElement('option');
               option.setAttribute('value',setvalue);
               option.innerHTML = setvalue;
               url.appendChild(option);
           }
       }
       
   })
    
    if ($(this).val() == "") {
    $children.attr('disabled', 'disabled');
  } else {
    $children.removeAttr('disabled');
  }
    
});

//二つ目のドロップダウンリストが変されると発火する
$('.children').change(function(){
    var val1 = form.projectid.value;
    var val2 = form.url.value;
   
    $.ajax({
        type:'POST',
        url:'http://localhost/getgazou.php',
        data:{projectid:val1,url:val2},
        success:function(result){
           var setresult = result.split("<br>");
            console.log(setresult);
             var result = document.getElementById('result');
            while (result.firstChild) result.removeChild(result.firstChild);
            
            for(i = setresult.length - 2;i > -1;i--){
                var setvalue = setresult[i].split("^");
                console.log(setvalue);
                
               var el_a = document.createElement("a");
	el_a.setAttribute("href", "details.html?subjectid=" + setvalue[0]);
                el_a.setAttribute("class", "hoge"); 
                //別タブ
//                el_a.setAttribute("target", "_blank");
              
                var img = document.createElement('img');
        img.setAttribute('src',setvalue[2]);
        img.setAttribute('width',400);
        img.setAttribute('height',400);
        el_a.appendChild(img);
                
        var details = document.createElement('h7');
        details.innerHTML = setvalue[1];
        result.appendChild(details);
        result.appendChild( document.createElement( 'br' ) );          
                
        result.appendChild(el_a);
        result.appendChild( document.createElement( 'br' ) );  
            }
            
        }
    })
    
    
   
    
})
