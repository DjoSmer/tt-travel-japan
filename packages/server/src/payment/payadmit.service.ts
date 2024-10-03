import { Logger, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayadmitConfig } from './config/payadmit.config';
import { NewPayment, PayadmitResponse, PaymentResponse } from './types/payadmit.type';

type FetchParams<RequestType extends object> = {
  data?: RequestType;
  method?: 'GET' | 'POST';
};

type CreateOrderProps = Pick<
  NewPayment,
  'description' | 'amount' | 'currency' | 'customer' | 'billingAddress'
>;

@Injectable()
export class PayadmitService {
  private readonly logger = new Logger(PayadmitService.name);
  private readonly payadmitConfig: PayadmitConfig;

  constructor(private configService: ConfigService) {
    this.payadmitConfig = this.configService.get<PayadmitConfig>('payadmit');
  }

  async create(props: CreateOrderProps) {
    this.logger.debug('Create Payment');

    const data: NewPayment = {
      paymentType: 'DEPOSIT',
      paymentMethod: 'SKRILL',
      returnUrl: this.payadmitConfig.returnUrl,
      successReturnUrl: this.payadmitConfig.successUrl,
      declineReturnUrl: this.payadmitConfig.declineUrl,
      webhookUrl: this.payadmitConfig.webhook,
      ...props,
    };

    const payment = await this.fetch<PayadmitResponse<PaymentResponse>, NewPayment>({
      method: 'POST',
      data,
    });

    return payment;
  }

  private async fetch<ReturnData extends object, RequestType extends object>({
    data,
    method = 'GET',
  }: FetchParams<RequestType> = {}): Promise<ReturnData> {
    try {
      const { url, apiKey } = this.payadmitConfig;
      const body = data && JSON.stringify(data);

      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        method,
        body,
      });

      const result = await res.json();
      this.logger.debug('Payment fetch - success', body, JSON.stringify(result));

      return result;
    } catch (e) {
      const error = e as Error;
      this.logger.error(error.message, error.stack);
    }
  }
}
