export type Customer = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Address = {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  countryCode?: string;
  postralCode?: string;
  state?: string;
};

export type PaymentType = 'DEPOSIT' | 'WITHDRAWAL' | 'REFUND' | 'CARDVERIFY';

export interface Payment {
  paymentType: PaymentType;
  paymentMethod: 'BASIC_CARD' | 'SKRILL';
  amount: number;
  currency: string;
}

export interface NewPayment extends Payment {
  description?: string;
  customer?: Customer;
  billingAddress?: Address;
  returnUrl?: string;
  successReturnUrl?: string;
  declineReturnUrl?: string;
  webhookUrl?: string;
}

export interface PaymentResponse extends Payment {
  id: string;
  state: string;
  internalState: string;
  parentPaymentId?: string;
  customerAmount: number;
  customerCurrency: string;
  redirectUrl: string;
}

export interface PayadmitResponse<ResultType> {
  timestamp: string;
  status: number;
  result: ResultType;
}
