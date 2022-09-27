const dog = new animal('Pogo', 'Dog')
function animal(name,species){
    
        this.name=name
        this.species=species
    }

animal.prototype.sing= function (){console.log(`${this.name} can sing`)}
dog.sing();