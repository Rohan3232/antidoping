var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var USERS    = document.getElementById('USERS').value;
if ( username == "ashish" && password == "Ashish@123")
{
	alert ("Login successful!!!!");
	if(USERS=="LAB ADMIN")
	window.location.href = "http://localhost:3000";

	if(USERS=="BCCI")
	window.location.href = "http://localhost:3000/loadReport";

		if(USERS=="WADA")
	window.location.href = "http://localhost:3000/loadReport";

	 // Redirecting to other page.
	return true;
}
else
{	
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}