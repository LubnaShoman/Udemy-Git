//This is a comment
/* this
is a
comment */

var a=0, b=10;
// a=9, b=9
a= --b

var c=0, d=10
// c=10, d=9
c= d--
document.write(d)



var x=10;
var y= 9;
var z= 12;
document.write(x>=y);
document.write (x>y && x<y);
document.write (!(x<y));


var age= 14;
if (age >= 18) {
 document.write ("you are allowed!") ;
}
else if (age >= 15) {
  document.write("Return later!");
}
else {
  document.write ("you are not allowed!");
}


var result= confirm ("Do you agree?");

if (result == true) {
  alert ("Thank you!");
}
else {
  alert ("oh! No!");
}

// Adding Button

function askname() {
  var user = prompt ("Please Enter your Name:");
  alert ("Hello "+ user);
}


// get.getElementById & ClassName & innerHTML

function changecolor() {
  var dd1 =
document.getElementById("d1")
  var dd2=
document.getElementById("d2")

  dd1.className="bluecolor";
  dd1.innerHTML= "مرحبا"
  dd2.className="yellowcolor";
  dd2.innerHTML= "إلى اللقاء"
}
     
