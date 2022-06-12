//Creating the main function to get the input variables and calculations
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
// Validate that the principal input value is a positive number    
      if (principal <= 0) {
        alert("Enter a positive number");
      }else{
        document.getElementById("result").innerHTML= "Interest: If you deposit <mark>" + principal + "</mark>, <br/> at an interest rate of <mark>" + rate + "</mark>, <br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + year + "</mark>";
      }    
    return false;
        
}
//Update de output of the selected slider rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
//Check if entered value is possitive
function amountValidation() {
  var amount = document.getElementById("principal").value;
  var positiveNumber = parseInt(amount) > 0;
  if (!positiveNumber) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
  }

}         