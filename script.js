const drawingArea = document.getElementById('drawing-area');

drawingArea.addEventListener('mousemove', function(event) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    const size = Math.random() * 50 + 10;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    circle.style.left = `${event.clientX - size / 2}px`;
    circle.style.top = `${event.clientY - size / 2}px`;
    
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    circle.style.backgroundColor = color;
    
    drawingArea.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 1000);
});
