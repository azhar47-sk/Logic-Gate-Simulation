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
   

    // for A=0  and B=0    CTX=1
      drawCircle(ctx1,1100,450,300,'orange', 'white')
      drawRectangle(ctx1,500,150,600,600,'orange', 'white')
      drawLine(ctx1,200,300,300,40,'orange');
      drawLine(ctx1,200,550,300,40,'orange');
      drawLine(ctx1,1400,420,300,40,'orange');
      ctx1.clearRect(1090,155,15,590)
      ctx1.clearRect(495,305,20,30)
      ctx1.clearRect(495,555,20,30)
      ctx1.clearRect(1395,425,20,30)
      drawSquare(ctx1,100,270,100,100);
      drawSquare(ctx1,100,520,100,100);
      drawSquare(ctx1,1700,390,100,100);
      ctx1.clearRect(195,305,20,30)
      ctx1.clearRect(195,555,20,30)
      ctx1.clearRect(1695,425,20,30)

      // for A=0  and B=1    CTX=2
      drawCircle(ctx2,1100,450,300,'orange', 'white')
      drawRectangle(ctx2,500,150,600,600,'orange', 'white')
      drawLine(ctx2,200,300,300,40,'orange',);
      drawLine(ctx2,200,550,300,40,'orange','orange');
      drawLine(ctx2,1400,420,300,40,'orange','white');
      ctx2.clearRect(1090,155,15,590)
      ctx2.clearRect(495,305,20,30)
      // ctx2.clearRect(495,555,20,30)
      ctx2.clearRect(1395,425,20,30)
      drawSquare(ctx2,100,270,100,100,'orange','white');
      drawSquare(ctx2,100,520,100,100,'orange','orange');
      drawSquare(ctx2,1700,390,100,100,'orange','white');
      ctx2.clearRect(195,305,20,30)
      // ctx2.clearRect(195,555,20,30)
      ctx2.clearRect(1695,425,20,30)

      // for A=1  and B=0    CTX=3
      drawCircle(ctx3,1100,450,300,'orange', 'white')
      drawRectangle(ctx3,500,150,600,600,'orange', 'white')
      drawLine(ctx3,200,300,300,40,'orange','orange');
      drawLine(ctx3,200,550,300,40,'orange', 'white');
      drawLine(ctx3,1400,420,300,40,'orange', 'white');
      ctx3.clearRect(1090,155,15,590)
      // ctx3.clearRect(495,305,20,30)
      ctx3.clearRect(495,555,20,30)
      ctx3.clearRect(1395,425,20,30)
      drawSquare(ctx3,100,270,100,100,'orange', 'orange');
      drawSquare(ctx3,100,520,100,100,'orange', 'white');
      drawSquare(ctx3,1700,390,100,100);
      // ctx3.clearRect(195,305,20,30)
      ctx3.clearRect(195,555,20,30)
      ctx3.clearRect(1695,425,20,30)

      // for A=1  and B=1    CTX=4
      drawCircle(ctx4,1100,450,300,'orange', 'orange')
      drawRectangle(ctx4,500,150,600,600,'orange', 'orange')
      drawLine(ctx4,200,300,300,40,'orange','orange');
      drawLine(ctx4,200,550,300,40,'orange','orange');
      drawLine(ctx4,1400,420,300,40,'orange','orange');
      drawSquare(ctx4,100,270,100,100,'orange','orange');
      drawSquare(ctx4,100,520,100,100,'orange','orange');
      drawSquare(ctx4,1700,390,100,100,'orange','orange');
     
    }
  }
  
  // Update the canvas size when the page is initially loaded
  resizeCanvas();
  
  // Update canvas size when the window is resized
  window.addEventListener('resize', resizeCanvas);


// Use the contexts to draw different shapes, paths, or animations

   
function drawRectangle(ctx, x, y, width, height, stroke, color) {
    // ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fill();
    ctx.stroke()
    // ctx.closePath();
  }

function drawCircle(ctx, x, y, radius, stroke, color){
  ctx.fillStyle = color;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(x,y,radius,1.5*Math.PI,Math.PI*0.5);
  ctx.fill();
  ctx.stroke();
}

function drawLine(ctx,x,y,width, height, stroke, color){
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,width,height);
    ctx.strokeRect(x,y,width,height);
}

function drawSquare(ctx,x,y,w,h,stroke,color){
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
}