function lowRow(matrix) {
    let lowestArr = [];

    for (let row = 0; row < matrix.length; row++) {
        let lowest = matrix[row][0];

        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] < lowest) {
                lowest = matrix[row][col];
            }
        }
        lowestArr.push(lowest);
    }
        return lowestArr;
};

let highCol = function(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;
    const maxColumns = [];

    for (let col = 0; col < width; col++) {
        let maxCol = matrix[0][col];

        for (let row = 1; row < height; row++) {
            if (matrix[row][col] > maxCol) {
                maxCol = matrix[row][col];
            }
        }
        maxColumns.push(maxCol);
    }
    return maxColumns;
};




let luckyNumbers = function(matrix) {
    let rows = lowRow(matrix);
    let columns = highCol(matrix);
    let luckyNums = [];

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[0].length; col++) {
            if (rows[row] === columns[col]) {
                luckyNums.push(matrix[row][col]);

            }
        }
    }
    return luckyNums;
};

matrix = [
[ 5,  9, 21],
[ 9, 19,  6],
[12, 14, 15]]

  console.log(luckyNumbers(matrix)); // [12]
