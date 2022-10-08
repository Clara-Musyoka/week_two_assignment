
const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];


//Getting input from user and validation
function userValidation(){
    var year= document.getElementById("year").value;
    var century=parseInt(year.substring(0,2)) ;
    var month= parseInt(document.getElementById("month").value);
    var day= parseInt(document.getElementById("Day").value);
    var gender = document.getElementsByName("Gender");

     //function call 
     calculateNameOfDay(century,year,month,day,gender);
}
