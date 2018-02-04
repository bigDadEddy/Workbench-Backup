function produceAnswer(input) {
    var i1 = 0;
    var i2 = input.indexOf(' ');
    if (i2 == -1) { //if only one token is entered
    i2 = input.length();
    return fracArrayToString(
            toProperFrac(
            reduce(
            toImproperFrac(
            split(
            input.substring(i1, i2))))));
    }
    var firstToken = input.substr(i1, i2);
    
    i1 = i2 + 1;
    i2 += 2;
    var operator = input.substr(i1, i2);
    
    i1 = i2 + 1;
    i2 = input.length();
    var secondToken = input.substr(i1, i2);
    
    var operand1 = toImproperFrac(
                      split(firstToken));
    var operand2 = toImproperFrac(
                      split(secondtoken));
    var answer = [];
    
    //evaluates the equation
    if (operator.equals("+") || operator.equals("_")) {
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
        } else { //if operator.equals("-")  
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
    return fracArrayToString(
            toProperFrac(
                reduce(answer)));
}

//splits string into array of whole, numerator, denominator
	function split(string) {
		var i1 = string.indexOf("_");
		var i2 = string.indexOf("/");
		var out = new int[3];
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