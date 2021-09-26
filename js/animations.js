// scroll-to-top-button===============================================================================

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
      var rootElement = document.documentElement

      function handleScroll() {
        // Do something on scroll
        var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal ) > 0.40) {
          // Show button
          scrollToTopBtn.classList.add("showBtn")
        } else {
          // Hide button
          scrollToTopBtn.classList.remove("showBtn")
        }
      }

      function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
      scrollToTopBtn.addEventListener("click", scrollToTop)
      document.addEventListener("scroll", handleScroll)

// footer==============================================================================================

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
