 

document.getElementById('submit').onclick = function () {
    setproject();
}


function setproject(){
  $.ajax({
        type:"POST",
        url:'http://localhost/set.php',
//         data:{img_data:base64,img_id:count,name:name},
        data:{projectid:form.projectid.value,
              title:form.title.value,
              details:form.details.value
             },

   
     contentType:"application/x-www-form-urlencoded",
         success:function(result){
          alert("送信しました");
              location.href = "popup.html";
     
    }
    })
}
