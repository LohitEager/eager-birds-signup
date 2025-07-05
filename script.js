function togglePassword() {
  const input = document.getElementById('password');
  input.type = input.type === 'password' ? 'text' : 'password';
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