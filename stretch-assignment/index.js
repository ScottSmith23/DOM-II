

const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

const blockList = document.querySelectorAll(".block");
const topblock = document.querySelector(".blocks");

redBlock.addEventListener("click", () => {
    topblock.prepend(redBlock);
  });

  blueBlock.addEventListener("click", () => {
    topblock.prepend(blueBlock);
  });

  greenBlock.addEventListener("click", () => {
    topblock.prepend(greenBlock);
  });

  pinkBlock.addEventListener("click", () => {
    pinkBlock.style.transition = "transform 1s";
    topblock.prepend(pinkBlock);
   
  });

  grayBlock.addEventListener("click", () => {
    topblock.prepend(grayBlock);
  });


