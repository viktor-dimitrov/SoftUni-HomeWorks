function ages (age) {

    let person = '';
    if (age >= 0 && age <= 2) {
        person = 'baby';
    } else if (age >=3&& age <=13) {
        person = 'child';
    } else if (age >= 14 && age <= 19) {
        person = 'teenager';
    } else if (age >= 20 && age <=65) {
        person = 'adult';
    } else if (age >= 65) {
        person = 'elder';
    } else {
        person = 'out of bounds'
    }

    console.log(person)

}
ages(13)

// 0-2 (age) – is a baby;   
// 3-13 (age) – is a child; 
// 14-19 (age) – is a teenager;
// 20-65 (age) – is an adult;
// >=66 (age) – is an elder; 
// In all other cases print – "out of bounds";
