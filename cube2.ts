/// <reference path="vector.ts" />
/// <reference path="node_modules/matrix2x/matrix.ts" />


enum Color { green, blue, orange, red, white, yellow }
enum Side { F, B, L, R, U, D }
var side2NormalMap = new Map<Side,Vector3>();
side2NormalMap.set(Side.F,new Vector3(0,0,-1))
side2NormalMap.set(Side.B,new Vector3(0,0,1))
side2NormalMap.set(Side.L,new Vector3(-1,0,0))
side2NormalMap.set(Side.R,new Vector3(1,0,0))
side2NormalMap.set(Side.U,new Vector3(0,1,0))
side2NormalMap.set(Side.D,new Vector3(0,-1,0))

class Face {
    color: Color
    normal: Vector3

    constructor(color: Color, normal: Vector3) {
        this.color = color
        this.normal = normal
    }
}

class Block {
    faces: Face[]
    pos:Vector3

    constructor(pos:Vector3,faces: Face[]) {
        this.pos = pos;
        this.faces = faces
    }

    faceFromNormal(normal:Vector3):Face{
        for(var face of this.faces){
            if(face.normal.equals(normal)){
                return face
            }
        }
        return null;
    }

    isEdge() {
        return this.faces.length == 2
    }

    isSameBlock(other: Block) {
        
    }

    isSameBlockAndSameOrientation() {

    }
}

class Cube2{
    blocks:Block[] = []

    constructor(){
        for(var x = -1; x <= 1; x++){
            for(var y = -1; y <= 1; y++){
                for(var z = -1; z <= 1; z++){
                    var v = new Vector3(x,y,z)
                    var faces:Face[] = []

                    if(v.x == 1){
                        faces.push(new Face(Color.red,new Vector3(1,0,0)))
                    }else if(v.x == -1){
                        faces.push(new Face(Color.orange,new Vector3(-1,0,0)))
                    }

                    if(v.y == 1){
                        faces.push(new Face(Color.white,new Vector3(0,1,0)))
                    }else if(v.y == -1){
                        faces.push(new Face(Color.yellow,new Vector3(0,-1,0)))
                    }

                    if(v.z == 1){
                        faces.push(new Face(Color.blue,new Vector3(0,0,1)))
                    }else if(v.z == -1){
                        faces.push(new Face(Color.green,new Vector3(0,0,-1)))
                    }


                    this.blocks.push(new Block(v,faces))
                }
            }
        }
    }

    rotate(side:Side, counterclockwise: boolean){
        var normal = side2NormalMap.get(side)
        var rot = Math.PI / 2
        if(counterclockwise){
            rot = -rot;
        }
        var rotMatrix = Matrix.rotate(normal,rot)
    }

    getSideBlocks(side:Side):Block[]{
        var normal = side2NormalMap.get(side)
        var sideblocks = []

        for(var block of this.blocks){
            if(block.pos.dot(normal) > 0.1){
                sideblocks.push(block)
            }
        }
        return sideblocks
    }

    getSideColors(side:Side):Color[][]{
        var normal = side2NormalMap.get(side)
        var colors = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        var blocks = this.getSideBlocks(side);

        for(var block of blocks){
            var face = block.faceFromNormal(normal)
            colors[-block.pos.y + 1][block.pos.x + 1] = face.color
        }


        return colors;
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
        cube.drawSide(ctxt,new Vector2(0,0),Side.F)
        // for(var i = 0; i < 6; i++){
        //     this.drawSide(ctxt,locs[i],i)
        // }
    }

    drawSide(ctxt: CanvasRenderingContext2D,v:Vector2,side:Side){
        var size = 50
        var colors = this.getSideColors(side)

        for(var x = 0; x < 3; x++){
            for(var y = 0; y < 3; y++){
                ctxt.fillStyle = Color[colors[y][x]]
                ctxt.fillRect(x * size + v.x,y * size + v.y,size,size)
            }
        }
    }
}