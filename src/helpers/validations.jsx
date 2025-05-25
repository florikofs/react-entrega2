
export const validateName = (name) => {
    return name.length > 3
}

export const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

export const validateTel = (name) => {
    return name.length > 9
}
