// Define the Cylinder class
class Cylinder {
    constructor(radius, height) {
      this.radius = radius; // Set the radius
      this.height = height; // Set the height
    }
  
    // Method to calculate the volume of the cylinder
    volume() {
      return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
  }
  
  