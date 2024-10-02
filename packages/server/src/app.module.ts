import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [PaymentModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
