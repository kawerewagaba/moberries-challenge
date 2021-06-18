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
  number: string;
  expiry: IExpiry;
  code: string;
}

interface IExpiry {
  month: string;
  year: string;
}

type CardValidation = {
  isValidNumber: Validation;
  isValidExpiry: Validation;
  isValidCVV: Validation;
};

type Validation = boolean | null;
