
const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//function to output name and day
function calculateNameOfDay(century,year, month,day gender){
    var indexOfTheDay= Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    var dayTheUserWasBorn =dayNames[indexOfTheDay];
    var myName =null;
    if ((gender[0].checked == true)){
        myName=maleNames[indexOfTheDay];
    }else if (gender[1].checked == true){
       myName=femaleNames[indexOfTheDay];
    }else
    {
        alert('invalid gender');
    }
var list= [dayTheUserWasBorn, myName];
    return list;
}
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
