/* declare save function */
function save() {
	/* declare the three input fields for the Me page, and get the ID's for each field and the value*/
    var field1 = document.getElementById('heightType').value;
	var field2= document.getElementById('Age').value;
	var field3= document.getElementById('weightType').value;
	/*set the data in the local storage by using keys and the field input variables*/
	localStorage.setItem('key0', field1);
	localStorage.setItem('key1', field2);
	localStorage.setItem('key2', field3);
}
/* declare load function */
function load() {
/* declare the value stored variables and get the items from local storage using the keys */
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
//declare delete function purpose- to clear text fields so user can re-ener details if incorrect
function del (){
		//get the ID's of the inputs and remove the keys from local storage
	document.getElementById('heightType').value;
	localStorage.removeItem('key0');
	document.getElementById('Age').value;
	localStorage.removeItem('key1');
	document.getElementById('weightType').value;
	localStorage.removeItem('key2');
}

/* declare save function */
function savez() {
	/* declare the three input fields for the Goals page, and get the ID's for each field and the value*/
    var field4 = document.getElementById('StepsType').value;
	var field5= document.getElementById('DistanceType').value;
	var field6= document.getElementById('ActiveType').value;
	var field7= document.getElementById('CaloriesType').value;
	/*set the data in the local storage by using keys and the field input variables*/
	localStorage.setItem('key3', field4);
	localStorage.setItem('key4', field5);
	localStorage.setItem('key5', field6);
	localStorage.setItem('key6', field7);
}


/* declare load function */
function loadz() {
/* declare the value stored variables and get the items from local storage using the keys */
var storedValue4 = localStorage.getItem('key3');
if(storedValue4) {
document.getElementById('StepsType').value = storedValue4;

}
var storedValue5 = localStorage.getItem('key4');
if(storedValue5) {
document.getElementById('DistanceType').value = storedValue5;

}
var storedValue6 = localStorage.getItem('key5');
if(storedValue6) {
document.getElementById('ActiveType').value = storedValue6;

}
var storedValue7 = localStorage.getItem('key6');
if(storedValue7) {
document.getElementById('CaloriesType').value = storedValue7;

}
}
//declare delete function purpose- to clear text fields so user can re-ener details if incorrect
function delz (){
	//get the ID's of the inputs and remove the keys from local storage
	document.getElementById('StepsType').value;
	localStorage.removeItem('key3');
	document.getElementById('DistanceType').value;
	localStorage.removeItem('key4');
	document.getElementById('ActiveType').value;
	localStorage.removeItem('key5');
	document.getElementById('CaloriesType').value;
	localStorage.removeItem('key6');
}



