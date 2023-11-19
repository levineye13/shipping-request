export interface ICargo {
  transport: string;
  moversNumber: number;
  passengersNumber: number;
}

export interface IRequest {
  readonly shippingAddress: string;
  readonly date: string;
  readonly destinationAddress: string;
  readonly surname: string;
  readonly name: string;
  readonly tel: string;
  readonly email: string;
  readonly cargos: ICargo[];
}
