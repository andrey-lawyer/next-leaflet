export interface IValue {
  description: string;
  cost: string;
  phone: string;
  accommodation: string;
  photo: null | Blob;
}

export interface IActions {
  resetForm: Function;
}
