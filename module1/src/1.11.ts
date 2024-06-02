{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    console.log({ isAdult: true });
  } else {
    console.log({ isAdult: false });
  }

  // ternary operator
  const isAdult: boolean = age >= 18 ? true : false;
  console.log({ isAdult: isAdult });




  //
}