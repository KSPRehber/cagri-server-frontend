// Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an analyser node to get frequency and amplitude data
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;

const dataArray = new Uint8Array(analyser.frequencyBinCount);
let volume = localStorage.getItem("decibelLevel");
let freq = 5;

const slider = document.getElementById("slider");
const sliderValueDisplay = document.getElementById("sliderValue");
const canvas = document.getElementById("sineWaveCanvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let phaseShift = 0; // Phase shift for animation
const waveSpeed = 0.05; // Speed of the wave's movement (adjust to control the animation speed)

// Get current time in seconds
function getTimeInSeconds() {
  return performance.now() / 1000;
}

function drawSineWave() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas

  const timeInSeconds = getTimeInSeconds();

  // Scale amplitude properly
  let amplitude = Math.min(volume * 2, canvasHeight / 2); // Scale amplitude based on volume
  const frequencyInHertz = freq || 1; // Ensure freq is initialized and avoid division by 0

  ctx.beginPath();
  ctx.moveTo(0, canvasHeight / 2); // Start point

  for (let x = 0; x < canvasWidth; x++) {
    // Formula considering time, frequency, and x value for drawing a sine wave in pixels
    let y =
      canvasHeight / 2 +
      amplitude *
        Math.sin(
          2 * Math.PI * frequencyInHertz * (timeInSeconds + x / canvasWidth)
        );
    ctx.lineTo(x, y); // Draw line to next point
  }

  ctx.strokeStyle = "#00FF00"; // Set color
  ctx.lineWidth = 4; // Set line thickness
  ctx.stroke(); // Render the wave

  requestAnimationFrame(drawSineWave); // Continuously call the draw function for animation
}

// Start drawing the sine wave animation
drawSineWave();

let x;
setInterval(() => {
  x = localStorage.getItem("decibelLevel");
  volume = 50 - (x * -1);
}, 10);


