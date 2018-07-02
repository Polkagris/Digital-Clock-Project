
function clock(){
  var theTime = new Date(); //get the current time and date
  var hours = theTime.getHours(); //get hours from date
  var minutes = theTime.getMinutes(); //get minutes from date
  var seconds = theTime.getSeconds(); //get seconds from date

   document.getElementById("hour").innerHTML = hours + ":";
   document.getElementById("minute").innerHTML = minutes + ":";
   document.getElementById("second").innerHTML = seconds;

   if(seconds <= 9){
     document.getElementById("second").innerHTML = "0" + seconds;
   }
   if(minutes <= 9){
     document.getElementById("minute").innerHTML = "0" + minutes + ":";
   }
   if(hours <= 9){
     document.getElementById("hour").innerHTML = "0" + hours + ":";
   }
}
setInterval(clock, 500);
