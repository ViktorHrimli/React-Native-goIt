const validateName = (value, setIsValid) => {
  if (value.trim().length > 2) {
    setIsValid(true);
  } else {
    setIsValid(false);
  }
};

const validateEmail = (text, setIsValidEmail) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(text)) {
    setIsValidEmail(true);
  } else {
    setIsValidEmail(false);
  }
};

const validationPassword = (password, setIsValidPassword) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passwordRegex.test(password)) {
    setIsValidPassword(true);
  } else {
    setIsValidPassword(false);
  }
};

export { validateName, validateEmail, validationPassword };
