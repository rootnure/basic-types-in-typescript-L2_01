{
  // Spread Operator
  // Rest Operator
  const poorUser = {
    name: 'Mr. X',
  }

  // learn spread operator
  /* Array */
  const bros1: string[] = ['Rakib', 'Toymur', 'Ratul', 'Sabuj'];
  const bros2: string[] = ['Jakirul', 'Ikram', 'Mahbub'];
  // bros1.push(bros2); // not allowed
  bros1.push(...bros2);

  /* Object */
  const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan',
  }
  const mentors2 = {
    prisma: 'Feroz',
    next: 'Tanmoy',
    cloud: 'Nahid',
  }

  const mentorList = {
    ...mentors1,
    ...mentors2,
  }


  // learn rest operator
  const greetingFriends = (friend1: string, friend2: string, friend3: string) => {
    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  }
  greetingFriends('Abul', 'Babul', 'Kabul');

  const greetingFriends2 = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
  }
  greetingFriends2('Abul', 'Babul', 'Kabul', 'Ubbol', 'Labul');


}