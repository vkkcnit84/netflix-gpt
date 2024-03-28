/* eslint-disable no-useless-escape */
const isValidDetails = function (email, password) {
   const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
   const isValidEmail = emailRegex.test(email);
   if(!isValidEmail) return 'Not a valide Email';
   if(password.length < 6) return 'Not a valid password';
   return true
}

export default isValidDetails;