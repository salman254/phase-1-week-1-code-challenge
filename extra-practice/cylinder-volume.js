class Cylinder {
  constructor(radius, height) {
    this.radius = radius; // Set the radius
    this.height = height; // Set the height
  }

  // Calculation the volume of the cylinder
  volume() {
    return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}  