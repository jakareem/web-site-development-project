document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill out all required fields before submitting.");
      event.preventDefault();
    }
  });
});
