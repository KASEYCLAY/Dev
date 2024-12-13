// Listen for keydown events
window.addEventListener('keydown', function (event) {
    const keyCode = event.key.toUpperCase().charCodeAt(0); // Convert the key to its ASCII code
    playSound(keyCode); // Pass the numeric ASCII keyCode
});

// Function to play the sound and animate the key
function playSound(keyCode) {
    // Select the audio and corresponding key element based on data-key
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);

    // If no matching audio is found, exit
    if (!audio) return;

    // Add 'active' class to the key for animation
    keyElement.classList.add('active');
    
    // Rewind the audio to the start and play it
    audio.currentTime = 0;
    audio.play();

    // Remove 'active' class after 100ms
    setTimeout(() => {
        keyElement.classList.remove('active');
    }, 100);
}
