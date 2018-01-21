 

document.getElementById('submit').onclick = function () {
    setprojectname();
}


function setprojectname(){
  $.ajax({
        type:"POST",
        url:'http://localhost/sinkiprojectname.php',

        data:{projectname:form.projectname.value},

   
     contentType:"application/x-www-form-urlencoded",
         success:function(result){
             alert("登録しました");
              location.href = "popup.html";
     
    }
    })
}
