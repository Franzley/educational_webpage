////////////////////////////////////////
//                                    //
//               Navbar               //
//                                    //
////////////////////////////////////////

const navbar = () => {
  // If the page is refreshed and the window is scrolled down
  window.addEventListener("load", () => {
    if (window.scrollY > 0) {
      document.querySelector("nav").classList.toggle("window-scroll");
    }
  });
  // Change navbar on scroll
  window.addEventListener("scroll", () => {
    // When the page is scrolling, apply class to nav
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
};

export default navbar;
