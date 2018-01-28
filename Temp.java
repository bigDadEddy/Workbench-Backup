
import java.util.*;

public class Temp {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter your equation:");
		System.out.println(produceAnswer(scanner.nextLine()));
	}
	
	public static String produceAnswer(String input) {
		//splits input into tokens
		int i1 = 0;
		int i2 = input.indexOf(" ");
		if (i2 == -1) {
			i2 = input.length();
			return input.substring(i1, i2); 
			//breaks out of method if only one token is entered
		} 
		String firstToken = input.substring(i1, i2);
		//System.out.println(firstToken);
		
		i1 = i2 + 1;
		i2 += 2;
		String operator = input.substring(i1, i2);
		//System.out.println(operator);
		
		i1 = i2 + 1;
		i2 = input.length();
		String secondToken = input.substring(i1, i2);
		//System.out.println(secondToken);
		
		return secondToken;
	}
}
