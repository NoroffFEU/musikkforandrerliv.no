function validateform() {
  let name = getElementById("name").value;
  let email = getElementById("email").value;
  let subject = getElementById("subject").value;
  let message = getElementById("message").value;
  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  if (email === "") {
    alert("Please enter your email");
    return false;
  }
  if (subject === "") {
    alert("Please enter your subject");
    return false;
  }
  if (message === "") {
    alert("Please enter your message");
    return false;
  }
  return true;
}

function submitFrom() {
  if (validateform()) {
    alert("Thank you for your contacting us!");
    showSuccessPopup();
    resetForm();
  }
}

function showSuccessPopup() {
  alert("Your message is sent");
}

function resetForm() {
  document.getElementById("contactForm").reset();
}
