var a = document.getElementById("A");
var b = document.getElementById("B"); 
var y = document.querySelector('canvas') ;

var canvas1 = document.getElementById('myCanvas1');
var canvas2 = document.getElementById('myCanvas2');
var canvas3 = document.getElementById('myCanvas3');
var canvas4 = document.getElementById('myCanvas4');

var row1 = document.querySelector('.rowoOne');
var row2 = document.querySelector('.rowTwo');
var row3 = document.querySelector('.rowThree');
var row4 = document.querySelector('.rowFour');

var valueForA = 0;
var valueForB = 0;
    a.addEventListener('change', () => {
        if (a.checked) {
          valueForA = 1;
          console.log("Value for A is " + valueForA +" Value for B is "+ valueForB);
      }
        else {
          valueForA = 0;
          console.log("Value for A is " + valueForA +" Value for B is "+ valueForB);
        }
      });

  
    b.addEventListener('change', () => {
        if (b.checked) {
          valueForB = 1;
          console.log("Value for A is " + valueForA +" Value for B is "+ valueForB);
        } else {
          valueForB = 0;
          console.log("Value for A is " + valueForA + " Value for B is "+ valueForB);
        }
      });

      a.addEventListener('change', () => {
        changeCanvasVisibility();
      });
      
      b.addEventListener('change', () => {
        changeCanvasVisibility();
      });
      
      function changeCanvasVisibility() {
        if (valueForA === 0 && valueForB === 0) {
          canvas1.classList.remove('canvasDisplay');
          canvas2.classList.add('canvasDisplay');
          canvas3.classList.add('canvasDisplay');
          canvas4.classList.add('canvasDisplay');
        } else if (valueForA === 0 && valueForB === 1) {
          canvas1.classList.add('canvasDisplay');
          canvas2.classList.remove('canvasDisplay');
          canvas3.classList.add('canvasDisplay');
          canvas4.classList.add('canvasDisplay');
        } else if (valueForA === 1 && valueForB === 0) {
          canvas1.classList.add('canvasDisplay');
          canvas2.classList.add('canvasDisplay');
          canvas3.classList.remove('canvasDisplay');
          canvas4.classList.add('canvasDisplay');
        } else if (valueForA === 1 && valueForB === 1) {
          canvas1.classList.add('canvasDisplay');
          canvas2.classList.add('canvasDisplay');
          canvas3.classList.add('canvasDisplay');
          canvas4.classList.remove('canvasDisplay');
        }
      }

      function addRowColor() {
        if (valueForA === 0 && valueForB === 0) {
          row1.classList.add('rowColor');
          row2.style.backgroundColor = "green";
          row3.style.backgroundColor = "blue";
          row4.style.backgroundColor = "yellow";
        } else if (valueForA === 0 && valueForB === 1) {
          row1.style.backgroundColor = "green";
          row2.style.backgroundColor = "red";
          row3.style.backgroundColor = "yellow";
          row4.style.backgroundColor = "blue";
        } else if (valueForA === 1 && valueForB === 0) {
          row1.style.backgroundColor = "red";
          row2.style.backgroundColor = "yellow";
          row3.style.backgroundColor = "green";
          row4.style.backgroundColor = "blue";
        } else if (valueForA === 1 && valueForB === 1) {
          row1.style.backgroundColor = "blue";
          row2.style.backgroundColor = "red";
          row3.style.backgroundColor = "yellow";
          row4.style.backgroundColor = "green";
        }
      }
// Draw on each canvas separately
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');

function resizeCanvas() {
    const canvasElements = document.getElementsByTagName('canvas');
    for (const canvas of canvasElements) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Draw on the canvas if needed
      const ctx = canvas.getContext('2d');
      // Add your drawing or animation logic here
   
      if(window.matchMedia('(min-width: 1600px)').matches){
    // for A=0  and B=0    CTX=1
      drawCircle(ctx1,1100,450,300,'orange', 'white',10)
      drawRectangle(ctx1,500,150,600,600,'orange', 'white',10)
      drawLine(ctx1,200,300,300,40,'orange',10);
      drawLine(ctx1,200,550,300,40,'orange',10);
      drawLine(ctx1,1400,420,300,40,'orange',10);
      ctx1.clearRect(1090,155,15,590,10);
      ctx1.clearRect(495,305,20,30,10);
      ctx1.clearRect(495,555,20,30,10);
      ctx1.clearRect(1395,425,20,30,10);
      drawSquare(ctx1,100,270,100,100,10);
      drawSquare(ctx1,100,520,100,100,10);
      drawSquare(ctx1,1700,390,100,100,10);
      ctx1.clearRect(195,305,20,30,10);
      ctx1.clearRect(195,555,20,30,10);
      ctx1.clearRect(1695,425,20,30,10);

      // for A=0  and B=1    CTX=2
      drawCircle(ctx2,1100,450,300,'orange', 'white',10)
      drawRectangle(ctx2,500,150,600,600,'orange', 'white',10)
      drawLine(ctx2,200,300,300,40,'orange',10);
      drawLine(ctx2,200,550,300,40,'orange','orange',10);
      drawLine(ctx2,1400,420,300,40,'orange','white',10);
      ctx2.clearRect(1090,155,15,590,10);
      ctx2.clearRect(495,305,20,30,10);
      // ctx2.clearRect(495,555,20,30);
      ctx2.clearRect(1395,425,20,30,10);
      drawSquare(ctx2,100,270,100,100,'orange','white',10);
      drawSquare(ctx2,100,520,100,100,'orange','orange',10);
      drawSquare(ctx2,1700,390,100,100,'orange','white',10);
      ctx2.clearRect(195,305,20,30,10);
      // ctx2.clearRect(195,555,20,30)
      ctx2.clearRect(1695,425,20,30,10);

      // for A=1  and B=0    CTX=3
      drawCircle(ctx3,1100,450,300,'orange', 'white',10);
      drawRectangle(ctx3,500,150,600,600,'orange', 'white',10);
      drawLine(ctx3,200,300,300,40,'orange','orange',10);
      drawLine(ctx3,200,550,300,40,'orange', 'white',10);
      drawLine(ctx3,1400,420,300,40,'orange', 'white',10);
      ctx3.clearRect(1090,155,15,590,10);
      // ctx3.clearRect(495,305,20,30);
      ctx3.clearRect(495,555,20,30,10);
      ctx3.clearRect(1395,425,20,30,10);
      drawSquare(ctx3,100,270,100,100,'orange', 'orange',10);
      drawSquare(ctx3,100,520,100,100,'orange', 'white',10);
      drawSquare(ctx3,1700,390,100,100,10);
      // ctx3.clearRect(195,305,20,30);
      ctx3.clearRect(195,555,20,30,10);
      ctx3.clearRect(1695,425,20,30,10);

      // for A=1  and B=1    CTX=4
      drawCircle(ctx4,1100,450,300,'orange', 'orange',10);
      drawRectangle(ctx4,500,150,600,600,'orange', 'orange',10);
      drawLine(ctx4,200,300,300,40,'orange','orange',10);
      drawLine(ctx4,200,550,300,40,'orange','orange',10);
      drawLine(ctx4,1400,420,300,40,'orange','orange',10);
      drawSquare(ctx4,100,270,100,100,'orange','orange',10);
      drawSquare(ctx4,100,520,100,100,'orange','orange',10);
      drawSquare(ctx4,1700,390,100,100,'orange','orange',10);
    }
    else if(window.matchMedia('(min-width: 1400px)').matches){
      canvas.width = 800;
      canvas.height = 400;

      // for A=0  and B=0    CTX=1
      drawCircle(ctx1,440,190,100,'orange', 'white',4);
      drawRectangle(ctx1,240,90,200,200,'orange', 'white',4);
      drawLine(ctx1,120,130,120,20,'orange',4);
      drawLine(ctx1,120,230,120,20,'orange',4);
      drawLine(ctx1,540,175,120,20,'orange',4);
      ctx1.clearRect(430,92,15,196);
      ctx1.clearRect(235,132,20,16);
      ctx1.clearRect(235,232,20,16);
      ctx1.clearRect(535,177,20,16);
      drawSquare(ctx1,80,120,40,40);
      drawSquare(ctx1,80,220,40,40);
      drawSquare(ctx1,660,165,40,40);
      ctx1.clearRect(115,132,20,16);
      ctx1.clearRect(115,232,20,16);
      ctx1.clearRect(655,177,20,16);
      
      // for A=0  and B=1    CTX=2
      drawCircle(ctx2,440,190,100,'orange', 'white',4)
      drawRectangle(ctx2,240,90,200,200,'orange', 'white',4)
      drawLine(ctx2,120,130,120,20,'orange',4);
      drawLine(ctx2,120,230,120,20,'orange','orange',4);
      drawLine(ctx2,540,175,120,20,'orange','white',4);
      ctx2.clearRect(430,92,15,196);
      ctx2.clearRect(235,132,20,16);
      // ctx2.clearRect(495,555,20,30);
      ctx2.clearRect(535,177,20,16);
      drawSquare(ctx2,80,120,40,40,'orange','white',4);
      drawSquare(ctx2,80,220,40,40,'orange','orange',4);
      drawSquare(ctx2,660,165,40,40,'orange','white',4);
      ctx2.clearRect(115,132,20,16);
      // ctx2.clearRect(195,555,20,30)
      ctx2.clearRect(655,177,20,16);

      // for A=1  and B=0    CTX=3
      drawCircle(ctx3,440,190,100,'orange', 'white',4);
      drawRectangle(ctx3,240,90,200,200,'orange', 'white',4);
      drawLine(ctx3,120,130,120,20,'orange','orange',4);
      drawLine(ctx3,120,230,120,20,'orange', 'white',4);
      drawLine(ctx3,540,175,120,20,'orange', 'white',4);
      ctx3.clearRect(430,92,15,196);
      // ctx3.clearRect(495,305,20,30);
      ctx3.clearRect(235,232,20,16);
      ctx3.clearRect(535,177,20,16);
      drawSquare(ctx3,80,120,40,40,'orange', 'orange',4);
      drawSquare(ctx3,80,220,40,40,'orange', 'white',4);
      drawSquare(ctx3,660,165,40,40,4);
      // ctx3.clearRect(195,305,20,30);
      ctx3.clearRect(115,232,20,16);
      ctx3.clearRect(655,177,20,16);

      // for A=1  and B=1    CTX=4
      drawCircle(ctx4,440,190,100,'orange', 'orange',4);
      drawRectangle(ctx4,240,90,200,200,'orange', 'orange',4);
      drawLine(ctx4,120,130,120,20,'orange','orange',4);
      drawLine(ctx4,120,230,120,20,'orange','orange',4);
      drawLine(ctx4,540,175,120,20,'orange','orange',4);
      drawSquare(ctx4,80,120,40,40,'orange','orange',4);
      drawSquare(ctx4,80,220,40,40,'orange','orange',4);
      drawSquare(ctx4,660,165,40,40,'orange','orange',4);
    }
    else if(window.matchMedia('(min-width: 900px)').matches){
      canvas.width = 800;
      canvas.height = 400;

      // for A=0  and B=0    CTX=1
      drawCircle(ctx1,440,190,100,'orange', 'white',4);
      drawRectangle(ctx1,240,90,200,200,'orange', 'white',4);
      drawLine(ctx1,120,130,120,20,'orange',4);
      drawLine(ctx1,120,230,120,20,'orange',4);
      drawLine(ctx1,540,175,120,20,'orange',4);
      ctx1.clearRect(430,92,15,196);
      ctx1.clearRect(235,132,20,16);
      ctx1.clearRect(235,232,20,16);
      ctx1.clearRect(535,177,20,16);
      drawSquare(ctx1,80,120,40,40);
      drawSquare(ctx1,80,220,40,40);
      drawSquare(ctx1,660,165,40,40);
      ctx1.clearRect(115,132,20,16);
      ctx1.clearRect(115,232,20,16);
      ctx1.clearRect(655,177,20,16);
      
      // for A=0  and B=1    CTX=2
      drawCircle(ctx2,440,190,100,'orange', 'white',4)
      drawRectangle(ctx2,240,90,200,200,'orange', 'white',4)
      drawLine(ctx2,120,130,120,20,'orange',4);
      drawLine(ctx2,120,230,120,20,'orange','orange',4);
      drawLine(ctx2,540,175,120,20,'orange','white',4);
      ctx2.clearRect(430,92,15,196);
      ctx2.clearRect(235,132,20,16);
      // ctx2.clearRect(495,555,20,30);
      ctx2.clearRect(535,177,20,16);
      drawSquare(ctx2,80,120,40,40,'orange','white',4);
      drawSquare(ctx2,80,220,40,40,'orange','orange',4);
      drawSquare(ctx2,660,165,40,40,'orange','white',4);
      ctx2.clearRect(115,132,20,16);
      // ctx2.clearRect(195,555,20,30)
      ctx2.clearRect(655,177,20,16);

      // for A=1  and B=0    CTX=3
      drawCircle(ctx3,440,190,100,'orange', 'white',4);
      drawRectangle(ctx3,240,90,200,200,'orange', 'white',4);
      drawLine(ctx3,120,130,120,20,'orange','orange',4);
      drawLine(ctx3,120,230,120,20,'orange', 'white',4);
      drawLine(ctx3,540,175,120,20,'orange', 'white',4);
      ctx3.clearRect(430,92,15,196);
      // ctx3.clearRect(495,305,20,30);
      ctx3.clearRect(235,232,20,16);
      ctx3.clearRect(535,177,20,16);
      drawSquare(ctx3,80,120,40,40,'orange', 'orange',4);
      drawSquare(ctx3,80,220,40,40,'orange', 'white',4);
      drawSquare(ctx3,660,165,40,40,4);
      // ctx3.clearRect(195,305,20,30);
      ctx3.clearRect(115,232,20,16);
      ctx3.clearRect(655,177,20,16);

      // for A=1  and B=1    CTX=4
      drawCircle(ctx4,440,190,100,'orange', 'orange',4);
      drawRectangle(ctx4,240,90,200,200,'orange', 'orange',4);
      drawLine(ctx4,120,130,120,20,'orange','orange',4);
      drawLine(ctx4,120,230,120,20,'orange','orange',4);
      drawLine(ctx4,540,175,120,20,'orange','orange',4);
      drawSquare(ctx4,80,120,40,40,'orange','orange',4);
      drawSquare(ctx4,80,220,40,40,'orange','orange',4);
      drawSquare(ctx4,660,165,40,40,'orange','orange',4);
    }
    else if(window.matchMedia('(min-width: 300px)').matches){
      canvas.width = 300;
      canvas.height = 600;

      // for A=0  and B=0    CTX=1
      drawDownSemiCircle(ctx1,150,320, 100,'orange','white',4);
      drawRectangle(ctx1,50,180,200,150);
      ctx1.clearRect(52,325,196,10);
      drawLine(ctx1,90,80,20,100);
      drawLine(ctx1,195,80,20,100);
      drawLine(ctx1,50,80,55,20);
      drawLine(ctx1,195,80,55,20);
      drawSquare(ctx1,2,66,50,50);
      drawSquare(ctx1,248,66,50,50);
      drawLine(ctx1,140,420,20,100);
      drawSquare(ctx1,125,480,50,50);
      ctx1.clearRect(92,82,16,100);
      ctx1.clearRect(197,82,16,100);
      ctx1.clearRect(142,415,16,100);

      ctx1.clearRect(50,82,20,16);
      ctx1.clearRect(245,82,10,16);

      // ctx1.clearRect(92,174,11,20);
      // ctx1.clearRect(197,174,11,20);
    }

    }
  }
  
  // Update the canvas size when the page is initially loaded
  resizeCanvas();
  
  // Update canvas size when the window is resized
  window.addEventListener('resize', resizeCanvas);


// Use the contexts to draw different shapes, paths, or animations

   
function drawRectangle(ctx, x, y, width, height, stroke, color, lineWidth) {
   ctx.lineWidth = lineWidth;
    // ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fill();
    ctx.stroke()
    // ctx.closePath();
  }

function drawCircle(ctx, x, y, radius, stroke, color, lineWidth){
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.beginPath();
  ctx.arc(x,y,radius,1.5*Math.PI,Math.PI*0.5);
  ctx.fill();
  ctx.stroke();
}

function drawLine(ctx,x,y,width, height, stroke, color, lineWidth){
     ctx.lineWidth = lineWidth;
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,width,height);
    ctx.strokeRect(x,y,width,height);
}

function drawSquare(ctx,x,y,w,h,stroke,color, lineWidth){
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
}

function drawDownSemiCircle(ctx, x, y, radius, stroke, color, lineWidth){
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.beginPath();
  ctx.arc(x,y,radius,0*Math.PI,1*Math.PI);
  ctx.fill();
  ctx.stroke();
}