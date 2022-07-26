export interface Customer {
  id?: number
  code?: string;
  name?: string;
  birthday?: string;
  gender?: string;
  phoneNumber?: string;
  address?: string;
  type?: {
    id?: number;
    name?: string;
  }
}
