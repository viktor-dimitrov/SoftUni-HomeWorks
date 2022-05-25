function salary05(input) {
    let index = 0;
    const openTabs = Number (input[index]);
    index++;
    const salary  = Number (input[index]);
    index++;
    let penalty = 0;
    
    for (let i = 0; i <= openTabs; i++) {
       let site = input[index];
       index++;

       switch (site) {
           case "Facebook": penalty += 150; break;
           case "Instagram": penalty += 100; break;
           case "Reddit": penalty += 50; break;

       }


    if (penalty >= salary) {
       console.log (`You have lost your salary.`);
       ; break
       } 
    }
    
    if (salary > penalty) {
        console.log (`${salary - penalty}`);
       }
}
salary05 
(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


