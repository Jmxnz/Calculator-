//function solve
function Solve(value){
  var x = document.getElementById('value')
  x.value += value;
}

//function result
function Result(){
  var numOne = document.getElementById('value').value;
  var numTwo = eval(numOne);
  document.getElementById('value').value = numTwo;
}

//function clear
function Clear(){
  var input = document.getElementById('value');
  input.value = ' ';
}

//function back
function Remove(){
  var input = document.getElementById('value');
  input.value = input.value.slice(0, -1);
}