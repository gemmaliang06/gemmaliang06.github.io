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