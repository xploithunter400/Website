// FULL PAGE MATRIX
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
const fontSize = 40;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Slight transparency
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for(let i=0;i<drops.length;i++){
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);

// Resize on window resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// SCROLLING TICKER
const ticker = document.getElementById('ticker');
const messages = [
  "Thanks to: ALIXSEC • NTB CYBER TEAM • XseC404",
  "Hashtags: #SECURITY_ALERT #CYBER #HACKER_STYLE",
  "Stay alert! Cybersecurity is critical.",
  "Responsible disclosure protects users and data."
];

// Repeat messages to make ticker continuous
ticker.textContent = messages.join(" • ") + " • " + messages.join(" • ");
