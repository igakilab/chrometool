document.getElementById('write').onclick = function () {
    screen_writing();
}

document.getElementById('save').onclick = function () {
    save_screen();
}

document.getElementById('sousin').onclick = function () {
   location.href ="sousin.html";
}

document.getElementById('sinki').onclick = function(){
    location.href = "sinki.html";
}

document.getElementById('kakunin').onclick = function(){
    location.href = "kakunin.html";
}

document.getElementById('datakakunin').onclick = function(){

//    open("http://localhost/kakunin.php","_blank");
    location.href = "database.html";
}

//document.getElementById('get').onclick = function () {
// get_project();
//}

function screen_writing() {
  chrome.tabs.executeScript(null,{
    file:"jquery-3.2.1.min.js"
  });
    chrome.tabs.executeScript(null,{
       file:"write.js" 
    });
    chrome.tabs.executeScript(null,{
        "code": "paint()"
    });
}

function save_screen() {
     chrome.tabs.executeScript(null,{
    file:"jquery-3.2.1.min.js"
  });
    chrome.tabs.executeScript(null,{
       file:"html2canvas.js" 
    });
    chrome.tabs.executeScript(null,{
        "file": "photo.js"
    });
}

//function get_project() {
//    chrome.tabs.executeScript(null,{
//    file:"jquery-3.2.1.min.js"
//  });
//    chrome.tabs.executeScript(null,{
//        file:"getprojectname.js" 
//    });
//}
//


