


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
document.getElementById('write').onclick = function () {

    changeColor();
}
