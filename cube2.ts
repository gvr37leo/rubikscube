/// <reference path="vector.ts" />


enum Color { green, blue, orange, red, white, yellow }
enum Side { F, B, L, R, U, D }

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

    constructor(faces: Face[]) {
        this.faces = faces
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
    blocks:Block[]

    constructor(){

    }

    rotate(){

    }
}