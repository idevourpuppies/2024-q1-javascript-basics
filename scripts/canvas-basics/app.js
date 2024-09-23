//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");

ctx.fillStyle = "hsla(0, 100, 100%, 100%)";
//"#ffffff"
//"white"

ctx.fillRect(0, 0, 50, 50);

ctx.beginPath();
ctx.arc(100, 100, 25, 0, Math.PI * 2);
ctx.fill();

let lastTime = 0;
let hue = 0;

let x1 = 0;
let y1 = 0;
let speedx = 1;
let speedy = 0.5;

function drawLoop(timestamp) {
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.fillStyle = `hsla(${hue}, 100%, 50%, 100%)`;
	ctx.fillRect(x1, y1, 100, 100);

	//hue = hue += 1;
	//hue += 1000000000;
	hue++;

	x1 += speedx;
	y1 += speedy;

	//console.log(elapsedTime);

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
