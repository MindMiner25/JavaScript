// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements.

// All element orders should have an equal probability.

// Fisher-Yates => Walk the array in reverse order and swap each element with a random one before it.

let shuffle = (arr) => {
    for (let i = arr.length-1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i+1));

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// counts of appearances for all possible permutations
let count = {
'123': 0,
'132': 0,
'213': 0,
'231': 0,
'321': 0,
'312': 0
};

for (let i = 0; i < 1000000; i++) {
let array = [1, 2, 3];
shuffle(array);
count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
alert(`${key}: ${count[key]}`);
}