// === Toggle Password Visibility ===
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// === Form Submission Handler ===
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const loader = document.getElementById("form-loader");
  loader.classList.remove("hidden");

  // Simulate form processing delay
  setTimeout(() => {
    alert("Account successfully created! 🎉");
    loader.classList.add("hidden");
    document.getElementById("signup-form").reset();
    updateStrengthBar(""); // Reset strength bar
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

// === Password Strength Logic ===
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");

passwordInput.addEventListener("input", () => {
  const strength = getPasswordStrength(passwordInput.value);
  strengthBar.setAttribute("data-strength", strength);
});

// Strength scale: 0 (empty), 1 (weak), 2 (moderate), 3 (strong)
function getPasswordStrength(password) {
  if (!password) return 0;

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) strength++;

  return Math.min(strength, 3);
}

// Reset strength bar on form clear
function updateStrengthBar(password) {
  const strength = getPasswordStrength(password);
  strengthBar.setAttribute("data-strength", strength);
}
