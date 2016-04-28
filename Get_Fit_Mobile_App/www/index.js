
function save() {
    var field1 = document.getElementById('heightType').value;
	var field2= document.getElementById('Age').value;
	var field3= document.getElementById('weightType').value;
	localStorage.setItem('key0', field1);
	localStorage.setItem('key1', field2);
	localStorage.setItem('key2', field3);
}
function load() {

var storedValue = localStorage.getItem('key0');
if(storedValue) {
document.getElementById('heightType').value = storedValue;

}
var storedValue2 = localStorage.getItem('key1');
if(storedValue2) {
document.getElementById('Age').value = storedValue2;

}
var storedValue3 = localStorage.getItem('key2');
if(storedValue3) {
document.getElementById('weightType').value = storedValue3;

}
}



