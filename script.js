const canvas = document.getElementById('canvas');
const colorEl = document.getElementById('color');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const clearBtn = document.getElementById('clear');
const sizeEl = document.getElementById('size');

const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = colorEl.value;
let x = 0;
let y = 0;

colorEl.addEventListener('change', e => {
    color = colorEl.value;
});

decreaseBtn.addEventListener('click', e => {
    if (size === 1) {
        return;
    }

    size--;
    sizeEl.innerText = `${size}`;
});

increaseBtn.addEventListener('click', e => {
    if (size === 50) {
        return;
    }

    size++;
    sizeEl.innerText = `${size}`;
});

canvas.addEventListener('mousedown', e => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', e => {
    isPressed = false;

    x = 0;
    y = 0;
});

canvas.addEventListener('mousemove', e => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, Math.PI * 2, 0);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

