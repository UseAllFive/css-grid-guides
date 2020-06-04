# CSS Grid Guides

A small library that reveals CSS grid guides to aid in development

![](https://p197.p4.n0.cdn.getcloudapp.com/items/4gujY0R1/Screen%20Shot%202020-06-04%20at%2012.24.32%20PM.png?v=6731af623629a2d0b0b313f5e5431148)

## Installation

`npm i css-grid-guides`

## Usage

Make sure you're doing something like in order for this library to work correctly

```css
* {
  box-sizing: border-box;
}
```

Call `gg()` after the DOM has loaded

```javascript
import { gg } from "css-grid-guides";

// Defaults
// {
//   selector: ".grid",
//   color: "rgb(240,128,128)",
//   opacity: 0.3,
//   showNumbers: true,
//   columnCount: 12,
// }

// Use defaults
gg();

// Override specific properties
gg({
  selector: ".grid-dev",
  color: "green",
});
```

## TODO

- Auto-detect column count
- Update column count on resize for responsive grids
