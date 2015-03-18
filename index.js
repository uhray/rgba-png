var Png = require('node-png').PNG,
    parseUrl = require('parseurl');

module.exports = function(req, res, next) {
  var red, gree, blue, alpha, png, rgba, i;

  if (parseUrl(req).pathname !== '/rgba.png') {
    next();
    return;
  }

  red = Number(req.query.r || 0);
  green = Number(req.query.g || 0);
  blue = Number(req.query.b || 0);
  alpha = Number(req.query.a || 100) / 100 * 255;
  png = new Png({ width: 2, height: 2 });
  rgba = [];

  for (i = 0; i < 4; i++) {
    rgba.push(red, green, blue, alpha);
  }

  res.setHeader('Content-type', 'image/png');
  png.data = new Buffer(rgba);
  png.pack().pipe(res);
}
