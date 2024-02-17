/* Start Header */
let openIcon = document.getElementById("open");
let nav = document.querySelector(".header nav");
let options = document.querySelectorAll(".header .container ul a");


/* Event 1 */
openIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  openIcon.classList.toggle("fa-times");
});

/* Event 2 */
options.forEach((option) => {
  option.addEventListener("click", () => {
      options.forEach((option) => {
         option.classList.remove("selected");
      });
      option.classList.add("selected");
      
   nav.classList.toggle("active");
   openIcon.classList.toggle("fa-times");
  });
});

/* End Header */
/* Start Scroller */
let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  
  scroller.style.width = `${(scrollTop / height) * 100}%`;
};
/* End Scroller */
