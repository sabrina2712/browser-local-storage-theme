document.querySelectorAll('.logo-button input[name="theme"]').forEach(logo => {
  logo.addEventListener("change", switchTheme, false);
});

function switchTheme(e) {
  document.documentElement.setAttribute("data-theme", e.target.value);
  localStorage.setItem("theme", e.target.value);

  console.log(e.target.value);
}
