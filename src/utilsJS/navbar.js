////////////////////////////////////////
//                                    //
//               Navbar               //
//                                    //
////////////////////////////////////////

const navbar = () => {
  // Change navbar on scroll
  window.addEventListener("scroll", () => {
    // When the page is scrolling, apply class to nav
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });
};

export default navbar;
