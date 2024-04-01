var canvas1 = document.getElementById('myCanvas1');
var canvas2 = document.getElementById('myCanvas2');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');

function resizeCanvas() {
  const canvasElements = document.getElementsByTagName('canvas');
  for (const canvas of canvasElements) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Draw on the canvas if needed
    const ctx = canvas.getContext('2d');
    // Add your drawing or animation logic here
    if (window.matchMedia('(max-width: 1400px)').matches) {
          canvas.width = 700;
          canvas.height = 500;

          drawtriangle(ctx1, 550,250,400,400,'orange','orange',6);
          drawLine(ctx1,300,430,250,40,'orange','white',6);
          drawLine(ctx1,915,430,250,40,'orange','orange',6);
          drawSquare(ctx1,200,400,100,100,'orange','white',6);
          drawSquare(ctx1,1150,400,100,100,'orange',"orange",6);
          addText(ctx1,'NOT',625,480,'white','80px',6);
          addText(ctx1,'1',1180,480,'white','80px',6)
          ctx1.clearRect(295,433,33,35);

          drawtriangle(ctx2, 700,125,700,700,'white', 'orange',10);
          drawLine(ctx2,300,445,400,60,'orange','orange',10);
          drawLine(ctx2,1350,445,400,60,'orange','white',10);
          drawSquare(ctx2,180,416,120,120,'orange','orange',10);
          drawSquare(ctx2,1700,416,120,120,'orange',"white",10);
          addText(ctx2,'NOT',880,510,'Black','90px',10);
          addText(ctx2,'0',1730,510,'black','100px',10);
          ctx2.clearRect(1320,450,50,50);
          ctx2.clearRect(1680,450,50,50);
    }
    else if (window.matchMedia('(max-width: 1600px)').matches) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drawtriangle(ctx1, 0,0,200,200,'orange','orange',6);
      drawLine(ctx1,300,430,250,40,'orange','white',6);
      drawLine(ctx1,915,430,250,40,'orange','orange',6);
      drawSquare(ctx1,200,400,100,100,'orange','white',6);
      drawSquare(ctx1,1150,400,100,100,'orange',"orange",6);
      addText(ctx1,'NOT',625,480,'white','80px',6);
      addText(ctx1,'1',1180,480,'white','80px',6)
      ctx1.clearRect(295,433,33,35);

      drawtriangle(ctx2, 700,125,700,700,'white', 'orange',10);
      drawLine(ctx2,300,445,400,60,'orange','orange',10);
      drawLine(ctx2,1350,445,400,60,'orange','white',10);
      drawSquare(ctx2,180,416,120,120,'orange','orange',10);
      drawSquare(ctx2,1700,416,120,120,'orange',"white",10);
      addText(ctx2,'NOT',880,510,'Black','90px',10);
      addText(ctx2,'0',1730,510,'black','100px',10);
      ctx2.clearRect(1320,450,50,50);
      ctx2.clearRect(1680,450,50,50);
}
  }
}

// Update the canvas size when the page is initially loaded
resizeCanvas();

// Update canvas size when the window is resized
window.addEventListener('resize', resizeCanvas);

function drawRectangle(ctx, x, y, width, height, stroke, color) {
    // ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fill();
    ctx.stroke()
    // ctx.closePath();
  }

function drawtriangle(ctx,x,y,width,height,color,stroke, lineWidth){
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y+height);
    ctx.lineTo(x+width,y+height/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
}

function drawLine(ctx,x,y,width, height, stroke, color,lineWidth){
  ctx.lineWidth = lineWidth;
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,width,height);
    ctx.strokeRect(x,y,width,height);
}

function drawSquare(ctx,x,y,w,h,stroke,color,lineWidth){
  ctx.lineWidth = lineWidth;
    ctx.fillStyle = color;
    ctx.strokeStyle = stroke;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
}

function addText(ctx, text, x, y, color,size,lineWidth) {
  ctx.lineWidth = lineWidth;
  ctx.font = size + 'px ';
    ctx.font = size + ' Arial';
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

        //  drawtriangle(ctx1, 700,125,700,700,'orange','orange',10);
        //   drawLine(ctx1,300,445,400,60,'orange',10);
        //   drawLine(ctx1,1300,445,400,60,'orange',10);
        //   drawSquare(ctx1,180,416,120,120,'orange','white',10);
        //   drawSquare(ctx1,1700,416,120,120,'orange',"orange",10);
        //   addText(ctx1,'NOT',880,510,'white','90px',10);
        //   addText(ctx1,'1',1730,510,'white','100px',10)

        //   drawtriangle(ctx2, 700,125,700,700,'white', 'orange',10);
        //   drawLine(ctx2,300,445,400,60,'orange','orange',10);
        //   drawLine(ctx2,1350,445,400,60,'orange','white',10);
        //   drawSquare(ctx2,180,416,120,120,'orange','orange',10);
        //   drawSquare(ctx2,1700,416,120,120,'orange',"white",10);
        //   addText(ctx2,'NOT',880,510,'Black','90px',10);
        //   addText(ctx2,'0',1730,510,'black','100px',10);
        //   ctx2.clearRect(1320,450,50,50);
        //   ctx2.clearRect(1680,450,50,50);