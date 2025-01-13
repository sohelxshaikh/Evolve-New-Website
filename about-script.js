gsap.registerPlugin(Draggable);

function navAnimation() {

  const header = document.querySelector('header');
  let lastScrollPosition = 0;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    // If scrolling down, hide the navbar
    if (currentScrollPosition > lastScrollPosition) {
      header.classList.add('hide');
    } else {
      // If scrolling up, show the navbar
      header.classList.remove('hide');
    }

    lastScrollPosition = currentScrollPosition;
  });

}


function cursorAnimation() {
  gsap.set(".cursor", { force3D: true });
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    gsap.to(".cursor", {
      x: x - 16,
      y: y - 16,
      ease: "power3"
    });
  });

  document.body.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 0,
      duration: 0.1,
      ease: "none"
    });
  });

  document.body.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 1,
      duration: 0.1,
      ease: "none"
    });
  });

}

function popUP() {
  var menu = document.getElementById("demo");
  var popUp = document.querySelector("#popup")
  var close = document.getElementById("circle")
  menu.addEventListener("click", () => {

    popUp.setAttribute('style', 'top :55%')



  })
  close.addEventListener("click", () => {

    popUp.setAttribute('style', 'top : -100%')
  })

  // Optional: Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === popUp) {
      popUp.style.display = "none";
    }
  })

}





  cursorAnimation();
  popUP();