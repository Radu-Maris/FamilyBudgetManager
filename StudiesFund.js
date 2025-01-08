document.addEventListener("DOMContentLoaded", () => {
    const animation = document.getElementById("animation");
    
    animation.offsetHeight;
    
    animation.classList.add("frame-2");
  
    setTimeout(() => {
      animation.classList.remove("frame-2");
    }, 1500);
    
    setTimeout(() => {
      window.location.href = "ChildMainMenu.html";
    }, 1600);
    
  });
  