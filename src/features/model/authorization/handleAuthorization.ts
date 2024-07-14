export const prefix = 'rdclr';

export const logIn = () => {
  sessionStorage.setItem(`${prefix}-is-auth`, 'true');
}

export const logOut = () => {
  sessionStorage.setItem(`${prefix}-is-auth`, '');
}
