
const openMediaDevices = async (constraints) => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};

try {
  const stream = openMediaDevices({ video: false, audio: true });
  console.log("Got MediaStream:", stream);
} catch (error) {
  console.error("Error accessing media devices.", error);
}
let micvolumevar;
async function playAudioFromMicrophone() {
  try {
    const constraints = { audio: true, video: false }; // Only audio
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    // Create an audio element to play the audio stream
    const audioElement = document.createElement("audio");
    audioElement.srcObject = stream;
    audioElement.play(); // Start playing the audio
    micvolumevar = audioElement.volume;

    // Optionally, you can add the audio element to the DOM
    document.body.appendChild(audioElement);
  } catch (error) {
    console.error("Error opening audio microphone.", error);
  }
}
playAudioFromMicrophone();