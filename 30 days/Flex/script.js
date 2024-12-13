const panels = document.querySelectorAll('.panel');
const screamSound = document.getElementById('screamSound');
const whisperSound = document.getElementById('whisperSound');
const heartbeatSound = document.getElementById('heartbeatSound');

// Play background sounds
heartbeatSound.volume = 0.3;
heartbeatSound.play();
whisperSound.volume = 0.2;
whisperSound.play();

// Add event listeners for panels
panels.forEach((panel) => {
  panel.addEventListener('mouseenter', () => {
    // Make the panel shake
    panel.classList.add('shake');
    setTimeout(() => panel.classList.remove('shake'), 500);
    
    // Random chance to play a scream
    if (Math.random() > 0.8) {
      screamSound.volume = 0.5;
      screamSound.play();
    }
  });

  panel.addEventListener('click', () => {
    panel.classList.toggle('open');
    
    // Random flicker effect
    if (panel.classList.contains('open')) {
      flickerLights();
    }
  });
});

// Flickering lights effect
function flickerLights() {
  document.body.style.transition = 'background-color 0.1s';
  let flickerInterval = setInterval(() => {
    document.body.style.backgroundColor = Math.random() > 0.5 ? '#0d0d0d' : '#1a0000';
  }, 100);

  setTimeout(() => clearInterval(flickerInterval), 2000);
}

// Random panel shakes
setInterval(() => {
  const randomPanel = panels[Math.floor(Math.random() * panels.length)];
  randomPanel.classList.add('shake');
  setTimeout(() => randomPanel.classList.remove('shake'), 500);
}, 3000);

// Add the shake class
const style = document.createElement('style');
style.innerHTML = `
  .shake {
    animation: shake 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);
