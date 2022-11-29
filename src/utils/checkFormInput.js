import { emailRegex } from "./constants";

export const checkInputField = (
  e,
  type,
  setErrorEmail,
  setErrorPassword,
  setNameError
) => {
  const fieldContent = e.target.value;
  let isValid = true;

  if (type === "email") {
    isValid = emailRegex.test(fieldContent);
    if (!isValid || fieldContent.length === 0) setErrorEmail(true);
    else setErrorEmail(false);
  } else if (type === "password") {
    if (fieldContent.length <= 6) setErrorPassword(true);
    else setErrorPassword(false);
  } else if (type === "name") {
    if (fieldContent.trim() <= 3) setNameError(true);
    else setNameError(false);
  }
};
