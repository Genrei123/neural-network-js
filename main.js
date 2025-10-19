// Forward propogation
let input_array = [ [0, 1, 1], 
                    [0, 0, 0], 
                    [1, 1, 1], 
                    [0, 1, 0], 
                    [1, 0, 1] 
                  ];
let bias = -0.5;
let weights = [0.3, 0.3, 0.25, 0.25, 0.3];

// Let us do the sigmoid transformation
function sigma(x) {
    let euler = Math.E;
    return 1/(1+Math.pow(euler, -x))
}

// Sigma calculation
let sum = 0;
for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j < input_array[i].length; j++) {
        sum += input_array[i][j] * weights[j];      
    }
    sum += bias;
    console.log("x: ", sum); 
    // Prediction for each input and output
    let prediction = sigma(sum);
    if (prediction > 0.5) {
        console.log(" For input_array values: " + input_array[i]);
        console.log(" I'm predicing the value would be: " + 1);
        console.log(prediction);
    } else {
        console.log(" For input_array values: " + input_array[i]);
        console.log(" I'm predicing the value would be: " + 0);
        console.log(prediction);
    }
    sum = 0;
}