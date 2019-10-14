//init code taken from https://www.sitepoint.com/quick-tip-game-loop-in-javascript/

//gets canvas, gets reference to canvas
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

//height / width of browser window
var width
var height

//sets x / y speeds seperatly
var xSpeed = 0.5
var ySpeed = 0.5

//called on window resize to reposition canvas
var resize = function() {
    width = window.innerWidth * 2
    height = window.innerHeight * 2
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = 'red'
}
window.onresize = resize
resize()

ctx.fillStyle = 'red'

//sets state of player / keyMap
var state = {
    x: (width / 2),
    y: (height / 2),
    pressedKeys: {
        left: false,
        right: false,
        up: false,
        down: false
    }
}
var keyMap = {
    68: 'right',
    65: 'left',
    87: 'up',
    83: 'down'
}

function keydown(event) {
    var key = keyMap[event.keyCode]
    state.pressedKeys[key] = true
}
function keyup(event) {
    var key = keyMap[event.keyCode]
    state.pressedKeys[key] = false
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)

//updates player movement
function update(progress) {
if (state.pressedKeys.left) {
        state.x -= progress * xSpeed
    }
    if (state.pressedKeys.right) {
        state.x += progress * xSpeed
    }
    if (state.pressedKeys.up) {
        state.y -= progress * ySpeed
    }
    if (state.pressedKeys.down) {
        state.y += progress * ySpeed
    }

    //flip position at boundaries
    if (state.x > width) {
        state.x -= width
    }
    else if (state.x < 0) {
        state.x += width
    }
    if (state.y > height) {
        state.y -= height
    }
    else if (state.y < 0) {
        state.y += height
    }
}

//draws player
function draw() {
    ctx.clearRect(0, 0, width, height)

    ctx.fillRect(state.x - 10, state.y - 10, 50, 50)
}

//calls until the end of the sands of time
function loop(timestamp) {
    var progress = (timestamp - lastRender)

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)