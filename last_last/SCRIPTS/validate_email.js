function validation() {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim();
  
    if (!emailValue.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      alert("Incorrect email format");
      return false;
    }
    return true;
  }