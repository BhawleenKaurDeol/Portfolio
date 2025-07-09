  function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
  }

  function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
  }

  //menu for mobile screens
 const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  // Show menu
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.classList.remove("translate-x-full");
    }, 10); // short delay for transition effect
  });

  // Hide menu
  function hideMobileMenu() {
    mobileMenu.classList.add("translate-x-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // match transition duration
  }

  closeMenu.addEventListener("click", hideMobileMenu);

  // Also close when clicking any link
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", hideMobileMenu);
  });

document.querySelector("form").addEventListener("submit", function (e) {
    let valid = true;

    // Get form inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset previous errors
    [nameError, emailError, messageError].forEach(el => el.classList.add("hidden"));

    // Validate Name
    if (name.value.trim() === "") {
      nameError.classList.remove("hidden");
      valid = false;
    }

    // Validate Email with Regex
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(email.value.trim())) {
  emailError.textContent = "Please enter a valid email address (e.g., yourname@example.com).";
  emailError.classList.remove("hidden");
  valid = false;
}

    // Validate Message
    if (message.value.trim().length < 10) {
      messageError.textContent = "Message should be at least 10 characters.";
      messageError.classList.remove("hidden");
      valid = false;
    }

    if (!valid) e.preventDefault(); // prevent form from submitting
  });

