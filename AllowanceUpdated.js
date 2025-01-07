document.addEventListener("DOMContentLoaded", () => {
    const animation = document.getElementById("animation");
    animation.classList.add("frame-2");
  
    setTimeout(() => {
      animation.classList.remove("frame-2");
    }, 1500);
    
    setTimeout(() => {
      window.location.href = "Login.html";
    }, 1600);
    
  });
  