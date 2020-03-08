var canvas= document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100,100, 100,100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(300, 300, 100, 100);

//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = '#fa34a3';

c.stroke();

//arc (circle)

// for(var i=0;i<5000;i++)    {

//     var x= Math.random()*window.innerWidth;

//     var y = Math.random()*window.innerHeight;

//     c.beginPath();
//     c.arc(x,y, 25, Math.PI*2,false);
//     c.strokeStyle ='rgba(255, 0, 0, 0.5)';
//     c.stroke();

    
// }


var x= Math.random()*innerWidth;
var dx = 5;
var y= Math.random()*innerHeight;
var dy = 5;
var radius = 50;

function animate()  {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth,innerHeight);
    c.beginPath();
    c.arc(x, y, radius, Math.PI * 2, false);
    c.strokeStyle = '#E0121E';
    c.stroke();

    if(x + radius > innerWidth|| x-radius < 0)   { 

        dx=-dx;

    }


    if (y + radius > innerHeight || y - radius < 0) {

        dy = -dy;

    }
    x += dx;
    y += dy;
    // console.log('eeee');
}
animate();