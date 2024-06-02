{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 15;

  if (age >= 18) {
    // console.log({isAdult: true});
  } else {
    // console.log({isAdult: false});
  }

  // ternary operator
  const isAdult = age >= 18 ? true : false;
  // console.log({ isAdult: isAdult });

  // nullish coalescing operator
  // use only when need to make a decision based on null or undefined
  // const isAuthenticated = null;
  // const isAuthenticated = undefined;
  // const isAuthenticated = '';
  const isAuthenticated = false;

  const result1 = isAuthenticated ?? 'Guest'; // only work --> null / undefined
  const result2 = isAuthenticated ? isAuthenticated : 'Guest';
  console.log({ result1, result2 });




  //
}