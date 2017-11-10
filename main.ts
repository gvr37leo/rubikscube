/// <reference path="cube.ts" />
/// <reference path="utils.ts" />

var canctx = createCanvas(600,450)
var canvas = canctx.canvas
var ctxt = canctx.ctxt
canvas.style.backgroundColor = 'lightgrey'

var cube = new Cube()

cube.draw(ctxt)

cube.U(false)
cube.U(true)

cube.draw(ctxt)

// cube.D(false)
// cube.D(true)

// cube.draw(ctxt)
