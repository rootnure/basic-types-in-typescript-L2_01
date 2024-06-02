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









}