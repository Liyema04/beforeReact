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

/*
    Destructuring allows you to extract values from arrays and properties from objects into variables. T
    his concise syntax makes your code cleaner and more readable. 
*/

// Example of Array Destructuring:
const [first, second] = [10, 20];
console.log(first) // output -> 10

/*

    To extract specific values from an array or object, 
    use destructuring by enclosing the desired variables within curly braces 
    for objects or square brackets for arrays.

*/

// Example of Object Destructuring
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
console.log(name); // Alice

    // Destructuring is commonly used in React for handling props and state

// 5. Rest and Spread Operators

    /*

        The rest and spread operators are incredibly versatile and widely used in JavaScript. 
        Both are represented by three dots (...), but their meanings differ depending on the context in which they are used.

    */


/* 

Spread Operator: Expands elements of an array or object.
    - Primarily used to unpack arrays or objects into individual elements.
    - Useful for creating shallow copies or merging arrays (and objects) without mutating the original

*/
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

    /* 

        arr2 is created by spreading the elements of arr1 and then adding additional values 
    
    */

    // Spread operator can also be used to copy objects or combine objects
const obj1 = {igama:'Liyema', iminyaka: 21};
const obj2 = {...obj1, impangelo: 'Software Engineer'};

console.log(obj2) // { igama: 'Liyema', iminyaka: 21, impangelo: 'Software Engineer' }

    // This is a common pattern/practice when updating state in React Applications

/*

Rest Operator: Collects multiple elements into an array.
    - The rest operator does the reverse: 
        ~> It collects multiple arguments or elements into a single array.
        ~> Useful when working with vardic functions(functions that accept a variable number of arguments)    

*/

    /*

        Here '...ags' gathers all the arguments passed to the function into an array. 
        This allows the 'reduce()' function to handela any number of arguments dynamically 
        e.g.
        | Step | total | num | total + num |
        | ---- | ----- | --- | ----------- |
        | 1️⃣  | 0     | 1   | 1           |
        | 2️⃣  | 1     | 2   | 3           |
        | 3️⃣  | 3     | 3   | 6           |



    */

function sum(...args) {
    return args.reduce((total, num) => total + num, 0); // reduce() - loops through each element in the array and combines them into a single result 
}

console.log(sum(1, 2, 3)); // 6

    // You can also use the rest operator to collect remaining properties of an object or elements of an array:

const [n1, ...rest] = [10, 20, 30, 40];
console.log(n1); // 10
console.log(rest) // [ 20, 30, 40 ]

    /* 
        This technique is particularly useful in React when working with props, where you might want to 
        extract specific properties and pass the rest down to child components. 
    */

// 6. Map, Filter & Reduce Methods: 


/*

The map(), filter(), and reduce() methods are incredibly powerful for array manipulation in JavaScript, 
and they play a crucial role in React for tasks like rendering lists, filtering data, and summarizing information.

    -> Map: Transforms elements of an array according to the function provided. Essential in React for dynamically rendering lists of 
                components from arrays of data...

    -> Filter: Creates a new array with elements that pass the condition specified  in the callback function. Frequently used 
                in React when you want to display only certain items based on user input or a specific condition.

    -> Reduce: Accumulates values into a single result     

*/


// 1. Map method
    // Example (basic usage):
    const nums= [1, 2, 3, 4];
    const doubled = nums.map(num => num * 2);
    console.log(doubled); // [ 2, 4, 6, 8 ]

    /* In React, map() is commonly used to render lists of components:
    const users = [
        { id: 1, name: 'Alice'},
        { id: 2, name: 'Bob'},
        { id: 3, name: 'Charlie'}
    ];

    function UserList() {
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    } 
    */

    /* 
        Note that each <li> element in the list has a unique 'key' prop.
        It is required by React when rendering lists like this. 
    */
    

// 2. Filter method
    //Example (basic usage):
    const nums2 = [1, 2, 3, 4, 5, 6];
    const evenNummbers = nums2.filter(num => num % 2 === 0);
    console.log(evenNummbers);
    
    /* Scenario: 
        Imagine you have a list where some tasks are completed while some are not. 
        You can use the filter() method to display (render) only the tasks that are not yet completed  
    */

    // Example (Filtering Data in React):
    const todos = [
        { id: 1, task: 'Learn JavaScript', completed: true},
        { id: 2, task: 'Learn React', completed: false },
        { id: 3, task: 'Build a project', completed: false }
    ];
    
    function TodoList() {
        const incompleteTodos = todos.filter(todo => !todo.completed);
        return (
            <ul>
                {incompleteTodos.map(todo => (
                    <li key={todo.id} >{todo.task}</li>
                ))}
            </ul>
        ); 
    } 

// 3. Reduce method  