class Cylinder {
  constructor(radius, height) {
    (this.radius = radius), (this.height = height);
  }
  getVolume() {
    const pi = Math.PI;
    return (pi * Math.pow(this.radius, 2) * this.height).toPrecision(4);
  }
}

cylinder = new Cylinder(1, 2);
console.log(cylinder.getVolume());

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  getVolume() {
    const pi = Math.PI;
    return ((4 / 3) * pi * Math.pow(this.radius, 3)).toPrecision(4);
  }
}

sphere = new Sphere(2);
console.log(sphere.getVolume());

class Cone {
  constructor(radius, height) {
    (this.radius = radius), (this.height = height);
  }
  getVolume() {
    const pi = Math.PI;
    return ((pi * Math.pow(this.radius, 2) * this.height) / 3).toPrecision(4);
  }
}

cone = new Cone(1, 2);
console.log(cone.getVolume());
