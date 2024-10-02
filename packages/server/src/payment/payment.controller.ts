import { Controller, Post, Body, Get } from '@nestjs/common';
import { PayadmitService } from './payadmit.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiPayment, ApiResponse } from './types/payment.type';
import { getPayments, setPayment } from 'src/store';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PayadmitService) {}
  @Get()
  getAll() {
    return getPayments()
  }
  
  @Post()
  async create(@Body() { firstName, lastName, email, phone, ...billingAddress }: CreatePaymentDto) {
    const {result} = await this.paymentService.create({
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

    setPayment(result);

    const {id, redirectUrl} = result;

    const response: ApiResponse<ApiPayment> = {
        success: true,
        result: {
            id, redirectUrl
        }
    }

    return response;
  }
}
