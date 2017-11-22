// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
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

  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  var histogramHeigth = -150;
  var step = histogramHeigth / (max - 0);

  ctx.fillText('Список результатов: ', 120, 60);

  var histogramWidth = 40;
  var initialX = 160;
  var columnWidth = 80;


  for (i = 0; i < times.length; i++) {

    ctx.fillStyle = 'black';

    // Скорость прохождения fillText(text, x, y [, maxWidth]);
    ctx.fillText(Math.round(times[i]), initialX + columnWidth * i, 90);
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + getRandomValue(0.1, 1) + ')';

    // Гистограмма fillRect(x, y, width, height)
    ctx.fillRect(initialX + columnWidth * i, 250, histogramWidth, times[i] * step);
    ctx.fillStyle = 'black';

    // Имя игрока - fillText(text, x, y [, maxWidth]);
    ctx.fillText(names[i], initialX + columnWidth * i, 265);

  }
};
