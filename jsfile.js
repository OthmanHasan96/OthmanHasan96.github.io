<script>

function Submittt() {
    var Fname = document.contactForm.Fname.value;
    var Lname = document.getElementById.Lname.value;
    var Web = document.getElementById.Web.value;
    var num = document.getElementById.num.value;
    var email = document.getElementById.email.value;
    var user = document.getElementById.user.value;
var pas =document.getElementById.pas.value;
var Dgre =document.getElementById.Dgre.value;
var grd =document.getElementById.grd.value;
var myfile =document.getElementById.myfile.value;
if(( Fname === "  ")){
       Lname.disabled = true;
       Web.disabled = true;
       num.disabled = true;
email.disabled = true;
user.disabled = true;
pas.disabled = true;
grd.disabled = true;
myfile.disabled = true;
}
}
function Save(){
  var email = document.getElementById.email.value;
    var user = document.getElementById.user.value;
    user = email.substring(0,email.indexOf('@')) ;
     var username = document.innerHTML = "Hello " + user + "! How are you today?";
console.log(username);
}
</script>


		
