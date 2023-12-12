const flowerContainer = document.getElementById('flower-container');
const generateFlowers = document.getElementById('generate-flowers');

// Function to generate a new flower
function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${Math.random() * window.innerWidth}px`;

    flowerContainer.appendChild(flower);

    // Remove the flower after it falls out of the viewport
    flower.addEventListener('animationiteration', () => {
        flower.remove();
    });
}

// Generate a new flower on click or drag
generateFlowers.addEventListener('mousedown', createFlower);

// Create falling flowers at regular intervals
setInterval(createFlower, 1000);
