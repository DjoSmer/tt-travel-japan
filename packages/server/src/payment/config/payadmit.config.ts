import { registerAs } from '@nestjs/config';

export type PayadmitConfig = {
  url: string;
  shop: string;
  singKey: string;
  apiKey: string;
  returnUrl?: string;
  successUrl?: string;
  declineUrl?: string;
  webhook?: string;
};

export default registerAs<PayadmitConfig>('payadmit', () => ({
  url: process.env.PAYADMIT_URL,
  shop: process.env.PAYADMIT_SHOP,
  singKey: process.env.PAYADMIT_SINGKEY,
  apiKey: process.env.PAYADMIT_APIKEY,
  returnUrl: process.env.PAYADMIT_RETURN_URL,
  successUrl: process.env.PAYADMIT_SUCCESS_URL,
  declineUrl: process.env.PAYADMIT_DECLINE_URL,
  webhook: process.env.PAYADMIT_WEBHOOK,
}));
