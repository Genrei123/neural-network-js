import { forwardPropogation } from "./forwardpropogation.js";

// Forward propogation
let input_array = [
[0, 1, 1],
[0, 0, 0],
[1, 1, 1],
[0, 1, 0],
[1, 0, 1],
[1, 1, 1]
];
let results = forwardPropogation(input_array);
console.log(results);

let answer_key = [1, 0, 1, 0, 1, 1];

// Prediction
const PREDICTION_THRESHOLD = 0.6;
let RETRY = 0;
let MAX_RETRIES = 5;
for (let i = 0; i < results.length; i++) {
  if (results[i] > PREDICTION_THRESHOLD && answer_key[i] === 1) {
    console.log("Prediction at " + i + " is: " + 1);
    RETRY = 0;
  }

  else if (results[i] < PREDICTION_THRESHOLD && answer_key[i] === 0) {
    console.log("Prediction at " + i + " is: " + 0);
    RETRY = 0;
  }

  else {
    if (RETRY != MAX_RETRIES) {
      console.log("Wrong prediction at: " + i + " retrying at: " + (RETRY + 1) + " prediction is: " + results[i]);
      // Let us retry and count how many times we retry
      RETRY++;
      results = forwardPropogation(input_array);
      i--;
    } else {
      MAX_RETRIES = 0;
    }

  }
}