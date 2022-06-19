function formatGrade (grade) {
    let desc = '';
    let formatGrade = grade.toFixed(2)
    
    if (grade < 3) {
        desc = 'Fail';
        formatGrade = Math.floor(grade);
    } else if (grade < 3.5) {
        desc = 'Poor';
    } else if (grade < 4.5) {
        desc = 'Good';
    } else if (grade < 5.5) {
        desc = 'Very good';
    } else {
        desc = "Excellent";
    }
    console.log(`${desc} (${formatGrade})`);
}
formatGrade(2.50)