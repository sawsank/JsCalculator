function display(val){
    /**
     * This function accepts the values clicked as a parameter and 
     * returns the same to the textbox.
     *  The value could be a digit, a decimal point, or an operator except ‘=’.
     */
    document.getElementById("result").value += val;

    return val;
}

function solve(){
    /**
     * The solve() method is called when the user clicks on the ‘=’ operator. 
     * The variable x accepts the mathematical expression provided by the user.
     * This expression is evaluated and stored in the variable y. 
     * The result is displayed in the textbox.
     */
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
    return y;
}

function clearScreen(){
    /**
     * This function is called when the user clicks on the C or the clear button. 
     * The value of the result is set to an empty string. 
     */
    document.getElementById("result").value =""
}