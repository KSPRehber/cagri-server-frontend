const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

// Listen to mic input and get the decibels of it in absolute value
async function playAudioFromMicrophone() {
  try {
    const constraints = { audio: true, video: false }; // Only audio
    let stream = await navigator.mediaDevices.getUserMedia(constraints);

    const mutesvg = document.getElementById("mutedico");
    const wave = document.getElementById("sineWaveCanvas");
    let ff = false;
    
    function mutetest() {
      ff = !ff;
      if (ff == true) {
        mutesvg.style.display = "block";
        wave.style.display = "none";
        stream.getAudioTracks()[0].enabled = false; // or false to mute it.
      } else {
        mutesvg.style.display = "none";
        wave.style.display = "block";
        stream.getAudioTracks()[0].enabled = true; // or false to mute it.
      }
    }

  
    document.getElementById("myCheck").addEventListener("click", mutetest);
    document.getElementById("connectiontest").addEventListener("click", sendOffer);
    // Create an audio element to play the audio stream
    const audioElement = document.createElement("audio");
    audioElement.srcObject = stream;

    // Create an AudioContext
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create a MediaStreamAudioSourceNode directly from the microphone stream
    const source = audioContext.createMediaStreamSource(stream);

    // Create an AnalyserNode
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048; // Set FFT size, adjust as needed
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    // Connect the audio source to the analyser
    source.connect(analyser);
    analyser.connect(audioContext.destination); // Connect to the output (optional, can be removed if no playback is needed)

    // Function to get the current decibel level
    function getDecibelLevel() {
      analyser.getByteTimeDomainData(dataArray); // Get waveform data
      let sum = 0;

      // Calculate the average amplitude
      for (let i = 0; i < bufferLength; i++) {
        let amplitude = (dataArray[i] / 128) - 1.0; // Convert to range [-1, 1]
        sum += amplitude * amplitude; // Square the amplitude
      }

      const rms = Math.sqrt(sum / bufferLength); // Root mean square (RMS)
      const decibelLevel = 20 * Math.log10(rms); // Convert to decibels

      return decibelLevel;
    }

    // Example: Update decibel level every 500ms
    setInterval(() => {
      localStorage.setItem("decibelLevel", getDecibelLevel());
    }, 10);

  } catch (error) {
    console.error("Error opening audio microphone.", error);
  }
}
playAudioFromMicrophone();
