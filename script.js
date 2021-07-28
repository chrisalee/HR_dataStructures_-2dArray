/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

const hourglassSum = (arr) => {

    let max = -9 * 7;
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let sum = 0;
            sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
            max = max < sum ? sum : max;
            // if(max < sum) {
            //     max = sum;
            // } else {
            //     max = max;
            // }
        }
    }
    console.log(max);
    return max;
}
