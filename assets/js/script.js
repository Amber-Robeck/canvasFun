var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext('2d');
//draw does not function properly without this line
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//from mdn
// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     ctx.font = '48px serif';
//     ctx.fillText('Hello world', 10, 50);


//displays hello world within draw function

// function draw() {
//     ctx.font = '25px serif';
//     ctx.fillText('Hello world', 10, 50);
// }
// draw();

// shows 2dobj
// console.log(ctx);


var mouseClick = {
    x: undefined,
    y: undefined,
}


//onclick draw
// canvas.addEventListener("click", function (event) {
//     console.log("working")

//     mouseClick.x = event.x;
//     mouseClick.y = event.y;
//     draw();
// });

//onmousemove draw
canvas.addEventListener("mousemove", function (event) {
    mouseClick.x = event.x;
    mouseClick.y = event.y;
    draw();
}
)
function draw() {
    ctx.fillStyle = "gray";
    ctx.strokeStyle = "darkGray";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(mouseClick.x, mouseClick.y, 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}




