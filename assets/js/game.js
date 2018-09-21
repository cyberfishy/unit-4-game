function IsNumeric(n) { //this probably isn't needed as the user isn't choosing the range of random number
  return !isNaN(n); // it's a jQuery thing to keep NaN from appearing
}
function getit() { // generates and inserts a random number between 30 and 60 -- lets the game range be easily changed.
  //$(getit)
  var numLow = 30;
  var numHigh = 60;
  var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
  var randomnumber = Math.floor(Math.random() * adjustedHigh) + parseFloat(numLow);
  if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
    $("#randomnumber").text(randomnumber);
  }
  return false;
}; // this generated and inserted a random number for a while, but quit when I added the winning stuff at the bottom

var theTotal = 0; // checks the total from user clicks -- sdds number from button clicks

function updatetotal(elem) {
var tempvalue = elem.value;
  theTotal = Number(theTotal) + Number(tempvalue);
  $('#total').text(theTotal);

$('#theTotal').text(theTotal); // checks the game condition -- nothing happens until it gets to the random size or larger
var randomnum = $('#randomnumber').text();
if (theTotal == randomnum) {
  alert("You win! -- your total is " + theTotal);
  $('#myModal').modal('show');
} else if (theTotal > randomnum) {
  alert("You lose -- your total is " + theTotal);
    $('#myModal').modal('show');
}
}