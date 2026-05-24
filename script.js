// ============================================
// JAVASCRIPT DESTRUCTURING LAB
// ES6 Array & Object Destructuring
// ============================================

// Utility functions for output
function addOutput(elementId, message) {
    const outputDiv = document.getElementById(elementId);
    if (outputDiv) {
        const messageDiv = document.createElement('div');
        messageDiv.style.margin = '5px 0';
        messageDiv.style.padding = '5px';
        messageDiv.style.borderBottom = '1px solid #ddd';
        messageDiv.innerHTML = message;
        outputDiv.appendChild(messageDiv);
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    console.log(message);
}

function clearOutput(elementId) {
    const outputDiv = document.getElementById(elementId);
    if (outputDiv) {
        outputDiv.innerHTML = '';
    }
}

function clearAllOutputs() {
    clearOutput('arrayOutput');
    clearOutput('objectOutput');
    clearOutput('advancedOutput');
    clearOutput('functionOutput');
    addOutput('arrayOutput', '✨ All outputs cleared. Click any button to run examples.');
}

// ============================================
// STEP 2: ARRAY DESTRUCTURING
// ============================================

// 2.1 Basic Array Destructuring
function demoBasicArray() {
    clearOutput('arrayOutput');
    addOutput('arrayOutput', '🎯 <strong>Basic Array Destructuring:</strong>');
    
    const colors = ['red', 'green', 'blue'];
    const [first, second, third] = colors;
    
    addOutput('arrayOutput', `Original array: [${colors}]`);
    addOutput('arrayOutput', `After destructuring:`);
    addOutput('arrayOutput', `first = "${first}"`);
    addOutput('arrayOutput', `second = "${second}"`);
    addOutput('arrayOutput', `third = "${third}"`);
}

// 2.2 Skipping Elements
function demoSkipArray() {
    clearOutput('arrayOutput');
    addOutput('arrayOutput', '🎯 <strong>Skipping Elements in Arrays:</strong>');
    
    const numbers = [10, 20, 30, 40, 50];
    const [firstNum, , thirdNum, , fifthNum] = numbers;
    
    addOutput('arrayOutput', `Original array: [${numbers}]`);
    addOutput('arrayOutput', `After skipping elements:`);
    addOutput('arrayOutput', `firstNum = ${firstNum}`);
    addOutput('arrayOutput', `thirdNum = ${thirdNum}`);
    addOutput('arrayOutput', `fifthNum = ${fifthNum}`);
    addOutput('arrayOutput', `✅ Elements at index 1 and 3 were skipped!`);
}

// 2.3 Rest Operator with Arrays
function demoRestArray() {
    clearOutput('arrayOutput');
    addOutput('arrayOutput', '🎯 <strong>Rest Operator with Arrays:</strong>');
    
    const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
    const [firstFruit, secondFruit, ...restFruits] = fruits;
    
    addOutput('arrayOutput', `Original array: [${fruits}]`);
    addOutput('arrayOutput', `After using rest operator:`);
    addOutput('arrayOutput', `firstFruit = "${firstFruit}"`);
    addOutput('arrayOutput', `secondFruit = "${secondFruit}"`);
    addOutput('arrayOutput', `restFruits = [${restFruits}]`);
}

// 2.4 Default Values in Arrays
function demoDefaultArray() {
    clearOutput('arrayOutput');
    addOutput('arrayOutput', '🎯 <strong>Default Values in Arrays:</strong>');
    
    const [a = 1, b = 2, c = 3] = [10];
    
    addOutput('arrayOutput', `Array provided: [10]`);
    addOutput('arrayOutput', `After destructuring with defaults:`);
    addOutput('arrayOutput', `a = ${a} (took value from array)`);
    addOutput('arrayOutput', `b = ${b} (used default value)`);
    addOutput('arrayOutput', `c = ${c} (used default value)`);
}

// ============================================
// STEP 3: OBJECT DESTRUCTURING
// ============================================

// 3.1 Basic Object Destructuring
function demoBasicObject() {
    clearOutput('objectOutput');
    addOutput('objectOutput', '🎯 <strong>Basic Object Destructuring:</strong>');
    
    const user = { name: 'John', age: 25, city: 'New York' };
    const { name, age, city } = user;
    
    addOutput('objectOutput', `Original object: ${JSON.stringify(user)}`);
    addOutput('objectOutput', `After destructuring:`);
    addOutput('objectOutput', `name = "${name}"`);
    addOutput('objectOutput', `age = ${age}`);
    addOutput('objectOutput', `city = "${city}"`);
}

// 3.2 Renaming Variables
function demoRenameObject() {
    clearOutput('objectOutput');
    addOutput('objectOutput', '🎯 <strong>Renaming Variables during Destructuring:</strong>');
    
    const product = { productName: 'Laptop', productPrice: 999 };
    const { productName: name, productPrice: price } = product;
    
    addOutput('objectOutput', `Original object: ${JSON.stringify(product)}`);
    addOutput('objectOutput', `After destructuring with renaming:`);
    addOutput('objectOutput', `name = "${name}"`);
    addOutput('objectOutput', `price = $${price}`);
    addOutput('objectOutput', `✅ Original property names preserved, variables renamed!`);
}

// 3.3 Default Values in Objects
function demoDefaultObject() {
    clearOutput('objectOutput');
    addOutput('objectOutput', '🎯 <strong>Default Values in Objects:</strong>');
    
    const person = { firstName: 'Jane' };
    const { firstName, lastName = 'Doe', age = 30 } = person;
    
    addOutput('objectOutput', `Original object: ${JSON.stringify(person)}`);
    addOutput('objectOutput', `After destructuring with defaults:`);
    addOutput('objectOutput', `firstName = "${firstName}" (from object)`);
    addOutput('objectOutput', `lastName = "${lastName}" (default value)`);
    addOutput('objectOutput', `age = ${age} (default value)`);
}

// 3.4 Rest Operator with Objects
function demoRestObject() {
    clearOutput('objectOutput');
    addOutput('objectOutput', '🎯 <strong>Rest Operator with Objects:</strong>');
    
    const car = { brand: 'Toyota', model: 'Camry', year: 2022, color: 'blue' };
    const { brand, ...rest } = car;
    
    addOutput('objectOutput', `Original object: ${JSON.stringify(car)}`);
    addOutput('objectOutput', `After using rest operator:`);
    addOutput('objectOutput', `brand = "${brand}"`);
    addOutput('objectOutput', `rest = ${JSON.stringify(rest)}`);
}

// ============================================
// STEP 4: ADVANCED DESTRUCTURING
// ============================================

// 4.1 Nested Array Destructuring
function demoNestedArray() {
    clearOutput('advancedOutput');
    addOutput('advancedOutput', '🎯 <strong>Nested Array Destructuring:</strong>');
    
    const nestedArray = [1, [2, 3], 4];
    const [a, [b, c], d] = nestedArray;
    
    addOutput('advancedOutput', `Original nested array: [${JSON.stringify(nestedArray)}]`);
    addOutput('advancedOutput', `After nested destructuring:`);
    addOutput('advancedOutput', `a = ${a}`);
    addOutput('advancedOutput', `b = ${b}`);
    addOutput('advancedOutput', `c = ${c}`);
    addOutput('advancedOutput', `d = ${d}`);
}

// 4.2 Nested Object Destructuring
function demoNestedObject() {
    clearOutput('advancedOutput');
    addOutput('advancedOutput', '🎯 <strong>Nested Object Destructuring:</strong>');
    
    const employee = {
        id: 101,
        details: { name: 'Alice', position: 'Developer' },
        address: { city: 'Boston', zip: '02101' }
    };
    const { id, details: { name, position }, address: { city } } = employee;
    
    addOutput('advancedOutput', `Original nested object: ${JSON.stringify(employee, null, 2)}`);
    addOutput('advancedOutput', `After nested destructuring:`);
    addOutput('advancedOutput', `id = ${id}`);
    addOutput('advancedOutput', `name = "${name}"`);
    addOutput('advancedOutput', `position = "${position}"`);
    addOutput('advancedOutput', `city = "${city}"`);
}

// 4.3 Mixing Array and Object Destructuring
function demoMixed() {
    clearOutput('advancedOutput');
    addOutput('advancedOutput', '🎯 <strong>Mixing Array and Object Destructuring:</strong>');
    
    const data = [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' }
    ];
    const [firstBook, secondBook] = data;
    const { title: firstTitle } = firstBook;
    const { title: secondTitle } = secondBook;
    
    addOutput('advancedOutput', `Original data: ${JSON.stringify(data)}`);
    addOutput('advancedOutput', `After mixed destructuring:`);
    addOutput('advancedOutput', `firstBook title = "${firstTitle}"`);
    addOutput('advancedOutput', `secondBook title = "${secondTitle}"`);
}

// ============================================
// STEP 5: DESTRUCTURING IN FUNCTIONS
// ============================================

// 5.1 Destructuring Array Parameters
function demoFunctionArray() {
    clearOutput('functionOutput');
    addOutput('functionOutput', '🎯 <strong>Destructuring Array in Function Parameters:</strong>');
    
    function sum([a, b, c]) {
        return a + b + c;
    }
    
    const numbers = [10, 20, 30];
    const result = sum(numbers);
    
    addOutput('functionOutput', `Function call: sum([${numbers}])`);
    addOutput('functionOutput', `Result: ${result}`);
    addOutput('functionOutput', `✅ Function destructured the array directly in parameters!`);
}

// 5.2 Destructuring Object Parameters
function demoFunctionObject() {
    clearOutput('functionOutput');
    addOutput('functionOutput', '🎯 <strong>Destructuring Object in Function Parameters:</strong>');
    
    function displayUser({ name, age, email = 'Not provided' }) {
        return `Name: ${name}, Age: ${age}, Email: ${email}`;
    }
    
    const userInfo = displayUser({ name: 'Bob', age: 28 });
    
    addOutput('functionOutput', `Function call: displayUser({ name: 'Bob', age: 28 })`);
    addOutput('functionOutput', `Result: "${userInfo}"`);
    addOutput('functionOutput', `✅ Email used default value because it wasn't provided!`);
}

// 5.3 Returning Destructured Values
function demoReturnArray() {
    clearOutput('functionOutput');
    addOutput('functionOutput', '🎯 <strong>Returning and Destructuring Array Values:</strong>');
    
    function getCoordinates() {
        return [40.7128, -74.0060];
    }
    
    const [latitude, longitude] = getCoordinates();
    
    addOutput('functionOutput', `Function returns: [40.7128, -74.0060]`);
    addOutput('functionOutput', `After destructuring the return value:`);
    addOutput('functionOutput', `Latitude: ${latitude}`);
    addOutput('functionOutput', `Longitude: ${longitude}`);
}

// 5.4 Swapping Variables with Destructuring
function demoSwap() {
    clearOutput('functionOutput');
    addOutput('functionOutput', '🎯 <strong>Swapping Variables without Temp Variable:</strong>');
    
    let x = 10, y = 20;
    addOutput('functionOutput', `Before swap: x = ${x}, y = ${y}`);
    
    [x, y] = [y, x];
    
    addOutput('functionOutput', `After swap using destructuring:`);
    addOutput('functionOutput', `x = ${x}, y = ${y}`);
    addOutput('functionOutput', `✅ No temporary variable needed!`);
}

// ============================================
// RUN ALL EXAMPLES
// ============================================

function runAllExamples() {
    clearAllOutputs();
    
    // Run array examples
    demoBasicArray();
    demoSkipArray();
    demoRestArray();
    demoDefaultArray();
    
    // Run object examples
    demoBasicObject();
    demoRenameObject();
    demoDefaultObject();
    demoRestObject();
    
    // Run advanced examples
    demoNestedArray();
    demoNestedObject();
    demoMixed();
    
    // Run function examples
    demoFunctionArray();
    demoFunctionObject();
    demoReturnArray();
    demoSwap();
    
    addOutput('arrayOutput', '\n✨ All array examples completed!');
    addOutput('objectOutput', '\n✨ All object examples completed!');
    addOutput('advancedOutput', '\n✨ All advanced examples completed!');
    addOutput('functionOutput', '\n✨ All function examples completed!');
}
