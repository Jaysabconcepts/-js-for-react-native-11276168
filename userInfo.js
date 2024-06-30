// Task 3:

// Function to process array
function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
}


// Function to format array strings
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        return processedNumbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

let numbers = [1, 2, 3, 4, 5];
let names = ["This", "is", "James", "Akoto", "Sekyere"];
let processedNumbers = processArray(numbers)
let modifiedNames = formatArrayStrings(names, processedNumbers)

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index],
    }));
}


console.log(createUserProfiles(names, modifiedNames));

