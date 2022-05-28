function biggestOf3Numbers (first, second, third) {
    let biggest = 0;
    if (first >= second && first >= third) {
        biggest = first;
    } else if (second >= first && second >= third) {
        biggest = second;
    } else if ( third >= first && third >= second) {
        biggest = third;
    }
    console.log(biggest);

}
biggestOf3Numbers (1,2,3)