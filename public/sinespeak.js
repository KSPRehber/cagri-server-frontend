// Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an analyser node to get frequency and amplitude data
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;

const dataArray = new Uint8Array(analyser.frequencyBinCount);
let volume = 50;
let freq = 5;

// Get the microphone input
/*
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        // Function to analyze frequency and amplitude
        function analyzeAudio() {
            // Get the amplitude data (volume)
            analyser.getByteTimeDomainData(dataArray);

            // Calculate average volume
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
                sum += (dataArray[i] - 128) * (dataArray[i] - 128);
            }
            volume = Math.sqrt(sum / dataArray.length);

            // Get the frequency data
            analyser.getByteFrequencyData(dataArray);

            // Find the peak frequency
            let maxIndex = 0;
            let maxValue = 0;
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > maxValue) {
                    maxValue = dataArray[i];
                    maxIndex = i;
                }
            }

            // Convert the index to frequency
            freq = maxIndex * audioContext.sampleRate / analyser.fftSize;

            // Call this function again to continue analyzing
            requestAnimationFrame(analyzeAudio);
        }

        // Start analyzing
        analyzeAudio();
    })
    .catch(error => {
        console.error('Error accessing the microphone:', error);
    });
*/
// Canvas setup
const slider = document.getElementById('slider');
const sliderValueDisplay = document.getElementById('sliderValue');

// Add an event listener to detect when the slider value changes
slider.addEventListener('input', function () {
    // Get the current value of the slider
    const currentValue = slider.value;

    // Update the text displaying the current value
    volume = currentValue;
});
const canvas = document.getElementById('sineWaveCanvas');
const ctx = canvas.getContext('2d');
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
        let y = canvasHeight / 2 + amplitude * Math.sin(2 * Math.PI * frequencyInHertz * (timeInSeconds + x / canvasWidth));
        ctx.lineTo(x, y); // Draw line to next point
    }

    ctx.strokeStyle = '#00FF00'; // Set color
    ctx.lineWidth = 4; // Set line thickness
    ctx.stroke(); // Render the wave

    requestAnimationFrame(drawSineWave); // Continuously call the draw function for animation
}

// Start drawing the sine wave animation
drawSineWave();
