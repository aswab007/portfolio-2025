document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
  
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  
    themeToggle.addEventListener("click", function () {
      let theme = document.documentElement.getAttribute("data-theme");
      theme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", theme);
      
      localStorage.setItem("theme", theme);
    });
  });
  