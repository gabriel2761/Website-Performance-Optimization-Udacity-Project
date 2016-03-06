## Website Performance Optimization Portfolio Project

### How to run

1. Clone the repository `git clone https://github.com/gabriel2761/gabriel2761.github.io/`
2. Open index.html in a browser

### Optimizations for pizza scroll

#### Remove FSL from resizing pizzas
Very ineffiecient function which contains FSL (forced synchronous layout). The function determineDx didn't contribute to resizing the pizzas.

```javascript
function changePizzaSizes(size) {
 	for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
	var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
	var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
	document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
}
```

Optimized the function to a simpler procedure. [diff](https://github.com/gabriel2761/gabriel2761.github.io/commit/a3911321901ff29f6c98f46306e3f3448f882112)

```javascript
var pizzas = document.querySelectorAll(".randomPizzaContainer");

for (var i = 0; i < pizzas.length; i++) {
	pizzas[i].style.width = newwidth + '%';
}
```

#### New layers for moving pizzas
This saves the browser from continuously painting. [diff](https://github.com/gabriel2761/gabriel2761.github.io/commit/35e68a1344257e4746dda760f96bf35b62b8eda6)

```css
.mover {
	transform: translateZ(0);
	will-change: transform;
}
 ```
#### Removed FSL from moving pizzas
`updatePositions()` is reponsible for moving pizzas around the page. [diff](https://github.com/gabriel2761/gabriel2761.github.io/commit/9f04ca6df29791b54d8842fc15ac953d318cf5f8)

```javascript
 for (var i = 0; i < items.length; i++) {
	var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
	items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
 }
 ```

 Moved the `document.body.scrollTop` function out of loop

```javascript
var scrollPosition = (document.body.scrollTop / 1250);

for (var i = 0; i < items.length; i++) {
	var phase = Math.sin(scrollPosition + (i % 5));
	items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
}
```

#### Less pizzas on page
Reduce the number of pizzas being appended to the page. [diff](https://github.com/gabriel2761/gabriel2761.github.io/commit/2d8beeb65bf36d6e6e588c5a8c71739b31e32656)


