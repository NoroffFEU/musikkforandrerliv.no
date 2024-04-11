
//Expands text when clicking on button: 
export function toggleTextOverflow(sectionContainer, textContainer, showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    textContainer.classList.toggle("overflow-auto");
     //Closed
    if (textContainer.classList.contains("overflow-auto")) {
      textContainer.style.overflow = "auto";
      textContainer.style.maxHeight = "";
      showMoreBtn.textContent = "READ MORE";
      sectionContainer.style.height = "auto";
    } else { //Open
      let textContentHeight = textContainer.scrollHeight;
      textContainer.style.maxHeight = textContentHeight + "px";
      textContainer.style.overflow = "";
      showMoreBtn.textContent = "READ LESS";
      sectionContainer.style.height = "auto";
    }
  });
}


