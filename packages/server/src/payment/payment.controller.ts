import { Controller, Post, Body, Get, Logger } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PayadmitService } from './payadmit.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiPayment, ApiResponse } from './types/payment.type';
import { PaymentResponse } from './types/payadmit.type';

@Controller('payment')
export class PaymentController {
  private readonly logger = new Logger(PaymentController.name);

  constructor(private readonly payadmitService: PayadmitService, private readonly paymentService: PaymentService) {}
  @Get()
  getAll() {
    return this.paymentService.gets();
  }
  
  @Post()
  async create(@Body() { firstName, lastName, email, phone, ...billingAddress }: CreatePaymentDto) {
    const {result} = await this.payadmitService.create({
      amount: 799.5,
      currency: 'EUR',
      description: 'Japan ticket',
      customer: {
        firstName,
        lastName,
        email,
        phone,
      },
      billingAddress,
    });

    this.paymentService.set(result);

    const {id, redirectUrl} = result;

    const response: ApiResponse<ApiPayment> = {
        success: true,
        result: {
            id, redirectUrl
        }
    }

    return response;
  }

  @Post('webhook')
  webhook(@Body() params: PaymentResponse) {
    /**
     * обработка ответа от payadmit
     */
    this.logger.debug('webhook', JSON.stringify(params));

    this.paymentService.set(params);

    return { success: true };
  }
}
