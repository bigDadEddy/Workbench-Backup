import java.util.*;

public class FracCalc {
	/* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ *
	 * Hello! This super cool program was written by Adam Cole on December 2 2017.*
	 * It computes arithmetic operations between integers and/or fractions and    *
	 * outputs the result as a reduced mixed fraction.							  *
	 * \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ *
	 * */
    public static void main(String[] args) {
    	Scanner scanner = new Scanner(System.in);
		System.out.println("Enter your equation:");
		String in = scanner.nextLine();
		while(!in.equalsIgnoreCase("quit")) {
			System.out.println(produceAnswer(in));
			System.out.println("Enter your equation:");
			in = scanner.nextLine();
		}
		System.out.println("Done.");
		scanner.close();
    }
    
   /* @description calculates a fractional equation
    * @params a string of one fraction or a fraction followed by a operator and another fraction
    * 		  fractions can either be whole number ex. 1 or fraction ex. 1/2 or mixed ex. 1_1/2
    *         operands and operators are seperated by a space, there must not be any white space
    *         before or after expression
    * @return a string of a reduced fraction
    * */
    public static String produceAnswer(String input) { 
    	//splits input into tokens
    	int i1 = 0;
    	int i2 = input.indexOf(" ");
    	if (i2 == -1) {//if only one token is entered
    		i2 = input.length();
    		return fracArrayToString(
    				toProperFrac(
    				reduce(
    				toImproperFrac(
    				split(
    				input.substring(i1, i2)))))); 
    	} 
    	String firstToken = input.substring(i1, i2);
    	
    	i1 = i2 + 1;
    	i2 += 2;
    	String operator = input.substring(i1, i2);
    	
    	i1 = i2 + 1;
    	i2 = input.length();
    	String secondToken = input.substring(i1, i2);
    	
    	int[] operand1 = toImproperFrac(split(firstToken));
    	int[] operand2 = toImproperFrac(split(secondToken));
    	int[] answer = new int[3];
    	
    	//evaluates the equation
    	if (operator.equals("+") || operator.equals("-")) {
    		//gives operand1 and operand2 equal denoms
    		if (operand1[2] != operand2[2]) {
	    		int operand1Denom = operand1[2];
	    		operand1[1] *= operand2[2];
	    		operand1[2] *= operand2[2];
	    		operand2[1] *= operand1Denom;
	    		operand2[2] *= operand1Denom;
    		}
    		if (operator.equals("+")) {
    			answer[1] = operand1[1] + operand2[1];
    		} else { //if operator == "-"
    			answer[1] = operand1[1] - operand2[1];
    		}
    		answer[2] = operand1[2];
    	} else if (operator.equals("*")) {
    		answer[1] = operand1[1] * operand2[1];
    		answer[2] = operand1[2] * operand2[2];
    	} else if (operator.equals("/")) {
    		answer[1] = operand1[1] * operand2[2];
    		answer[2] = operand1[2] * operand2[1];
    	} else {
    		return "ERROR: invalid operator";
    	}
    	return fracArrayToString(toProperFrac(reduce(answer)));		
    }
    
    //splits string into array of whole, numerator, denominator
	public static int[] split(String in) {
		int i1 = in.indexOf("_");
		int i2 = in.indexOf("/");
		int[] out = new int[3];
		out[0] = 0;
		out[1] = 0;
		out[2] = 1;
		if (i1 == -1 && i2 == -1) { //if whole only
			out[0] = Integer.parseInt(in);
		} else if (i1 == -1) { //if frac only
			out[1] = Integer.parseInt(in.substring(i1 + 1, i2));
			out[2] = Integer.parseInt(in.substring(i2 + 1));
		} else { //if both
			out[0] = Integer.parseInt(in.substring(0, i1));
			out[1] = Integer.parseInt(in.substring(i1 + 1, i2));
			out[2] = Integer.parseInt(in.substring(i2 + 1));			
		}
		return out;
	}
	
	//takes the frac as an array and turns it into a string
	public static String fracArrayToString(int[] in) {
		if (in[1] != 0) {
			if (in[0] != 0) { //if mixed fraction
				return in[0] + "_" + in[1] + "/" + in[2];
			} //if fraction only
			return in[1] + "/" + in[2];
		} //if whole number only
		return in[0] + "";

	}
	
	//puts frac arrays into improper (not mixed) form
	public static int[] toImproperFrac(int[] frac) {
		if (frac[0] != 0) {
			frac[1] += Math.abs(frac[0] * frac[2]); //num += whole * denom
			frac[1] *= Math.signum(frac[0]);
			frac[0] = 0;
		}		
		return frac;
	}
	
	//puts frac arrays into proper (mixed) form
	public static int[] toProperFrac(int[] frac) { 
		if (frac[2] == 0) {
			frac[1] = 0;
		}
		frac[0] = frac[1] / frac[2]; // whole = num / denom
		frac[1] = frac[1] % frac[2]; // num = num mod denom
		if (frac[1] == 0) {
			frac[2] = 0;
		}
		if (frac[0] < 0) { //puts - sign in right place
			frac[1] = Math.abs(frac[1]);
		}
		return frac;
	}
	
	//reduces function, puts negative sign in appropriate place
	public static int[] reduce(int[] frac) {
		int gcd = gcd(frac[1], frac[2]);
		if (gcd != 0) { //if reduce-able
			frac[1] /= gcd;
			frac[2] /= gcd;
		}
		if (frac[1] < 0 && frac[2] < 0) {
			//if num and denom are negative then they cancel out and become positive
			frac[1] = Math.abs(frac[1]);
			frac[2] = Math.abs(frac[2]);
		} else if (frac[2] < 0) {
			//if only one is negative the - sign is written in front of num
			frac[1] = frac[1] * -1;
			frac[2] = Math.abs(frac[2]);
		}
		return frac;
	}
	
	//returns greatest common denominator of two ints
	public static int gcd(int a, int b) {
		a = Math.abs(a);
		b = Math.abs(b);
	    if (a == 0)
	        return b;
	    while (b != 0) {
	        if (a > b) {
	            a = a - b;
	        } else {
	            b = b - a;
	        }
	    }
	    return a;
	}
    
}
