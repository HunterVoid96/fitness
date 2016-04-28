
function save() {
    var field1 = document.getElementById('heightType').value;
	var field2= document.getElementById('Age').value;
	var field3= document.getElementById('weightType').value;
	localStorage.setItem('number0', field1);
	localStorage.setItem('number1', field2);
	localStorage.setItem('number2', field3);
}
function load() {

var storedValue = localStorage.getItem('number0');
if(storedValue) {
document.getElementById('heightType').value = storedValue;

}
var storedValue2 = localStorage.getItem('number1');
if(storedValue2) {
document.getElementById('Age').value = storedValue2;

}
var storedValue3 = localStorage.getItem('number2');
if(storedValue3) {
document.getElementById('weightType').value = storedValue3;

}
}



