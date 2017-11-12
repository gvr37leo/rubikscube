/// <reference path="cube.ts" />
/// <reference path="utils.ts" />
/// <reference path="buttons.ts" />


var canctx = createCanvas(600,450)
var canvas = canctx.canvas
var ctxt = canctx.ctxt
canvas.style.backgroundColor = 'lightgrey'

var cube = new Cube()
cube.draw(ctxt)

new Button(document.body,'F','',() => {
    cube.F(false)
    cube.draw(ctxt)
})

new Button(document.body,'B','',() => {
    cube.B(false)
    cube.draw(ctxt)
})

new Button(document.body,'L','',() => {
    cube.L(false)
    cube.draw(ctxt)
})

new Button(document.body,'R','',() => {
    cube.R(false)
    cube.draw(ctxt)
})

new Button(document.body,'U','',() => {
    cube.U(false)
    cube.draw(ctxt)
})

new Button(document.body,'D','',() => {
    cube.D(false)
    cube.draw(ctxt)
})

