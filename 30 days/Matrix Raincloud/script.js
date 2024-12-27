function createNumbersRain() {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const fontSize = 25;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "#0f0";
      ctx.font = fontSize + "px monospace";
  
      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 10);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
  
        ctx.fillText(text, x, y);
  
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
  
        drops[i]++;
      }
    }

setInterval(draw, 50);

}
createNumbersRain();

document.addEventListener("DOMContentLoaded", createNumbersRain)