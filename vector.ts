class Vector{
    vals:number[]

    protected constructor(size:number){
        this.vals = new Array(size)
    }

    add(v:Vector):Vector{
        for(var i = 0; i < this.vals.length; i++){
            this.vals[i] += v.vals[i]
        }
        return this
    }

    sub(v:Vector):Vector{
        for(var i = 0; i < this.vals.length; i++){
            this.vals[i] += v.vals[i]
        }
        return this
    }

    scale(s:number):Vector{
        for(var i = 0; i < this.vals.length; i++){
            this.vals[i] *= s
        }
        return this
    }

    rot(t){
        var cost = Math.cos(t)
        var sint = Math.sin(t)
        var x = this.x * cost - this.y * sint
        var y = this.x * sint + this.y * cost
        this.x = x
        this.y = y
        return this
    }

    round(){
        for (var i = 0; i < this.vals.length; i++) {
            this.vals[i] = Math.round(this.vals[i])
        }
        return this
    }

    length():number{
        var sum = 0
        for(var i = 0; i < this.vals.length; i++){
            sum += Math.pow(this.vals[i],2)
        }
        return Math.sqrt(sum)
    }

    normalize():Vector{
        return this.scale(1 / this.length())
    }

    to(v:Vector):Vector{
        return v.c().sub(this)
    }

    lerp(v:Vector,weight:number):Vector{
        return this.c().add(this.to(v).scale(weight))
    }

    c():Vector{
        return new Vector(this.vals.length).overwrite(this)
    }

    equals(other:Vector):boolean{
        for (var i = 0; i < this.vals.length; i++) {
            if(this.vals[i] != other.vals[i]){
                return false
            }
        }
        return true
    }

    overwrite(v:Vector):Vector{
        for(var i = 0; i < this.vals.length; i++){
            this.vals[i] = v.vals[i]
        }
        return this
    }

    dot(v:Vector):number{
        var sum = 0
        for(var i = 0; i < this.vals.length; i++){
            sum += this.vals[i] * v.vals[i]
        }
        return sum
    }

    

    loop():void{
        
    }

    private incr(){

    }
            
    project(v:Vector):Vector{
       return v.c().scale(this.dot(v) / v.dot(v))  
    }

    get(i:number):number{
        return this.vals[i]
    }

    set(i:number,val:number):void{
        this.vals[i] = val
    }
    
    get x(){
        return this.vals[0]
    }

    get y(){
        return this.vals[1]
    }

    get z(){
        return this.vals[2]
    }

    set x(val){
        this.vals[0] = val
    }

    set y(val){
        this.vals[1] = val
    }

    set z(val){
        this.vals[2] = val
    }
}

class Vector2 extends Vector{
    constructor(x,y){
        super(2)
        this.x = x
        this.y = y
    }
}

class Vector3 extends Vector{
    constructor(x,y,z){
        super(3)
        this.x = x
        this.y = y
        this.z = z
    }

    cross(v:Vector):Vector3{
        var x = this.y * v.z - this.z * v.y
        var y = this.z * v.x - this.x * v.z
        var z = this.x * v.y - this.y * v.x
        return new Vector3(x,y,z)
    }

    rotX(t:number){

    }

    rotY(t:number){

    }

    rotZ(t:number){

    }
}
