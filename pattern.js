
/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(n) {
  // Provide Solution Code Here
  if (typeof n === typeof 18) {
    var string = "";
    for (i = 1; i <= n; i++) {
      for (k = 1; k <= n - i; k++) {
        string += " ";
      }
      for (j = 1; j <= i; j++) {
        string += "* ";
      }
      string += "\n";
    }
    return string;
  }
  else {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }
}