/* Name and Type Alias */
{
  // Name Alias
  const myScores = {
    mathematics: 81,
    science: 75,
    bangali: 88,
    english: 71
  };
  const { mathematics: math } = myScores; // Change name while performing destructuring
  console.log(math);




  // Type Alias

  /*
  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNo: string;
    address: string;
  } = {
    name: 'Nur',
    age: 25,
    gender: 'male',
    contactNo: '01800000000',
    address: 'Dhaka, BD',
  };
  
  const student2: {
    name: string;
    age: number;
    gender: string;
    address: string;
  } = {
    name: 'Rifat',
    age: 26,
    gender: 'male',
    address: 'Dinajpur, BD',
  }
  */


  // Instead of declaring type multiple times, declare a type and use that type multiple times

  /* Type Alias for object */

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  }

  const student1: Student = {
    name: 'Nur',
    age: 25,
    gender: 'male',
    contactNo: '01800000000',
    address: 'Dhaka, BD',
  };

  const student2: Student = {
    name: 'Rifat',
    age: 26,
    gender: 'male',
    address: 'Dinajpur, BD',
  }

  /* Type Alias for primitive data */

  type UserName = string;
  type Age = number;
  type IsAdmin = boolean;

  const userName: UserName = 'Nur';
  const age: Age = 55;
  const isAdmin: IsAdmin = false;


  /* Type Alias for function */

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;



}