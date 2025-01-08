// Initialize Locomotive Scroll for smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.locomotive'),
//     smooth: true,
//     smartphone: { smooth: true },  // Optional: Smooth scroll on mobile devices
//     tablet: { smooth: true }       // Optional: Smooth scroll on tablets
// });

// Scroll event logic for hiding/showing the header
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


function FadeINOut(){
    gsap.registerEffect({
        name: "swapText",
        effect: (targets, config) => {
          let tl = gsap.timeline({delay: config.delay});
          tl.to(targets, {opacity: 0, duration: config.duration / 2});
          tl.add(() => targets[0].innerText = config.text);
          tl.to(targets, {opacity: 1, duration: config.duration});
          return tl;
        },
        defaults: {duration: 1}, 
        extendTimeline: true
    });
    
    
    var tl = gsap.timeline({repeat: -1});
    tl.swapText(".subtext", {text: "Web Platforms.", delay: 2})
      .swapText(".subtext", {text: "School ERP.", delay: 2})
      .swapText(".subtext", {text: "HR Management Solution.", delay: 2}) // back to the start
      .swapText(".subtext", {text: "Anajmandi Software.", delay: 2}) // back to the start
      .swapText(".subtext", {text: "Institute Management Solution.", delay: 2}); // back to the start
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
    animateCounter("experience", 0, 10, 2000 ,"+");  // Years of Experience
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


function popUP(){
    var menu = document.getElementById("demo");
    var popUp = document.querySelector("#popup")
    var close = document.getElementById("circle")
    menu.addEventListener("click", ()=> {

        popUp.setAttribute('style' ,'top :55%')


    
    })
    close.addEventListener("click", ()=> {
        
        popUp.setAttribute('style' ,'top : -100%')
    })
}
// Get carousel and items elements
var carousel = document.querySelector(".carousel"),
    items = document.querySelectorAll(".item"),
    currdeg = 0;

// Add event listeners for the next and previous buttons
document.querySelector(".next").addEventListener("click", function() {
    rotate("n");
});
document.querySelector(".prev").addEventListener("click", function() {
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
    items.forEach(function(item) {
        item.style.transform = "rotateY(" + (-currdeg) + "deg)";
        item.style.WebkitTransform = "rotateY(" + (-currdeg) + "deg)";
        item.style.MozTransform = "rotateY(" + (-currdeg) + "deg)";
        item.style.OTransform = "rotateY(" + (-currdeg) + "deg)";
    });
}





popUP();
FadeINOut();
countAnimation();