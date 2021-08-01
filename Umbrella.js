class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //cargar la imagen del Mejor Hombre
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //mostrar la imagen del Mejor Hombre si el conteo de cuadros es más de 200, sino, mostrar al niño con la imagen de la sombrilla
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
