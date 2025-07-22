# Typescript 
- It is a strongly typed superset of JavaScript that compiles to plain JavaScript. 
- Key features of Typescript : 
- 1. static typing 
- 2. enhanced tooling 
- 3. superset of javascript 
- 4. transpilation of javascript 
- 5. improved code maintainability and scalability 

# Types in Typescript 
- It extends JavaScript by adding a static type system, allowing developers to define the shapes of data and enforce type safety during development. 
- This helps catch errors early and improves code maintainability.
- 1. core types : number, boolean, string, null, undefined, symbol
- 2. object types : interfaces, type aliases, classes, arrays, tuples
- 3. special types : any, unknown, void, enum

# Variables in Typescript 
- They are named containers used to store data values.
- TypeScript enhances variables with optional type annotations, providing static type checking
- variable naming conventions : 
- 1. Can contain alphabets, numeric digits, and the underscore (_) and dollar sign ($)
- 2. Cannot begin with a digit
- 3. Cannot contain spaces or special characters other than _ and $
- 4. Cannot be a reserved keyword (e.g., var, let, const, if, for)

# Classes in Typescript
- they are the blueprint for creating objects, encapsulating both data (properties) and behavior (methods) into a single, organized unit.
- Key aspects of classes : 
1. They can have type annotations to ensure type safety.
2. These define the actions or functions that an object can perform.
3. Access modifiers : public(Accessible from anywhere), private(Accessible only within the class where they are declared), protected(Accessible within the class and its subclasses)
- Inheritance : Classes can extend other classes using the extends keyword, allowing them to inherit properties and methods from a parent class.
- Abstraction : They can contain abstract methods (methods without implementation) that must be implemented by concrete subclasses.

# Interfaces in Typescript 
- They serve as powerful contracts that define the shape and structure of objects within your code.
- Are a fundamental tool for ensuring type safety and building robust applications by specifying what properties and methods an object should have, along with their respective types. 
- This ensures consistency and helps prevent errors during development.
- Interfaces solely focus on the contract and structure of objects; they do not contain any implementation logic, initialization values, or actual function code.
