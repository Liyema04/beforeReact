// 1. Template Literals 

/* 

Template literals simplify string interpolation and multiline text formatting. 
By using backticks (`___` ), you can embed expressions into strings with ${}. 
This makes concatenating variables and expressions with text easy, eliminating the need for cumbersome string concatenation. 

*/

let numEggs = 4;

console.log(`In breakfast, I eat ${numEggs} eggs.`);

console.log(`Todday I ate only half of is, I ate just ${numEggs/2} eggs.`);


// They also support multiline strings (witout needing th newline character '\n' )

console.log(`Today I had:
    - Breakfast
    - Lunch
    - Dinner`);

/*

With their flexibility and clarity, template literals have become a 
preferred method for handling strings and dynamic content in modern JavaScript.

*/ 

// 2. Arrow Functions

/*

Arrow functions provide a more concise syntax for writing functions and automatically bind this to the context in which they're declared. 
They are a staple of React development, as they simplify event handlers, lifecycle methods, and other functional logic.


Simple terms:

- A diiferent way of defining your functions compared to older JS :

export default function DoSomething() {
    // Logic goes in here
}

*/

/* 
Recent best practices of JS have introduced a different way of defining functions, using variable keyword syntax e.g const, let or var.
- Making it better when working with call-back functions 
- This syntax also allows you to export functions simpler way...

*/
export const DoSomething = () => { // 'export' allows you to use the function in other scripts 
    // Logic goes in here
}

/*

This is important because it's the standard way of creating components in React 
const MyComponent = () => {
    return <div></div>
}

// Anonymous functions
<button 
    onClick={ () => {
        console.log("Hello World!")
    }}>
</button>

*/

//  Below you can find different variations of arrow functions:

// i.) Single Arguments
/* 
    When an arrow function has a single argument, you can omit the parentheses
*/
const bulisa = igama => `Molo, ${igama}!`;
console.log(bulisa('Ta Limz'));

// ii.) Without Arguments; If there are no arguments you still need to use parantheses
const yitiMolo = () => `Molweni, bantu ba seMhlabeni!`;
console.log(yitiMolo()); 

// iii.) Multiple Arguments; Parenthese are mandetory
const add = (a, b) => a + b;
console.log(add(2, 3));   

// iv.) Single-Line body (Implicit Return)
/*  
    When the function body is a single expression, you can omit the return keyword and curly braces. 
    This is known as an implicit return. 
*/
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); 

// v.) Multi-Line Function Body
/* 
    For more complex logic or multiple statements, you need curly braces, 
    and an explicit return is required if the function returns a value. 
*/
const getFullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
};

console.log(getFullName('Liyema', 'Mkebe'));

// vi.) Returning an Object
/*
    To return an object directly, wrap the object in parentheses to avoid confusion with the function body
*/
const createUser = (name, age) => ({name, age});
console.log(createUser('Alice', 30));

// vii.) in Callbacks;  Arrow functions are often used as callbacks for array methods like map, filter, and reduce.
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares);


//3. Default Parameters (or Values)

/*
    Default parameters allow functions to have pre-set values if no arguments are passed, or when an argument is undefined. 
    This feature is helpful when writing flexible components in React, 
    where you may not always pass every prop or argument.
*/

function iMphilo(igama = 'Mfondini') {
    console.log(`kuNjani, ${igama}?`); 
}

iMphilo();
iMphilo('Luyolo');

/* 
    Another commonly used approach in JavaScript, which is leveraging logical operators like || to set a default value when the 
    given value is falsy (that is, values like 0, null, undefined, false, or ""). 
*/

function kuNjani(igama) {
    const iGamaLokGqibela = igama || 'Mfondini';  
    console.log(`kuNjani, ${iGamaLokGqibela}?`); 
}

kuNjani();
kuNjani('');
kuNjani('Prince')

/* 
^^^^^^^^
    Above process uses  a concept called short-circuiting of logical operators, which is discussed in section-9  
^^^^^^^
*/

// 4. Destructuring Objects and Arrays