public class ParameterArt {
	
	/*Adam Cole       CS A         10/22/17
	 * 
	 * This is a program that graphs the sine and cosine functions
	 * with an increasing offset. It's made using the writeChars
	 * method.                    
	 * */
    public static void main(String[] args){
    	String str1 = "Frodo Baggins";
    	System.out.print(str1.toLowerCase().indexOf("B"));
    }
    
    public static void writeChars (char ch, int number) {
        for (int i = 1; i <= number; i++){
            System.out.print(ch);
        }
    }
    
    public static void wave() {
    	int numSpaceSin;
    	int numSpaceCos;
    	int firstSpace;
    	int scndSpace;
    	for (double i = 0; i < 1000; i += 0.1) {
    		numSpaceSin = (int)((Math.sin(i * 1.1) + 1) * 50) - 1;
    		numSpaceCos = (int)((Math.cos(i) + 1) * 50) - 1;
    		
    		firstSpace = Math.min(numSpaceCos, numSpaceSin);
    		scndSpace = Math.max(numSpaceCos, numSpaceSin) - firstSpace ;
    				
	    	writeChars(' ', firstSpace);
	    	System.out.print("%");
	    	writeChars(' ', scndSpace);
	    	System.out.println('%');
    	}
    }
}

