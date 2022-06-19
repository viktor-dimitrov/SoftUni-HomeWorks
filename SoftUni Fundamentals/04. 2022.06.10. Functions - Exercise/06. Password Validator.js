function passwordValidator (pass) {
    let passLength = pass.length;
    let digitCounter = 0;
    let isValid = true;

    if (passLength < 6 || passLength > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    for (let i = 0;i < passLength; i ++) {
        let char =(pass[i]).toLowerCase();
        
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
            if (char.charCodeAt() < 48 || char.charCodeAt() > 57) {
                console.log(`Password must consist only of letters and digits`);
                isValid = false;
                break;
            } else {
                digitCounter++;
            }
        }
    }

    if (digitCounter < 2) {
        console.log(`Password must have at least 2 digits`);
        isValid = false;
    }

    if (isValid) {
        console.log(`Password is valid`);
    }
}
passwordValidator('Pa$s$s')