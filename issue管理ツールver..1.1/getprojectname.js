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
}) 
