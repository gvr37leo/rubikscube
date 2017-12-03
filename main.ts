/// <reference path="cube2.ts" />
/// <reference path="utils.ts" />
/// <reference path="buttons.ts" />


var canctx = createCanvas(600,450)
var canvas = canctx.canvas
var ctxt = canctx.ctxt
canvas.style.backgroundColor = 'grey'

var canvaselement = document.querySelector('#canvas')
var buttonselement = document.querySelector('#buttons')
var buttonsReelement = document.querySelector('#buttonsRe')
var specialselement = document.querySelector('#specials')
canvaselement.appendChild(canvas)

var cube = new Cube2()
cube.draw(ctxt)

// cube.rotate()

// new Button(specialselement,'scramble','',() => {
//     cube.scramble(50)
//     cube.draw(ctxt)
// })

// new Button(specialselement,'solve','',() => {
//     cube.solve()
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'F','',() => {
//     cube.F(false)
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'B','',() => {
//     cube.B(false)
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'L','',() => {
//     cube.L(false)
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'R','',() => {
//     cube.R(false)
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'U','',() => {
//     cube.U(false)
//     cube.draw(ctxt)
// })

// new Button(buttonselement,'D','',() => {
//     cube.D(false)
//     cube.draw(ctxt)
// })



// new Button(buttonsReelement,'F`','',() => {
//     cube.F(true)
//     cube.draw(ctxt)
// })

// new Button(buttonsReelement,'B`','',() => {
//     cube.B(true)
//     cube.draw(ctxt)
// })

// new Button(buttonsReelement,'L`','',() => {
//     cube.L(true)
//     cube.draw(ctxt)
// })

// new Button(buttonsReelement,'R`','',() => {
//     cube.R(true)
//     cube.draw(ctxt)
// })

// new Button(buttonsReelement,'U`','',() => {
//     cube.U(true)
//     cube.draw(ctxt)
// })

// new Button(buttonsReelement,'D`','',() => {
//     cube.D(true)
//     cube.draw(ctxt)
// })

