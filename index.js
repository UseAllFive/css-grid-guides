const gg = ({
  selector = ".grid",
  color = "rgb(240,128,128)",
  opacity = 0.3,
  showNumbers = true,
} = {}) => {
  let clones = [];
  const init = () => {
    const grids = document.querySelectorAll(selector);
    grids.forEach((grid) => {
      grid.style.position = "relative";
      const clone = grid.cloneNode();
      clones.push(clone);
      clone.style.cssText = `position: absolute; width: 100%; opacity: ${opacity}; height: 100%; min-height: 20px; pointer-events: none`;
      grid.appendChild(clone);
      let i = 1;
      const addColumn = () => {
        const col = document.createElement("div");
        col.style.cssText = `background: ${color}; display: flex;`;
        if (showNumbers) {
          col.innerHTML += `<span>${i}</span>`;
          const span = col.querySelector("span");
          span.style.cssText =
            "color: black; background: white; width: 20px; height: 20px; display: inline-flex; justify-content: center; font-size: 12px; align-items: center";
        }
        clone.appendChild(col);
        if (col.offsetTop === 0) {
          i++;
          addColumn();
        } else {
          col.remove();
        }
      };

      addColumn();
    });
  };
  init();
  const clear = () => {
    clones.forEach((clone) => clone.remove());
  };
  window.addEventListener("resize", () => {
    clear();
    init();
  });
};

module.exports = { gg };
