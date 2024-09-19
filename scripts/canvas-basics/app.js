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

function drawLoop(timestamp) {
	let elapsedTime = timestamp - lastTime;
	lastTime = timestamp;

	ctx.fillStyle = `hsla(${hue}, 100%, 50%, 100%)`;
	ctx.fillRect(250, 250, 50, 50);
	hue = hue + 1;
	console.log(elapsedTime);

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
