export const isValidPassword = (password: string) => {
  if (password.length < 8 || password.length > 32) {
    return false;
  }
  if (/^[0-9A-z.,:;?!*+%\-<>@[\]{}/\\_$#]/.test(password)) {
    return false;
  }
  return true;
}


export const passwordFormatErrorMessage = 'Используйте от 8 до 32 символов: строчные и прописные латинские буквы (A-z), цифры (0-9) и спецсимволы ( . , : ; ? ! * + % - < > @ [] { } / \\ _ {} $ # )';
