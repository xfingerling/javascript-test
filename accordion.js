const accordionList = document.querySelector(".accordion-list");

function showAccordion(e) {
  const { target } = e;

  if (target.tagName === "BUTTON") {
    const wrapper = target.nextElementSibling;
    const wrappers = accordionList.querySelectorAll(".accordion-list__wrapper");

    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
      target.classList.toggle("active");
    } else {
      wrappers.forEach((el) => {
        el.style.maxHeight = null;
        el.previousElementSibling.classList.remove("active");
      });

      target.classList.add("active");

      wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
    }
  }
}

accordionList.addEventListener("click", showAccordion);
