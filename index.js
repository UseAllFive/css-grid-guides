const repeat = (func, times) => {
  func(times);
  times && --times && repeat(func, times);
};

const gg = ({
  selector = ".grid",
  color = "rgb(240,128,128)",
  opacity = 0.3,
  showNumbers = true,
  columnCount = 12,
} = {}) => {
  const grids = document.querySelectorAll(selector);
  grids.forEach((grid) => {
    grid.style.position = "relative";
    const clone = grid.cloneNode();
    clone.style.cssText = `position: absolute; width: 100%; opacity: ${opacity}; height: 100%; min-height: 20px;`;
    repeat((i) => {
      const col = document.createElement("div");
      col.style.cssText = `background: ${color}; display: flex;`;
      if (showNumbers) {
        col.innerHTML += `<span>${columnCount + 1 - i}</span>`;
        const span = col.querySelector("span");
        span.style.cssText =
          "background: white; width: 20px; height: 20px; display: inline-flex; justify-content: center; font-size: 12px; align-items: center";
      }
      clone.appendChild(col);
    }, columnCount);
    grid.appendChild(clone);
  });
};

module.exports = { gg };
