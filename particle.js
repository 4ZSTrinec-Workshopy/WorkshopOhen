let particles = []

function spawnParticles() {
    particles.push(new Particle(window.innerWidth * Math.random(), window.innerHeight, 100 + Math.random() * 50))
    particles.push(new Particle(window.innerWidth * Math.random(), window.innerHeight, 100 + Math.random() * 50))
    particles.push(new Particle(window.innerWidth * Math.random(), window.innerHeight, 100 + Math.random() * 50))
}

class Particle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.direction = Math.random() * Math.PI + Math.PI/2
        this.lifeTime = 1.0
        this.rgb = "rgb( " + (226 + (Math.random() * 25 - 10)) +" , " + (88 + (Math.random() * 25 - 10)) + ", " + (34 + (Math.random() * 25 - 10)) + ")";
    }

    draw(ctx) {
        this.x += Math.sin(this.direction) * 2.5
        this.y += Math.cos(this.direction) * 2.5

        if(this.lifeTime <= 0.05) {
            for(let i = 0; i < particles.length; i++) {
                if(particles[i] == this) {
                    particles.splice(i, 1);
                    return;
                }
            }
        }
        
        this.lifeTime -= 0.003;

        ctx.fillStyle = this.rgb
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, this.radius * this.lifeTime, this.radius * this.lifeTime, 0, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.fill()
    }
}