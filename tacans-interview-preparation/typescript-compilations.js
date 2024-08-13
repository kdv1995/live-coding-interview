// How does TypeScript handle compilation to JavaScript? What tools are commonly used for this purpose?

//Answer: TypeScript is a superset of JavaScript that compiles down to plain JavaScript code. The TypeScript compiler (tsc) is responsible for transforming TypeScript code into JavaScript code that can be executed in any browser or runtime environment. The compiler performs type checking, transpilation, and other optimizations to ensure that the resulting JavaScript code is compatible with the target environment.

// What the difference between compiling and transpiling? 

//Answer: Compiling and transpiling are similar processes that involve converting code from one language to another, but there are some key differences between the two:

// Compiling typically refers to converting code from a high-level language to a lower-level language that is closer to machine code. This process is often used in languages like C, C++, and Java to generate executable files that can be run on a specific platform.

// Transpiling, on the other hand, involves converting code from one high-level language to another high-level language. This process is commonly used in web development to convert modern JavaScript code (e.g., ES6) to older versions of JavaScript that are supported by all browsers.


// Compiliting typically happens when we convert the code from the high level language to a lower-level language that is closer to machine code; transpiling happens when we convert the code from one high-level language to another high-level language. We conver TypeScript to JavaScript, so it is transpiling.


// javascript to c++ is compiling
// javascript to typescript is transpiling


//Answer: Compiling is the process of converting code written in one language into another language that has a similar level

// What tools are commonly used for this purpose?

//Answer: The TypeScript compiler (tsc) is the primary tool used to compile TypeScript code to JavaScript. It is a command-line tool that can be installed globally using npm and run on individual TypeScript files or entire projects. Additionally, build tools like Webpack, Gulp, and Grunt are commonly used to automate the compilation process and manage dependencies in larger projects. IDEs like Visual Studio Code and WebStorm also provide built-in support for TypeScript compilation and debugging.
