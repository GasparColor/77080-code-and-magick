// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);





  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }

  }

  var histogramWidth = 40;
  var barHeigth = 150;
  var step = barHeigth / (max - 0); // px;

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 60);

   // px;
  var indent = 70;    // px;
  var initialX = 140; // px;
  var initialY = 80;  // px;
  var lineHeight = 60;//


  for(var i = 0; i < times.length; i++) {

    //fillRect(x, y, width, height)
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]),  initialX - 10  + indent * i, 90);
    if(names[i] === 'Вы'){
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    }else{
      ctx.fillStyle = "rgba(0, 0, 255, 0.3)";
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random().toFixed(1) + ')';
    }
    ctx.fillRect(initialX  + indent * i, 100, histogramWidth, times[i] * step );
    ctx.fillStyle = 'black';
    //CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);
    ctx.fillText(names[i],  initialY + lineHeight + indent * i,270);

  }
};
