function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const loader = document.getElementById("form-loader");
  loader.classList.remove("hidden");

  // Simulate form processing delay
  setTimeout(() => {
    alert("Account successfully created! 🎉");
    loader.classList.add("hidden");
    document.getElementById("signup-form").reset();
  }, 2000);
});

// === Dark Mode Toggle Logic ===
const toggleInput = document.getElementById("theme-toggle");
const isDark = localStorage.getItem("dark-mode") === "true";

if (isDark) {
  document.body.classList.add("dark");
  toggleInput.checked = true;
}

toggleInput.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", toggleInput.checked);
});
