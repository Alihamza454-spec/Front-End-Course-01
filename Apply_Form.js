function Verify (){
var age=document.getElementById("inputnumber") .value;
age =Number(age);
if(age>=18){
document.getElementById("result").innerText=age+"Your Eligible for the Driving Linsice";
}
else {
document.getElementById("result").innerText=age + "Your  not eligible for the Driving Linsice";
}
}