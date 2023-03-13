const password = 'pas$word';

// if (password.length >= 12){
//   console.log('password is very strong WELCOME!!!')
// } else if(password.length >= 8) {
//   console.log('WELCOME!!!')
// } else {
//   console.log('SORRY!!! the password is too short')
// }

password = password.length >= 12
    ? console.log('password is very strong WELCOME!!!')
        : password.length >= 8
    ? console.log('WELCOME!!!')
        : console.log('SORRY!!! the password is too short');