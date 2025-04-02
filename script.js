// side-bar-functionailty.
function openSidebar() {
  document.getElementById("side-bar").style.left = "0";
  document.getElementById("nav-bar").classList.add("nav-hidden");
}

function closeSidebar() {
  document.getElementById("side-bar").style.left = "-350px";
  document.getElementById("nav-bar").classList.remove("nav-hidden");
}

// hero-slides-functionailty.
const images = [
  "./images/hero-1.jpg",
  "./images/hero-2.webp",
  "./images/hero-3.jpg",
  "./images/hero-4.jpg",
];

const texts = [
  "Professional Cleaning, Exceptional Results!",
  "A Cleaner Home, A Healthier You!",
  "Spotless Spaces, Every Time!",
  "Where Cleanliness Meets Excellence",
];

let index = 0;
const heroBg = document.getElementById("hero-bg");
const heroText = document.getElementById("hero-text");
const dotsContainer = document.getElementById("dots-container");

images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => changeSlide(i));
  dotsContainer.appendChild(dot);
});

function changeSlide(newIndex = (index + 1) % images.length) {
  index = newIndex;
  // heroBg.style.opacity = 1;
  setTimeout(() => {
    heroBg.style.backgroundImage = `url(${images[index]})`;
    heroText.textContent = texts[index];
    // heroBg.style.opacity = 1;
    updateDots();
  }, 1000);
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

heroBg.style.backgroundImage = `url(${images[0]})`;
setInterval(changeSlide, 4000);

// About-section-animation-logics

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-center");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.remove("about-animate"); // Remove the class to reset animation
          void aboutSection.offsetWidth; // Force reflow to restart animation
          aboutSection.classList.add("about-animate"); // Re-add class to play animation again
        }
      });
    },
    {
      threshold: 0.9, // Trigger when 30% of the section is visible
    }
  );

  observer.observe(aboutSection);
});

// show-more-text-functionailty

document.getElementById("toggleButton").addEventListener("click", function () {
  let extraText = document.getElementById("extraText");
  let button = document.getElementById("toggleButton");

  if (extraText.style.display === "none" || extraText.style.display === "") {
    extraText.style.display = "block";
    setTimeout(() => {
      extraText.style.opacity = "1";
      //   extraText.scrollIntoView({ behavior: "smooth" });
    }, 10);
    button.textContent = "Show Less";
  } else {
    extraText.style.opacity = "0";
    setTimeout(() => {
      extraText.style.display = "none";
    }, 100);
    button.textContent = "Show More";
  }
});

// **** smooth scroll ****

const links = document.getElementById("nav-links");

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    console.log(element);

    let position = element.offsetTop - 62;
    console.log(position);

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

// why us

document.addEventListener("DOMContentLoaded", function () {
  const whyUsSection = document.querySelector(".why-us-cont");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          whyUsSection.classList.add("animate");

          // Keep it visible after animation
          setTimeout(() => {
            whyUsSection.style.visibility = "visible";
          }, 1000); // Matches animation duration

          // Remove the animation class so it can replay
          setTimeout(() => {
            whyUsSection.classList.remove("animate");
          }, 1500); // Slight delay to reset animation
        }
      });
    },
    { threshold: 0.9 } // Trigger when 90% is visible
  );

  observer.observe(whyUsSection);
});

// closeModal

// form

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    try {
      const response = await fetch("https://formspree.io/f/mblgzdlg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Show the modal if the form is submitted successfully
        document.getElementById("modal").style.display = "flex";
        this.reset(); // Reset form fields
      } else {
        alert("There was a problem with your submission.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

// Close modal functionality
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
