import { Controller, Logger, Body, Post } from '@nestjs/common';
import { PaymentResponse } from '../payment/types/payadmit.type'; // понимаю что так не корректно делать.
import { setPayment } from 'src/store';

@Controller('webhook')
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);
  @Post()
  payadmit(@Body() params: PaymentResponse) {
    /**
     * обработка ответа от payadmit
     */
    this.logger.log('webhook/payadmit', JSON.stringify(params));

    setPayment(params);

    return { success: true };
  }
}
