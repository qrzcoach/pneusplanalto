// BOLINHAS ANIMADAS DE FUNDO
const canvas = document.getElementById('background-bubbles');
const ctx = canvas.getContext('2d');
let width, height;

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 8 + 2,
    speed: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.5 + 0.2
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 204, 0, ${p.opacity})`;
    ctx.fill();

    p.y -= p.speed;
    if (p.y < -10) {
      p.y = height + 10;
      p.x = Math.random() * width;
    }
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();
