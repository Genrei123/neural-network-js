import { BIAS } from "./constants.js";
import { sigmoid } from "./sigmoid.js";

export function forwardPropogation(input_array) {
    let results = [];
    let sum = 0;
    for (let i = 0; i < input_array.length; i++) {
        for (let j = 0; j < input_array[i].length; j++) {
            let weights = Math.random(0, input_array[i][j]);
            sum += input_array[i][j] * weights;
        }
        sum += BIAS;
        let transformed = sigmoid(sum);
        results.push(transformed);
        
        sum = 0;
        transformed = 0;
    }
    return results;
}

