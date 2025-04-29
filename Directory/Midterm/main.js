const circleCursor = document.getElementById('circle-cursor');

document.addEventListener("mousemove", (event) => {
  const cursor = document.getElementById("circle-cursor");
  if (cursor) {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
  }
});

// Hide the circle cursor when hovering over an anchor
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("mouseenter", () => {
    const cursor = document.getElementById("circle-cursor");
    if (cursor) {
      cursor.style.display = "none"; // Hide the circle cursor
    }
  });

  anchor.addEventListener("mouseleave", () => {
    const cursor = document.getElementById("circle-cursor");
    if (cursor) {
      cursor.style.display = "block"; // Show the circle cursor again
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const logo1 = document.querySelector('.logo_1');
  const logo2 = document.querySelector('.logo_2');

  if (logo1) {
    logo1.addEventListener('mouseover', () => {
      logo2.style.animation = 'logoRotate 0.8s';
    });

    logo1.addEventListener('mouseout', () => {
      logo2.style.animation = '';
    });
  }

  if (logo2) {
    logo1.addEventListener('mouseover', () => {
      logo2.style.animation = 'logoRotateCounterClockwise 0.8s';
    });

    logo1.addEventListener('mouseout', () => {
      logo2.style.animation = '';
    });
  
  }
});

// Accessing the artworkInfo object
console.log(artworkInfo.first.artwork_img); // Logs "love at first sight.jpeg"

// Example: Using the artworkInfo data
const artworkImage = artworkInfo.first.artwork_img;

// Dynamically setting an image source
const imgElement = document.createElement('img');
imgElement.src = `/path/to/images/${artworkImage}`;
document.body.appendChild(imgElement);


var artworkInfo = {
  first: {
    artwork_img: "love at first sight.jpeg"
  },
  second: {
    firstName: "Sally",
    lastName: "Omally",
    pets: ["ButterFly", "Bird"],
  },
  third: {
    firstName: "Tony",
    lastName: "Pony",
    pets: ["Dog", "Cat", "Iguana"],
  },
  fourth: {
    firstName: "Tony",
    lastName: "Pony",
    pets: ["Dog", "Cat", "Iguana"],
  },
  fifth: {
    firstName: "Tony",
    lastName: "Pony",
    pets: ["Dog", "Cat", "Iguana"],
  },
  sixth: {
    firstName: "Tony",
    lastName: "Pony",
    pets: ["Dog", "Cat", "Iguana"],
  },
  seventh: {
    firstName: "Tony",
    lastName: "Pony",
    pets: ["Dog", "Cat", "Iguana"],
  },
};
