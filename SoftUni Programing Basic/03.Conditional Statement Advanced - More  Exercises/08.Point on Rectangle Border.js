function pointOnRectangleBorder(input) {
    const x1 = Number(input[0]);
    const y1 = Number(input[1]);
    const x2 = Number(input[2]);
    const y2 = Number(input[3]);
    const x = Number(input[4]);
    const y = Number(input[5]);
  
    if ((x === x1 || x === x2) && y >= y1 && y <= y2) {
      console.log("Border");
    } else if (x >= x1 && x <= x2 && (y === y1 || y === y2)) {
        console.log("Border")
    } else {
        console.log("Inside / Outside")
    }
  }

pointOnRectangleBorder([2, -3, 12, 3, 2, 3]);
2
-3
12
3
1
3