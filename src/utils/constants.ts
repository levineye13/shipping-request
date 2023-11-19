import { IRequest } from './interfaces';

export const routes = {
  delivery: '/delivery',
  sendCargo: '/send-cargo',
  contacts: '/contacts',
};

export const initialRequest: IRequest = {
  cargos: [],
  surname: '',
  name: '',
  email: '',
  tel: '',
  shippingAddress: '',
  destinationAddress: '',
  date: '',
};
