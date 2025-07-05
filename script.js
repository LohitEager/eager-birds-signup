// === Toggle Password Visibility ===
function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// === Form Submission Handler ===
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const button = document.querySelector(".cta-button");
  const buttonText = button.querySelector(".btn-text");
  const spinner = button.querySelector(".btn-spinner");
  const loader = document.getElementById("form-loader");

  // Start loading animation
  button.classList.add("loading");
  button.disabled = true;
  buttonText.textContent = "Creating...";
  spinner.style.display = "inline-block";
  loader.classList.remove("hidden");

  // Simulate form processing delay
  setTimeout(() => {
    alert("Account successfully created! 🎉");

    // Reset all UI elements
    button.classList.remove("loading");
    button.disabled = false;
    buttonText.textContent = "Sign Up";
    spinner.style.display = "none";
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

function getPasswordStrength(password) {
  if (!password) return 0;

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password) || /[^A-Za-z0-9]/.test(password)) strength++;

  return Math.min(strength, 3);
}

function updateStrengthBar(password) {
  const strength = getPasswordStrength(password);
  strengthBar.setAttribute("data-strength", strength);
}

// === Floating Bird Click Event ===
const floatingBird = document.querySelector(".floating-bird-container");
if (floatingBird) {
  floatingBird.style.pointerEvents = "auto";
  floatingBird.addEventListener("click", () => {
    alert("Tweet! I'm your Eager Bird buddy 🐦✨");
  });
}
