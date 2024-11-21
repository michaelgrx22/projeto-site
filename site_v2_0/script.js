const pong = document.getElementById("pong");
const context = pong.getContext("2d");

const paddleWidth = 10, paddleHeight = 75; 
let ballRadius = 7; 

let ballX = pong.width / 2, ballY = pong.height / 2;
let ballSpeedX = 2, ballSpeedY = 2; 

let playerY = pong.height / 2 - paddleHeight / 2;
let aiY = pong.height / 2 - paddleHeight / 2;
let playerSpeed = 0, aiSpeed = 4;

pong.width = 800;
pong.height = 400;

function drawPaddles() {
    context.fillStyle = "#ffffff";
    context.fillRect(0, playerY, paddleWidth, paddleHeight); 
    context.fillRect(pong.width - paddleWidth, aiY, paddleWidth, paddleHeight); 
}

function drawBall() {
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, false);
    context.fillStyle = "#ffffff";
    context.fill();
    context.closePath();
}

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY + ballRadius > pong.height || ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY; 
    }

    if (ballX + ballRadius > pong.width - paddleWidth) { 
        if (ballY > aiY && ballY < aiY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            resetBall();
        }
    }

    if (ballX - ballRadius < paddleWidth) { 
        if (ballY > playerY && ballY < playerY + paddleHeight) {
            ballSpeedX = -ballSpeedX;
        } else {
            resetBall();
        }
    }
}

function moveAI() {
    if (aiY + paddleHeight / 2 < ballY) {
        aiY += aiSpeed;
    } else if (aiY + paddleHeight / 2 > ballY) {
        aiY -= aiSpeed;
    }
}

function movePlayer() {
    playerY += playerSpeed;
    if (playerY < 0) playerY = 0;
    if (playerY + paddleHeight > pong.height) playerY = pong.height - paddleHeight;
}

function resetBall() {
    ballX = pong.width / 2;
    ballY = pong.height / 2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 3; 
}

function gameLoop() {
    context.clearRect(0, 0, pong.width, pong.height); 
    drawPaddles();
    drawBall();
    moveBall();
    movePlayer();
    moveAI();
    requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener("mousemove", (event) => {
    playerY = event.clientY - pong.offsetTop - paddleHeight / 2;
});
