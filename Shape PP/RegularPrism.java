public class RegularPrism implements shape {
  private int numSides;
  private double height;
  private double apothem;
  private double sideLength;
  
  public RegularPrism(double apothem, int numSides, double height,  double sideLength) {
    this.numSides = numSides;
    this.height = height;
    this.apothem = apothem;
    this.sideLength = sideLength;
  }
  
  //construct without apothem
  public RegularPrism(int numSides, double height, double sideLength) {
    this(sideLength / (2 * Math.tan(Math.toRadians(180/ numSides))), numSides, height, sideLength);
  }
  
  //construct without sideLength
  public RegularPrism(double apothem, int numSides, double height) {
	  this(apothem, numSides, height, 2 * apothem * Math.tan(Math.toRadians(180 / numSides))); 
  }
  //returns double length volume 
  public double getVolume() {
	  return .5 * apothem * numSides * height * sideLength;
  }
  
  //returns double surface area
}