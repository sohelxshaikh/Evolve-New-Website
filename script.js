// Initialize Locomotive Scroll for smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.locomotive'),
//     smooth: true,
//     smartphone: { smooth: true },  // Optional: Smooth scroll on mobile devices
//     tablet: { smooth: true }       // Optional: Smooth scroll on tablets
// });

// Scroll event logic for hiding/showing the header

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

function FadeINOut() {
  gsap.registerEffect({
    name: "swapText",
    effect: (targets, config) => {
      let tl = gsap.timeline({ delay: config.delay });
      tl.to(targets, { opacity: 0, duration: config.duration / 2 });
      tl.add(() => targets[0].innerText = config.text);
      tl.to(targets, { opacity: 1, duration: config.duration });
      return tl;
    },
    defaults: { duration: 1 },
    extendTimeline: true
  });


  var tl = gsap.timeline({ repeat: -1 });
  tl.swapText(".subtext", { text: "Web Platforms.", delay: 2 })
    .swapText(".subtext", { text: "School ERP.", delay: 2 })
    .swapText(".subtext", { text: "HR Management Solution.", delay: 2 }) // back to the start
    .swapText(".subtext", { text: "Anajmandi Software.", delay: 2 }) // back to the start
    .swapText(".subtext", { text: "Institute Management Solution.", delay: 2 }); // back to the start
}

function countAnimation() {
  // Function to animate the counter
  function animateCounter(id, start, end, duration, appendSign = "") {
    const element = document.getElementById(id);
    let current = start;
    const increment = (end - start) / (duration / 50); // Calculate increment value
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(interval);
        current = end;
      }
      element.innerText = formatNumber(Math.floor(current)) + appendSign;
    }, 50);
  }

  // Define counters with their respective start, end, and durations
  animateCounter("experience", 0, 10, 2000, "+");  // Years of Experience
  animateCounter("countries", 0, 50, 2000, "+");  // Countries Served
  animateCounter("projects", 0, 200, 2000, "+");  // Projects Delivered
  animateCounter("hours", 0, 100, 2000, "k");  // Hours Worked
  animateCounter("retention", 0, 90, 2000, "%");  // Client Retention


  // Function to format the number with commas
  function formatNumber(number) {
    return number.toLocaleString();
  }

  // Animate the counters

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
}
// Get carousel and items elements
function page5Animation() {
  var carousel = document.querySelector(".carousel"),
    items = document.querySelectorAll(".item"),
    currdeg = 0;

  // Add event listeners for the next and previous buttons
  document.querySelector(".next").addEventListener("click", function () {
    rotate("n");
  });
  document.querySelector(".prev").addEventListener("click", function () {
    rotate("p");
  });

  function rotate(direction) {
    if (direction === "n") {
      currdeg -= 60;
    }
    if (direction === "p") {
      currdeg += 60;
    }

    // Apply the rotation to the carousel
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
    carousel.style.WebkitTransform = "rotateY(" + currdeg + "deg)"; // For Safari
    carousel.style.MozTransform = "rotateY(" + currdeg + "deg)"; // For Firefox
    carousel.style.OTransform = "rotateY(" + currdeg + "deg)"; // For Opera

    // Apply the inverse rotation to the items
    items.forEach(function (item) {
      item.style.transform = "rotateY(" + (-currdeg) + "deg)";
      item.style.WebkitTransform = "rotateY(" + (-currdeg) + "deg)";
      item.style.MozTransform = "rotateY(" + (-currdeg) + "deg)";
      item.style.OTransform = "rotateY(" + (-currdeg) + "deg)";
    });
  }
}

function page6Animation() {
  gsap.registerPlugin(Draggable);

  const carousel = document.querySelector('.p6-carousel');
  const carouselItems = document.querySelectorAll('.p6-carousel-item');
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].offsetWidth;

  let currentIndex = 0; // Keep track of the current carousel item index
  const dragThreshold = 10; // Threshold for triggering item change on drag

  Draggable.create(carousel, {
    type: "x",
    edgeResistance: 0.9,
    bounds: { minX: -(itemWidth * totalItems - carousel.offsetWidth), maxX: 0 },

    onDrag: function () {
      if (Math.abs(this.x) > dragThreshold) {
        // Move to next or previous item based on drag direction
        currentIndex = this.x < 0 ? Math.min(currentIndex + 1, totalItems - 1) : Math.max(currentIndex - 1, 0);
        updateCarouselPosition();
        changeBackgroundColor();
      }
    },

    onThrowComplete: function () {
      currentIndex = Math.round(carousel.scrollLeft / itemWidth);
      updateCarouselPosition();
      changeBackgroundColor();
    }
  });

  function updateCarouselPosition() {
    gsap.to(carousel, {
      scrollTo: currentIndex * itemWidth,
      duration: 0.1,
      ease: "power0.out"
    });
  }

  function changeBackgroundColor() {
    const colors = ['#FF6347', '#4CAF50', '#1E90FF', '#FFD700', '#8A2BE2'];
    carousel.style.backgroundColor = colors[currentIndex % colors.length];
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Register Draggable Plugin
  gsap.registerPlugin(Draggable);

  const carousel = document.querySelector('.p6-carousel');
  const carouselItems = document.querySelectorAll('.p6-carousel-item');
  const totalItems = carouselItems.length;
  const itemWidth = carouselItems[0].offsetWidth;
  const body = document.querySelector('.project-carousel'); // The element you want to change the background color for

  let currentIndex = 0; // Keep track of the current item

  // Function to change background color based on the current index
  function changeBackgroundColor(index) {
    const colors = ['#121212', '#00A76E', '#264D82', '#A26A9F', '#A26A9F']; // Example colors
    const color = colors[index % colors.length]; // Cycle through colors
    body.style.backgroundColor = color; // Change background color of the body
  }

  // Make the carousel draggable
  Draggable.create(carousel, {
    type: "x",
    edgeResistance: 0.9,
    bounds: {
      minX: -itemWidth * (totalItems - 1), // Limit dragging to the total number of items
      maxX: 0 // Don't drag beyond the first item
    },
    inertia: true,
    onDrag: function () {
      const distanceDragged = Math.abs(this.x); // Distance dragged in x direction
      const itemIndex = Math.round(distanceDragged / itemWidth); // Calculate the index based on drag distance
      currentIndex = itemIndex;
      updateCarouselPosition(); // Update the position of carousel based on drag
      changeBackgroundColor(currentIndex); // Change background color when drag occurs
    },
    onThrowComplete: function () {
      const distanceDragged = Math.abs(this.x);
      const itemIndex = Math.round(distanceDragged / itemWidth);
      currentIndex = itemIndex;
      updateCarouselPosition(); // Update the position after dragging ends
      changeBackgroundColor(currentIndex); // Change background color after throw complete
    }
  });

  // Function to update the carousel position smoothly
  function updateCarouselPosition() {
    const targetPosition = -currentIndex * itemWidth;
    gsap.to(carousel, {
      x: targetPosition,
      duration: 0.2, // Smooth transition duration
      ease: "power1.out"
    });
  }
});




  const video = document.getElementById('video');

// Create an intersection observer to detect when the video section (Page 6) is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the section with the video is in view, play the video and unmute it
            video.play();
            video.muted = false;
        } else {
            // If the section is out of view, pause the video and mute it
            video.pause();
            video.muted = true;
        }
    });
}, {
    threshold: 0.6  // Trigger when 60% of the section is visible
});

// Start observing the Page 6 section
observer.observe(document.getElementById('video-div'));













popUP();
FadeINOut();
countAnimation();
page5Animation();
navAnimation();
