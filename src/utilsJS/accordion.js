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
    const icon = accordion.querySelector(".accordion-icon span");

    // State
    var isCollapsed = false;
    trigger.addEventListener("click", () => {
      // Toggle
      isCollapsed = !isCollapsed;
      if (isCollapsed) {
        // Display answer
        panel.style.height = `${panel.scrollHeight}px`;
        icon.style.transform = "translateY(-50%) rotate(45deg)";
        // Change svg to minus sign
      } else {
        // Hide answer
        panel.style.height = "0";
        icon.style.transform = "translateY(-50%)";
        // Change svg to plus
      }
    });
  });
};

export default accordion;
