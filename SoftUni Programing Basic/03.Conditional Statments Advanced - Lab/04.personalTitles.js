function personalTitles (input) {
    const years = Number (input[0]);
    const gender = (input[1]);
    if (years >= 16) {
        switch (gender) {
            case "f": console.log ("Ms."); break;
            case "m": console.log ("Mr."); break;
        }
    } else {
        switch (gender) {
            case "f": console.log ("Miss"); break;
            case "m": console.log ("Master"); break;
        }
    }
}
personalTitles (["120", "f"])
// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години
