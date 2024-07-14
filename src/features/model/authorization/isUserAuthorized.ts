import { prefix } from './handleAuthorization';

export const isUserAuthorized = () => {
  return sessionStorage.getItem(`${prefix}-is-auth`) === 'true';
}
