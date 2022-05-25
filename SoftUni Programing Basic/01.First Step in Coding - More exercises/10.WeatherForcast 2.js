function weatherForcast (input){
let temperature = Number(input[0]);
if (temperature < 5){
    console.log ("unknown");
}
if (temperature >= 5) 
 if (temperature <= 11.9) {
    console.log ("Cold");
} 
if (temperature >= 12)
if (temperature <= 14.9) {
    console.log ("Cool")
}
if (temperature >= 15)
if (temperature <=20) {
    console.log ("Mild");
}
if (temperature >= 20.1)
if (temperature <= 25.9) {
    console.log ("Warm");  
}
if (temperature >= 26)
if (temperature <= 35) {
    console.log ("Hot");
}
if (temperature > 36) {
    console.log ("unknown");
}
}

weatherForcast(["3"])

// Градуси	Време
// 26.00 - 35.00	Hot
// 20.1 - 25.9	Warm
// 15.00 - 20.00	Mild
// 12.00 - 14.9	Cool
// 5.00 - 11.9	Cold
