// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {

  var HISTOGRAM_HEIGHT = -150;
  var HISTOGRAM_WIDTH = 40;
  var INITIAL_X = 160;
  var COLUMN_WIDTH = 80;

  var getRandomValue = function (minValue, maxValue) {
    return Math.random() * (maxValue - minValue) + minValue;
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);


  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);


  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = HISTOGRAM_HEIGHT / (max - 0);

  ctx.fillText('Список результатов: ', 120, 60);

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';

    // Скорость прохождения fillText(text, x, y [, maxWidth]);
    ctx.fillText(Math.round(times[i]), INITIAL_X + COLUMN_WIDTH * i, 90);
    ctx.fillStyle = (names[i] === 'Вы') ? 'red' : 'rgba(0, 0, 255, ' + getRandomValue(0.1, 1) + ')';

    // Гистограмма fillRect(x, y, width, height)
    ctx.fillRect(INITIAL_X + COLUMN_WIDTH * i, 250, HISTOGRAM_WIDTH, times[i] * step);
    ctx.fillStyle = 'black';

    // Имя игрока - fillText(text, x, y [, maxWidth]);
    ctx.fillText(names[i], INITIAL_X + COLUMN_WIDTH * i, 265);
  }
};
