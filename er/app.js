
function paint() {

    var mycanvas = document.createElement('canvas');
    mycanvas.setAttribute('id', 'mycanvas');

    var windowInnerWidth = window.innerWidth;
    var windowInnerHeight = window.innerHeight;
    mycanvas.setAttribute('width', windowInnerWidth);
    mycanvas.setAttribute('height', windowInnerHeight);
    mycanvas.style.position = "absolute";
    mycanvas.style.top = "0px";
    mycanvas.style.left = "0px";
    mycanvas.style.zIndex = "2147483647";


    mycanvas.innerHTML = '<p>お試し追加</p>';
    document.body.appendChild(mycanvas);




    var canvas = document.getElementById('mycanvas');
    canvas.style.border = '10px solid #999';
    canvas.style.cursor = 'crosshair';
    if (!canvas || !canvas.getContext) return false;
    var ctx = canvas.getContext('2d');

    var startX,
        startY,
        x,
        y,
        borderWidth = 10,
        isDrawing = false;


    $('#mycanvas').mousedown(function (e) {
        isDrawing = true;
        startX = e.pageX - $(this).offset().left - borderWidth;
        startY = e.pageY - $(this).offset().top - borderWidth;


    })
        .mousemove(function (e) {
            if (!isDrawing) return;
            x = e.pageX - $(this).offset().left - borderWidth;
            y = e.pageY - $(this).offset().top - borderWidth;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(x, y);
            ctx.stroke();
            startX = x;
            startY = y;

        })
        .mouseup(function () {
            isDrawing = false;

        })
        .mouseleave(function () {
            isDrawing = false;
        });
}
