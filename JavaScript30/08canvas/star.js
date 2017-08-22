function Star(t, i, s, h) {
    this.id = t, 
    this.x = i,
    this.y = s,
    this.useCacha = h, 
    this.cacheCanvas = document.createElement("canvas"), 
    this.cacheCtx = this.cacheCanvas.getContext("2d"), 
    this.r = Math.floor(Math.random() * star_r) + 1, 
    this.cacheCtx.width = 6 * this.r, 
    this.cacheCtx.height = 6 * this.r;
    var o = (Math.floor(10 * Math.random()) + 1) / star_alpha;
    this.color = "rgba(255,255,255," + o + ")", h && this.cache()
}
function getPreviousDot(t, i) {
    return !(0 == t || t - i < 0) && (void 0 !== dots[t - i] && dots[t - i])
}

function setCanvasSize() {
    WIDTH = document.documentElement.clientWidth, 
    HEIGHT = document.documentElement.clientHeight, 
    canvas.setAttribute("width", WIDTH), 
    canvas.setAttribute("height", HEIGHT)
}

function init() {
    ctx.strokeStyle = "white", 
    ctx.shadowColor = "white";
    for (var t = 0; t < initStarsPopulation; t++) {
        stars[t] = new Star(t, Math.floor(Math.random() * WIDTH),
        Math.floor(Math.random() * HEIGHT), !0);
    }
        
    ctx.shadowBlur = 0, animate()
}

function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var t in stars) stars[t].move();
    for (var t in dots) dots[t].move();
    requestAnimationFrame(animate)
}

function degToRad(t) {
    return t * (Math.PI / 180)
}
var stars = [],
    star_r = 4,
    star_alpha = 5,
    initStarsPopulation = 50,
    move_distance = .25,
    dots = [],
    dot_r = 5,
    dot_speeds = .5,
    dot_alpha = .5,
    dot_aReduction = .01,
    dotsMinDist = 5,
    maxDistFromCursor = 50,
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    WIDTH, HEIGHT, mouseMoving = !1,
    mouseMoveChecker, mouseX, mouseY;
Star.prototype = {
    draw: function () {
        this.useCacha ? ctx.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r) : (ctx.save(), ctx.fillStyle = this.color, ctx.shadowBlur = 2 * this.r, ctx.beginPath(), ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1), ctx.closePath(), ctx.fill(), ctx.restore())
    },
    cache: function () {
        this.cacheCtx.save(), 
        this.cacheCtx.fillStyle = this.color, 
        this.cacheCtx.shadowColor = "white", 
        this.cacheCtx.shadowBlur = 2 * this.r, 
        this.cacheCtx.beginPath(), 
        this.cacheCtx.arc(3 * this.r, 3 * this.r, this.r, 0, 2 * Math.PI),
         this.cacheCtx.closePath(), 
         this.cacheCtx.fill(), 
         this.cacheCtx.restore()
    },
    move: function () {
        this.y -= move_distance, this.y <= -10 && (this.y += HEIGHT + 10), this.draw()
    },
    die: function () {
        stars[this.id] = null, delete stars[this.id]
    }
}, window.onmousemove = function (t) {
    mouseMoving = !0, mouseX = t.clientX, mouseY = t.clientY, clearInterval(mouseMoveChecker), mouseMoveChecker = setInterval(function () {
        mouseMoving = !1
    }, 1e3)
}, setCanvasSize(), init();