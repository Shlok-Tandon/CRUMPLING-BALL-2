class Ground {


    constructor() {

        var xyz = {

            isStatic : true
        }


        this.body = Bodies.rectangle(500,390,1000,20,xyz);
        this.width = 1000;
        this.height = 20;

        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position

        rectMode (CENTER);
        fill ("yellow");
        rect(pos.x,pos.y,this.width,this.height)
    }
}