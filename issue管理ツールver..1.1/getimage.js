
  $.ajax({
        type:"get",
        url:'http://localhost/getimage.php',
         success:function(result){
var img=result;
           
      var result = document.getElementById('result');
var option = document.createElement('img');
option.setAttribute('src',img);
option.setAttribute('width',400);
option.setAttribute('height',400);
result.appendChild(option);
    }
    })
 