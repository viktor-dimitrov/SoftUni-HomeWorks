function palindromeIntegers (input) {
    let inputL= input.length;
    let isPalindrome = true;

    for(let i = 0; i < inputL; i++) {
         let controlString = String(input[i]);
         let reverseString = String(input[i]).split("").reverse().join('');
         
         if(controlString == reverseString) {
            isPalindrome = true;
         } else {
            isPalindrome = false;
         }
         console.log(isPalindrome);
    }
}
palindromeIntegers([123,323,421,121])