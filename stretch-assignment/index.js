

// const redBlock = document.querySelector(".block--red");
// const blueBlock = document.querySelector(".block--blue");
// const greenBlock = document.querySelector(".block--green");
// const pinkBlock = document.querySelector(".block--pink");
// const grayBlock = document.querySelector(".block--gray");


const blockList = document.querySelectorAll(".block");
const topblock = document.querySelector(".blocks");
  for (const blocky of blockList) {
    blocky.addEventListener('click', function(event) {
      topblock.prepend(blocky)
    })
  };

  for (const blocky of blockList) {
    blocky.addEventListener('mousedown', function(event) {
        blocky.style.transform = "translateX(1000px)"
        blocky.style.transition = "all 10s";
    })
  };
  for (const blocky of blockList) {
  document.addEventListener("mouseup", () => {
    blocky.style.transform = "translateX(0px)"
    blocky.style.transition = "all 10s ";
  })
  };