//Create a typescript parent class and try to abstract all the methods fron parent class

// ParentClass.ts

// abstract class ParentClass {
//     abstract method1(): void; // Abstract method without implementation
//     abstract method2(param: string): number; // Abstract method with parameters

//     commonMethod(): void {
//       console.log('This is a common method in the parent class.');
//     }

//     // Optional: Implement a non-abstract method
//     concreteMethod(): string {
//       return 'This is a concrete method in the parent class.';
//     }
//   }

//   export default ParentClass;

// ChildClass.ts

// import ParentClass from './ParentClass'; // Adjust path as necessary

// class ChildClass extends ParentClass {
//   method1(): void {
//     console.log('Implementation of method1 in ChildClass.');
//   }

//   method2(param: string): number {
//     console.log(`Implementation of method2 in ChildClass with parameter: ${param}`);
//     return param.length;
//   }

//   // Optional: Override the concrete method if needed
//   concreteMethod(): string {
//     return 'Overridden concrete method in ChildClass.';
//   }
// }

// export default ChildClass;

// App.ts

// import ChildClass from './ChildClass'; // Adjust path as necessary

// const child = new ChildClass();
// child.method1(); // Output: Implementation of method1 in ChildClass.
// const result = child.method2('example'); // Output: Implementation of method2 in ChildClass with parameter: example
// console.log(result); // Output: 7 (length of 'example')
// console.log(child.concreteMethod()); // Output: Overridden concrete method in ChildClass.
// child.commonMethod(); // Output: This is a common method in the parent class.

//Create a button library or common UI library which should be used by other people & write test cases for same

// src/Button.tsx

// import React, { ButtonHTMLAttributes } from 'react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
//   const buttonClasses = `btn btn-${variant}`;

//   return (
//     <button className={buttonClasses} {...rest}>
//       {children}
//     </button>
//   );
// };

// export default Button;

// src/Button.test.tsx

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Button from './Button';

// describe('Button Component', () => {
//   it('renders correctly with default props', () => {
//     const { getByText } = render(<Button>Click me</Button>);
//     const buttonElement = getByText('Click me');
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement.tagName).toBe('BUTTON');
//     expect(buttonElement.className).toContain('btn-primary');
//   });

//   it('renders correctly with secondary variant', () => {
//     const { getByText } = render(<Button variant="secondary">Click me</Button>);
//     const buttonElement = getByText('Click me');
//     expect(buttonElement.className).toContain('btn-secondary');
//   });

//   it('executes onClick handler', () => {
//     const handleClick = jest.fn();
//     const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
//     const buttonElement = getByText('Click me');
//     fireEvent.click(buttonElement);
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });
// });

//Create a file which logs all the logs in your application

// LoggerService.js

// const logToConsole = (message) => {
//   console.log(`[LOG] ${message}`);
// };

// const logToLocalStorage = (message) => {
//   const logs = JSON.parse(localStorage.getItem("appLogs") || "[]");
//   logs.push({ timestamp: new Date().toISOString(), message });
//   localStorage.setItem("appLogs", JSON.stringify(logs));
// };

// const log = (message) => {
//   logToConsole(message);
//   logToLocalStorage(message);
// };

// const clearLogs = () => {
//   localStorage.removeItem("appLogs");
// };

// const getLogs = () => {
//   return JSON.parse(localStorage.getItem("appLogs") || "[]");
// };

// export { log, clearLogs, getLogs };

// App.js

// import React, { useEffect } from "react";
// import { log, clearLogs, getLogs } from "./LoggerService";

// const App = () => {
//   useEffect(() => {
//     log("Component mounted");
//     return () => {
//       log("Component unmounted");
//     };
//   }, []);

//   const handleClearLogs = () => {
//     clearLogs();
//   };

//   const handleShowLogs = () => {
//     const logs = getLogs();
//     console.log("Logs:", logs);
//     // You can display logs in UI or process them further
//   };

//   return (
//     <div>
//       <h1>Logging Example</h1>
//       <button onClick={handleClearLogs}>Clear Logs</button>
//       <button onClick={handleShowLogs}>Show Logs</button>
//     </div>
//   );
// };

// export default App;
