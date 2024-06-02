/* destructuring */

{

  // object destructuring
  const user = {
    id: 2635,
    name: {
      firstName: 'Md. Nure',
      middleName: 'Siddique',
      lastName: 'Alom'
    },
    contactNo: '01800000000',
    address: 'Dhaka, BD'
  }

  const {
    contactNo,
    name: { lastName },
  } = user;

  // Array destructuring
  const myFriends = ['Rakib', 'Sabbir', 'Rafi', 'Ashiq', 'Kamrul', 'Sakib'];

  const [a, b, bestFriend] = myFriends; // array destructuring
  const [, , myBestFriend] = myFriends; // skip some value on array destructuring
  const [, , myOldBestFriend, ...restFriends] = myFriends; // skip some value and store rest value in a variable

}