function changeColor(color) {
    chrome.tabs.executeScript(null, {
            "code": "document.body.style.backgroundColor='"+color+"'"
    });
}

document.getElementById('line').onclick = function() {
    changeColor('red');
}

