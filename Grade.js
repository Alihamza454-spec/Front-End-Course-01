function calculateGrade(){
let Number=prompt("Enter You're Numbers");
if(Number<0 ||Number>100 ||isNaN(Number)){
alert("Please enter the number between 1 and 100")
return;
}
var grade='';
 if (marks >= 90) {
                grade = "A+";
            } else if (marks >= 80) {
                grade = "A";
            } else if (marks >= 70) {
                grade = "B";
            } else if (marks >= 60) {
                grade = "C";
            } else if (marks >= 50) {
                grade = "D";
            } else {
                grade = "F";
            }
 document.getElementById("result").innerText = "You scored: " + marks + "%. Grade: " + grade;
        
}
