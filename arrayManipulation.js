// Task 1:

// Function to process array
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}

let numbers = [1, 2, 3, 4, 5];
console.log('Task 1 Output: ', processArray(numbers));




// Task 2:

// Function to format array strings
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

let strings = ["This", "is", "James", "Akoto", "Sekyere"];
let processedNumbers = processArray(numbers);
console.log('Task 2 Output: ', formatArrayStrings(strings, processedNumbers)); 



