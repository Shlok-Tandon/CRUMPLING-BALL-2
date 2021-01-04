class Paper {


    constructor () {

        var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }


        this.body = Bodies.circle(100,0,30,options);
        this.image = loadImage("paper.png");
        this.radius = 70;
        
        
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;


        push ();
        ellipseMode(CENTER);
        fill("white");
        strokeWeight (0)
        ellipse(pos.x,pos.y,50,50);
        image(this.image,pos.x-30,pos.y-30,this.radius,this.radius);
        pop ();
        
    }
}