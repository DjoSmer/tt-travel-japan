import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from './payment.controller';
import { PayadmitService } from './payadmit.service';
import payadmitConfig from './config/payadmit.config';

@Module({
  controllers: [PaymentController],
  imports: [
    ConfigModule.forRoot({
      load: [payadmitConfig],
    })
  ],
  providers: [PayadmitService],
})
export class PaymentModule {}
