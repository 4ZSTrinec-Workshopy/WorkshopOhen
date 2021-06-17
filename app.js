let canvas
let ctx

window.onload = function() {
    canvas = document.getElementById("mainCanvas")
    ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    particles.push(new Particle(100, 100, 50));

    setInterval(run, 5)
    setInterval(spawnParticles, 3)
}

function run() {
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach(element => {
        element.draw(ctx)
    });
}