const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 400

class Enemy {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.y += 1
    }
}

const enemies = [new Enemy(100, 100, 10, 'red')]
let last = 0

function animate(now) {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    enemies.forEach((enemy, index) => {
        enemy.update()
        if (enemy.y + enemy.radius > canvas.height) {
            enemies.splice(index, 1)
        }
    })

    if (!last || now - last >= 2 * 1000) {
        last = now;
        enemies.push(new Enemy(100, 100, 10, 'red'))
    }

    console.log(enemies)
}

animate()