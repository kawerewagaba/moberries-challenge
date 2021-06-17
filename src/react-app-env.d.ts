/// <reference types="react-scripts" />

interface ISubscription {
  plan: IPlan;
  storage: number;
  upfront: boolean;
}

interface IPlan {
  duration: number;
  price: number;
}

interface IUser {
  email: string;
  card: ICard;
  consent: boolean;
}

interface ICard {
  number: number;
  expiry: IExpiry;
  code: number;
}

interface IExpiry {
  month: number;
  year: number;
}
