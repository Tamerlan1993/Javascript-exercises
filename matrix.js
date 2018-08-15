function matrix(num) {
    let matrixArr = [];

    for (let k = 0; k < num; k++) {
        matrixArr.push([])
    }

    let startRow = 0,
        startColumn = 0;
    let endRow = num - 1,
        endColumn = num - 1;
    let counter = 1;
    while (startRow <= endRow && startColumn <= endColumn) {

        // top row
        for (let k = startColumn; k <= endColumn; k++) {
            matrixArr[startRow][k] = counter;
            counter++;
        }

        startRow++;

        // right column
        for (let k = startRow; k <= endRow; k++) {
            matrixArr[k][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // bottom row
        for (let k = endColumn; k >= startColumn; k--) {
            matrixArr[endRow][k] = counter;
            counter++;
        }

        endRow--;

        // left column
        for (let k = endRow; k >= startRow; k--) {
            matrixArr[k][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }



    console.log(matrixArr);
}

matrix(3)