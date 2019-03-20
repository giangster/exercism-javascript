export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind(a, b, c) {
    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw "triangles with negative sides are illegal";
    }
    if (this.a === 0 || this.b === 0 || this.c === 0) {
      throw "test triangles with no size are illegal";
    }
    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.b + this.c < this.a
    ) {
      throw new Error();
    }
    return (
      (this.a === this.b && this.b === this.c && "equilateral") ||
      ((this.a === this.b || this.a === this.c || this.b === this.c) &&
        "isosceles") ||
      "scalene"
    );
  }
}
