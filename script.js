const rectangle = document.querySelector('.rectangle');
const circles = document.querySelectorAll('.circle');

// Funktion zum Ändern des Verhältnisses und der Abstände
function changeShape(rectangleWidth, rectangleHeight, circleOffset) {
  rectangle.style.width = rectangleWidth + '%';
  rectangle.style.height = rectangleHeight + '%';

  circles.forEach(circle => {
    circle.style.top = circleOffset + 'px';
    circle.style.left = circleOffset + 'px';
    circle.style.bottom = circleOffset + 'px';
    circle.style.right = circleOffset + 'px';
  });
}

// Beispiel: Ändere das Rechteck auf 70% Breite und 50% Höhe, Kreise 20px entfernt
changeShape(70, 50, 20);
