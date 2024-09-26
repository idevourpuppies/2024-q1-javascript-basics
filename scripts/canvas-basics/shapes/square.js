// @ts-check
export class SquareShape {
	constructor(x, y, ctx, canvas) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.canvas = canvas;

		this.width = 50;
		this.height = this.width;
		this.hue = 0;

		this.speedMult = 10;
		this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
		this.speedY = Math.floor(Math.random() * this.speedMult) + 1;

		this.dirx = 1;
		this.diry = 1;
	}

	update() {
		this.x += this.speedX * this.dirx;
		this.y += this.speedY * this.diry;
		this.hue++;

		if (this.hue > 360) {
			this.hue = 0;
		}

		if (this.x < 0) {
			// offscrean leftso move right
			this.dirx = 1;
		} else if (this.x + this.width > this.canvas.width) {
			//offscreen right so move left
			this.dirx = -1;
		}

		if (this.y < 0) {
			// offscrean top so move down
			this.diry = 1;
		} else if (this.y + this.height > this.canvas.height) {
			//offscreen bottom so move up
			this.diry = -1;
		}
	}

	draw() {
		this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
