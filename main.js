var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradient");

css.textContent = `linear-gradient(to right, ${hexToRgbString(
  colorOne.value
)}, ${hexToRgbString(colorTwo.value)})`;

function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${
    colorTwo.value
  })`;

  css.textContent = `${body.style.background};`;
}

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);
btnGenerate.addEventListener("click", function() {
  colorOne.value = getRandomHexColor();
  colorTwo.value = getRandomHexColor();
  setGradient();
});
