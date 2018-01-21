var arg = new Object;
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
}
console.log(arg.subjectid);
var val1 = arg.subjectid;

$.ajax({
    type:'POST',
    url:'http://localhost/databasedetails.php',
    data:{subjectid:val1},
    success:function(result){
//        console.log(result);
        var setresult = result.split("<br>");
//        console.log(setresult);
        var result = document.getElementById('result');
        for (i = 0;i < setresult.length - 1; i++){
            var setvalue = setresult[i].split("^");
//            console.log(setvalue);
            var img = document.createElement('img');
            img.setAttribute('src',setvalue[0]);
            img.setAttribute('width',400);
            img.setAttribute('height',400);
            result.appendChild(img);
            
            var details = document.createElement('h7');
            details.innerHTML = setvalue[1];
            result.appendChild(details);
        }
    }
})

