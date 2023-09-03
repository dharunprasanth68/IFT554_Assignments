
// function greetTheStudent(studentName){ //parameter //name function
   // const message = 'Hello there';
    // const greeting = message + ' ' + studentName
//        return `Hello there ${studentName}`;
// }



// const greetTheStudent = function (studentName){ //parameter //anonymous function
    // const message = 'Hello there';
   // const greeting = message + ' ' + studentName
//        return `Hello there ${studentName}`;
// }


// const greetTheStudent = (studentName)=>{ //parameter //anonymous function //expression
//        return `Hello there ${studentName}`;
// }

//fat arrow function
const greetTheStudent = studentName => `Hello there ${studentName}`;

// const fullName = function(firstname, middlename, lastname){
//     return `${lastname},${middlename},${firstname}`;
// }

// const fullName = (firstname, middlename, lastname)=>{
//     return `${lastname},${middlename},${firstname}`;
// }

const fullName = (firstname, middlename, lastname)=>`${lastname},${middlename},${firstname}`;

// const student = 'Mary Jane';
// const greet = greetTheStudent(student);//argument
// console.log(greet);

const titleName = fullName('Mary','R','Jane');
console.log(titleName);

// console.log(message + ' ' + studentName);
// console.log(message + ' ' + studentName2);
