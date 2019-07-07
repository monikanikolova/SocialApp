// Helper function to determine if string is empty
const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

// Helper function to validate if it is email format
const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

// Validate data
exports.validateSignUpData = data => {
  let errors = {};
  // Validate email is not empty and is correct format
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email))
    errors.email = "Must be a valid email address!";

  // Validate password is not empty
  if (isEmpty(data.password)) errors.password = "You must input password";

  // Validate if passwords match
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match!";

  //  Validate if handle is empty
  if (isEmpty(data.handle)) errors.handle = "Must not be empty!";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.validateLoginData = data => {
  let errors = {};
  // Validate email is not empty and is correct format
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email))
    errors.email = "Must be a valid email address!";
  // Validate if password is empty
  if (isEmpty(data.password)) errors.password = "Must not be empty!";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

exports.reduceUserDetails = data => {
  let userDetails = {};
  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;
  return userDetails;
};
