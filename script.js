function openSidebar() {
  document.getElementById("side-bar").style.left = "0";
  document.getElementById("nav-bar").classList.add("nav-hidden");
}

function closeSidebar() {
  document.getElementById("side-bar").style.left = "-350px";
  document.getElementById("nav-bar").classList.remove("nav-hidden");
}

// const images = [
//   "./images/hero-1.jpg",
//   "./images/hero-2.webp",
//   "./images/hero-3.jpg",
//   "./images/hero-4.jpg",
// ];

// const texts = [
//   "We Make Your Space Sparkle!",
//   "A Cleaner Home, A Healthier You!",
//   "Spotless & Stress-Free Cleaning Services!",
//   "A Clean Office, A Productive Team!",
// ];

// let index = 0;
// const heroBg = document.getElementById("hero-bg");
// const heroText = document.getElementById("hero-text");
// const dotsContainer = document.getElementById("dots-container");

// images.forEach((_, i) => {
//   const dot = document.createElement("div");
//   dot.classList.add("dot");
//   if (i === 0) dot.classList.add("active");
//   dot.addEventListener("click", () => changeSlide(i));
//   dotsContainer.appendChild(dot);
// });

// function changeSlide(newIndex = (index + 1) % images.length) {
//   index = newIndex;
//   heroBg.style.opacity = 0.5;
//   setTimeout(() => {
//     heroBg.style.backgroundImage = ⁠ url(${images[index]}) ⁠;
//     heroText.textContent = texts[index];
//     heroBg.style.opacity = 1;
//     updateDots();
//   }, 1000);
// }

// function updateDots() {
//   document.querySelectorAll(".dot").forEach((dot, i) => {
//     dot.classList.toggle("active", i === index);
//   });
// }

// heroBg.style.backgroundImage = ⁠ url(${images[0]}) ⁠;
// setInterval(changeSlide, 4000);
