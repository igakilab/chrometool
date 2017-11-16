


function changeColor() {
    chrome.tabs.executeScript(null, {
        file: "jquery-3.2.1.min.js"
    });
    chrome.tabs.executeScript(null, {
        file: "app.js"
    });
    chrome.tabs.executeScript(null, {
        "code": "paint()"
    });
}

function getPhoto() {
     chrome.tabs.executeScript(null, {
        file: "html2canvas.js"
    });
    
    chrome.tabs.executeScript(null, {
        file: "photo.js"
    });
//    chrome.tabs.executeScript(null, {
//        "code": "get()"
//    });
}

function createtab(){
     var c = chrome.extension.getURL("senisaki.html");
    chrome.tabs.create({
          url: c
    });
}

document.getElementById('write').onclick = function () {

    changeColor();
}

document.getElementById('photo').onclick = function () {

    getPhoto();
}

document.getElementById('issue').onclick = function () {

    createtab();
}