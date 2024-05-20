////////////////////////////////////////
//                                    //
//              Accordion             //
//                                    //
////////////////////////////////////////
const accordion = () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    // Select the answers for corresponding accordion
    const panel = accordion.querySelector(".accordion-panel");
    const trigger = accordion.querySelector(".accordion-trigger");
    // Select path tag of the svg
    const icon = accordion
      .querySelector(".accordion-icon svg")
      .querySelector("path");

    // State
    var isCollapsed = false;
    trigger.addEventListener("click", () => {
      // Toggle
      isCollapsed = !isCollapsed;
      if (isCollapsed) {
        // Display answer
        panel.style.height = `${panel.scrollHeight}px`;
        // Change svg to minus sign
        icon.setAttribute("d", "M6 12L18 12");
        icon.setAttribute("stroke", "currentColor");
        icon.setAttribute("stroke-width", "2");
      } else {
        // Hide answer
        panel.style.height = "0";
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

export default accordion;
