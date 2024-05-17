////////////////////////////////////////
//                                    //
//              Show/Hide             //
//                                    //
////////////////////////////////////////
const showHide = () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    // Select the answers for corresponding faq
    const answer = faq.querySelector(".faq-answer");
    // Select path tag of the svg
    const icon = faq.querySelector(".faq-icon svg").querySelector("path");

    // State
    var isCollapsed = false;
    faq.addEventListener("click", () => {
      // Toggle
      isCollapsed = !isCollapsed;
      if (isCollapsed) {
        // Display answer
        answer.style.display = "block";
        // Change svg to minus sign
        icon.setAttribute("d", "M6 12L18 12");
        icon.setAttribute("stroke", "currentColor");
        icon.setAttribute("stroke-width", "2");
      } else {
        // Hide answer
        answer.style.display = "none";
        // Change svg to plus
        icon.setAttribute(
          "d",
          "M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        );
        icon.removeAttribute("stroke");
        icon.removeAttribute("stroke-width");
      }
    });
  });
};

export default showHide;
