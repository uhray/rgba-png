RGBA-PNG
=========

Simple express middleware for hosting rgba images to help with browser compatibility;

Add as express middleware:

```js

app.use(require('rgba-png'));

```

Access in a browser: `http://127.0.0.1/rgba.png?r=10&g=20&b=255&a=70`

Use in css:

```css

div {
  background: url('/rgba.png?r=10&g=20&b=255&a=70');
  background: rgba(10, 20, 255, 0.7);
}

```

Query values:

  * r - 0 to 255 red value. Default = 0.
  * g - 0 to 255 green value. Default = 0.
  * b - 0 to 255 blue value. Default = 0.
  * a - 0 to 100 alpha value. Default = 100.

