# CSS Grid Guides

## Installation

`npm i css-grid-guides`

## Usage

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
  selector: "grid-dev",
  color: "green",
});
```
