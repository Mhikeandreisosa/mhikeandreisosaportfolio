document.getElementById("play-worm").addEventListener("click", () => {
  const scene = document.getElementById("worm-scene");
  scene.innerHTML = ""; // Clear previous content
  scene.style.display = "block";

  // Create canvas
  const canvas = document.createElement("canvas");
  canvas.width = 400;
  canvas.height = 100;
  scene.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  console.log("Canvas created:", canvas);

  // Load worm image
  const wormImg = new Image();
  wormImg.src = "worm.jfif"; // Make sure this file exists

  // Load food image
  const foodImg = new Image();
  foodImg.src = "food.jfif"; // Replace with your actual food image filename

  // Wait for both images to load
  wormImg.onload = () => {
    foodImg.onload = () => {
      let position = 0;
      const interval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw worm
        ctx.drawImage(wormImg, position, 30, 40, 40);

        // Draw food (static at the end)
        ctx.drawImage(foodImg, 350, 30, 40, 40);

        if (position < 310) {
          position += 2;
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    foodImg.onerror = () => {
      console.error("Failed to load food image.");
      ctx.fillStyle = "#ff4081";
      ctx.fillRect(350, 30, 40, 40); // fallback food block
    };
  };

  wormImg.onerror = () => {
    console.error("Failed to load worm image.");
    ctx.fillStyle = "#a3c957";
    ctx.fillRect(0, 30, 40, 40); // fallback block worm
  };
});
