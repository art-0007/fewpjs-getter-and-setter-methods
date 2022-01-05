// Add your Circle class here
class Circle {
    constructor (radius) {
        this.radius = radius
    }
    
    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.radius * 2;
    }

    get area() {
        return Math.PI * this.radius**2;
    }

    set diameter(newDiametr) {
        this.radius = newDiametr/2;
      }

    set circumference(newcirCumference) {
        this.radius = (newcirCumference/Math.PI)/2;
      }

    set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI);
      }
}