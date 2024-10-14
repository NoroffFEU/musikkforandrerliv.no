//Expands text when clicking on button:
export function toggleTextOverflow(
  sectionContainer,
  textContainer,
  showMoreBtn
) {
  showMoreBtn.addEventListener("click", () => {
    textContainer.classList.toggle("overflow-auto");
    //Closed
    if (textContainer.classList.contains("overflow-auto")) {
      textContainer.style.overflow = "auto";
      textContainer.style.maxHeight = "";
      showMoreBtn.textContent = "READ MORE";
      sectionContainer.style.height = "auto";
    } else {
      //Open
      let textContentHeight = textContainer.scrollHeight;
      textContainer.style.maxHeight = textContentHeight + "px";
      textContainer.style.overflow = "";
      showMoreBtn.textContent = "READ LESS";
      sectionContainer.style.height = "auto";
    }
  });
}

const signUpButton = document.getElementById("signUpButton");
const btnText = document.getElementById("btnText");
const loader = document.getElementById("loader");
const checkmark = document.getElementById("checkmark");

signUpButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Show loader and hide text
  btnText.style.display = "none";
  loader.style.display = "block";
  checkmark.style.display = "none"; // Hide the checkmark initially

  // Simulate a network request delay (for demonstration purposes)
  setTimeout(function () {
    // Hide loader after 3 seconds and show the checkmark
    loader.style.display = "none";
    checkmark.style.display = "inline-block"; // Show the checkmark

    // Optional: Disable the button or prevent further clicks
    signUpButton.disabled = true;
    signUpButton.style.cursor = "default";
  }, 3000);
});
