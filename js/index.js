// Your code goes here

const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".btn");
const destinations = document.querySelectorAll(".destination");
// images[0].addEventListener("mouseenter", () => {
//     images[0].style.transform = "scale(1.2)";
//     images[0].style.transition = "transform 0.3s";
//   });

//   images[0].addEventListener("mouseleave", () => {
//     images[0].style.transform = "scale(1)";
//   });

  window.addEventListener("resize", () => {
    images[2].src = "img/adventure2.jpg"
    images[2].style.transition = "transform 1s";
  });

  images[2].addEventListener("mouseleave", () => {
    images[2].src = "img/adventure.jpg"
    images[2].style.transition = "transform 1s";
  });
//mouseover
  images[3].addEventListener("mouseover", () => {
    images[3].style.transform = "scale(1.2)";
    images[3].style.transition = "transform 0.3s";
  });
//keydown
  window.addEventListener("keydown", () => {
    images[3].style.transform = "scale(4)";
    images[3].style.transition = "transform 0.3s";
  });
  images[3].addEventListener("click", () => {
    images[3].style.transform = "scale(1)";
    images[3].style.transition = "transform 0.3s";
    
  });
  images[3].addEventListener("mouseleave", () => {
    images[3].style.transform = "scale(1)";
    images[3].style.transition = "transform 0.3s";
  });

buttons[0].addEventListener("click", () => {
    buttons[0].textContent = "Unavailable";
    buttons[0].style.transition = "transform 1s";
    buttons[0].style.backgroundColor = "red";
    destinations[0].classList.add("error");
  });

  buttons[1].addEventListener("click", () => {
    buttons[1].textContent = "Nope";
    buttons[1].style.transition = "transform 1s";
    buttons[1].style.backgroundColor = "red";
    destinations[1].classList.add("error");
  });

  buttons[2].addEventListener("click", () => {
    buttons[2].textContent = "Nada!";
    buttons[2].style.transition = "transform 1s";
    buttons[2].style.backgroundColor = "pink";
    destinations[2].classList.add("error");
  });


//Stop the navigation items from refreshing the page by using preventDefault()
  const stopLink = document.querySelector(".nav-link");

  stopLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("stopped the link");
  })


//Nest two similar events somewhere in the site and prevent the event propagation properly
  const body = document.querySelector('body');
  const sections = document.querySelectorAll('section');
body.addEventListener('click', () =>{
  body.style.backgroundColor="skyblue";
  console.log("Me last!")
  
    
});

sections.forEach(section => section.addEventListener('click', () =>{
    section.style.backgroundColor="orange";
    console.log("Me first!")
     event.stopPropagation();
  })
)

//animations
const busfloat = document.querySelector(".yeet2");
const busBef = document.querySelector(".yeet");

busfloat.addEventListener('click', () =>{
busBef.src = "img/fun-bus-wheels.png"
busfloat.src = "img/funbus2.png"
busBef.style.transition = "0.3s";
Draggable.create(".yeet2", {
    type:"x,y",
    bounds: document.querySelector(".container home"),
    inertia: true,
});
busfloat.addEventListener("click", () => {
    gsap.to(busfloat, {
     duration: 1,
     x: '38%',
     ease: "bounce"
    }).restart()
  })
event.stopPropagation();
busBef.style.left = "initial";
});

document.querySelectorAll(".logo-heading").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
       duration: 1,
       rotate: 360,
       ease: "elastic(1, 0.75)"
      }).restart()
    })
  });

  document.querySelectorAll(".logo-heading").forEach(el => {
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
       duration: 1,
       rotate: 720,
       ease: "elastic(1, 0.75)"
      }).restart()
    })
  });