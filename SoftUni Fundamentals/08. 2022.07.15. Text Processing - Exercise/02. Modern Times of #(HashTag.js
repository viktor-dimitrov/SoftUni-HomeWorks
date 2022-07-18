function modernTimesOfHashtags(inputString) {

    inputString.split(' ').forEach(word => {
        let flag = true;
        if (word[0] === '#' && word.length > 1) {
            for (let char of word) {
                if (!isNaN(char)) {
                    flag = false;
                }
            }
            if (flag) {
                console.log(word.slice(1));
            }
        }
    });
}
modernTimesOfHashtags('Nowadays everyone uses #sw34 to tag a #special word in #socialMedia')