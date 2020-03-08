var canvas= document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100, 100,100);
c.fillRect(200, 200, 100, 100);
c.fillRect(300, 300, 100, 100);

//Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,300);
c.strokeStyle = '#fa34a3';

c.stroke();

//arc (circle)

for(var i=0;i<5000;i++)    {

    var x= Math.random()*window.innerWidth;

    var y = Math.random()*window.innerHeight;

    c.beginPath();
    c.arc(x,y, 25, Math.PI*2,false);
    c.strokeStyle ='rgba(255, 0, 0, 0.5)';
    c.stroke();

    
}

console.log(canvas);