import { Injectable } from '@nestjs/common';
import { PaymentResponse } from './types/payadmit.type';

@Injectable()
export class PaymentService {
    private paymentMap = new Map<string, PaymentResponse>();

    get(id: string) {
        return this.paymentMap.get(id);
    }

    set(payment: PaymentResponse) {
        this.paymentMap.set(payment.id, payment);
    }

    gets() {
        return Object.fromEntries(this.paymentMap);
    }
}
