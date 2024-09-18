//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, 50, 50);

    ctx.beginPath();
    ctx.arc(100, 100, 25, 0, Math.PI * 2);
    ctx.fill();
