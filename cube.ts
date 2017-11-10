/// <reference path="vector.ts" />

enum Color { green, blue, orange, red, white, yellow }
enum Side{F,B,L,R,U,D}
class Action{
    side:Side
    counterClockWise:boolean

    constructor(side: Side, reverse: boolean){
        this.side = side
        this.counterClockWise = reverse
    }
}
class Cube {

    vals: Color[][][]

    constructor() {
        this.vals = new Array(6)

        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] = [
                [i, i, i],
                [i, i, i],
                [i, i, i],
            ]
        }
    }

    solve() {

    }

    scramble(n) {
        this.executeActions(this.generateRandomActions(n))
    }

    rotateCap(side: Side, counterclockwise: boolean){
        this.rotateCapTop(side,counterclockwise)
        this.rotateCapSides(side, counterclockwise)
    }

    F(counterclockwise:boolean) {
        this.rotateCap(0,counterclockwise)
    }

    B(counterclockwise: boolean) {
        this.rotateCap(1, counterclockwise)
    }

    L(counterclockwise: boolean) {
        this.rotateCap(2, counterclockwise)
    }

    R(counterclockwise: boolean) {
        this.rotateCap(3, counterclockwise)
    }

    U(counterclockwise: boolean) {
        this.rotateCap(4, counterclockwise)
    }

    D(counterclockwise: boolean) {
        this.rotateCap(5, counterclockwise)
    }

    generateRandomActions(n):Action[]{
        var sides = [Side.F, Side.B, Side.L, Side.R, Side.U, Side.D]
        var actions: Action[] = []
        for (var i = 0; i < n; i++) {
            var side = Math.floor(Math.random() * 6)
            var reversed = Math.random() > 0.5
            actions.push(new Action(sides[side], reversed))
        }
        return actions
    }

    executeActions(actions:Action[]){
        for(var action of actions){
            this.rotateCap(action.side,action.counterClockWise)
        }
    }

    private rotateCapTop(side: Side, reversed: boolean) {
        var cap = this.vals[side]
        var rot = reversed ? Math.PI / 2 : -Math.PI / 2;
        var vecs = [
            new Vector2(-1, 1),
            new Vector2(0, 1),
            new Vector2(-1, 1),
            new Vector2(-1, 0),
            new Vector2(-1, -1),
            new Vector2(0, -1),
            new Vector2(-1, -1),
            new Vector2(-1, 0),
        ]
        var vec1 = new Vector2(1, 1)
        for (var v of vecs) {
            v.rot(-rot).round().add(vec1)//negative rotation because need to look back
        }

        var newFront = [
            [getxy(cap, vecs[0]), getxy(cap, vecs[1]), getxy(cap, vecs[2]),],
            [getxy(cap, vecs[7]), cap[1][1], getxy(cap, vecs[3]),],
            [getxy(cap, vecs[6]), getxy(cap, vecs[5]), getxy(cap, vecs[4]),],
        ]
        cap = newFront
    }

    private rotateCapSides(side: Side, counterclockwise: boolean) {
        
        switch(side){
            // enum Side { F, B, L, R, U, D }
            case Side.F: {
                var newside = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ]
                copyEdge(this.vals[Side.U],newside
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                )
                copyEdge(this.vals[Side.U], newside
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                )
                copyEdge(this.vals[Side.U], newside
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                )
                copyEdge(this.vals[Side.U], newside
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                    , new Vector2(0, 0)
                )
                this.vals[Side.F] = newside
                break;
            }

            case Side.B: {
                this.vals[Side.B] = newside
                break;
            }
            case Side.L: {
                this.vals[Side.L] = newside
                break;
            }
            case Side.R: {
                this.vals[Side.R] = newside
                break;
            }
            case Side.U: {
                this.vals[Side.U] = newside
                break;
            }
            case Side.D: {
                this.vals[Side.D] = newside
                break;
            }
        }
    }

    draw(ctxt:CanvasRenderingContext2D){
        var locs = [
            new Vector2(150, 150), 
            new Vector2(450, 150), 
            new Vector2(0, 150), 
            new Vector2(300, 150), 
            new Vector2(150, 0),
            new Vector2(150, 300),
        ]
        for(var i = 0; i < 6; i++){
            this.drawSide(ctxt,locs[i],i)
        }
    }

    drawSide(ctxt: CanvasRenderingContext2D,v:Vector2,side:Side){
        var size = 50
        for(var x = 0; x < 3; x++){
            for(var y = 0; y < 3; y++){
                ctxt.fillStyle = Color[side]
                ctxt.fillRect(x * size + v.x,y * size + v.y,size,size)
            }
        }
    }
}

function getxy(arr,v:Vector2){
    return arr[v.y][v.x]
}

function copyEdge(src: number[][], dst: number[][], a0: Vector2, a1: Vector2, a2: Vector2, b0: Vector2, b1: Vector2, b2: Vector2) {
    swap(src, dst, a0, b0)
    swap(src, dst, a1, b1)
    swap(src, dst, a2, b2)
}

function swap(a: number[][], b: number[][], av: Vector2, bv: Vector2){
    var temp = getxy(a, av)
    a[av.y][av.x] = getxy(b, bv)
    b[bv.y][bv.x] = temp
}