
const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
//variables
  
    function userValidation(){
      var gender = document.getElementsByName("Gender");
        if(document.getElementById("year").value == "" || document.getElementById("year").value.length !=4 || document.getElementById("year").value > 2022 || document.getElementById("year").value < 1900){
            alert("Invalid year. Provide a valid year like 1990");
            document.getElementById("year").value.focus();
            return false;
        } else if(document.getElementById("month").value == " " || document.getElementById("month").value > 12 || document.getElementById("month").value <= 0 ){
            alert("Invalid month. Provide a valid month");
            document.getElementById("month").value.focus();
            return false;
        }else if(document.getElementById("Day").value == " " || document.getElementById("Day").value > 31 || document.getElementById("Day").value <= 0){
        alert("Invalid date. Provide a valid date");
        document.getElementById("Day").value.focus();
        return false;

        } else if (gender[0].checked == false  && gender[1].checked == false){
            alert("Select a gender");
        return false;
        }
        else{
            return true;
        }      
   }
   
//function to output name and day
function calculateNameOfDay(century,year, month,day, gender){
    var year = document.getElementById("year").value;
    var century = parseInt(year.substring(0,2));
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("Day").value);
    

    var indexOfTheDay= math.round(( ( (century/4) -2*century-1) + ( (5*year/4) ) + ((26*(month+1)/10) ) + day)%7);
    console.log(indexOfTheDay);
    return (indexOfTheDay);
}
function useGender(){
    var gender = document.getElementsByName("Gender");
    var myName =null;
   var  dayTheUserWasBorn = dayNames[calculateNameOfDay()];
    if ((gender[0].checked == true)){
        myName=maleNames[calculateNameOfDay()];
        alert("You were born on " +dayTheUserWasBorn+" and your Akan Name is "+myName+"" );
    }else if (gender[1].checked == true){
       myName=femaleNames[calculateNameOfDay()];
       alert("You were born on " +dayTheUserWasBorn+" and your Akan Name is "+myName+"" );
    }else
    {
        alert("invalid gender");
    }
}
function akanName(){
    calculateNameOfDay();
    useGender();
}