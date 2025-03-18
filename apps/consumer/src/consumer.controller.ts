import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @EventPattern('placed-order')
  placeOrder(@Payload() dto: CreateOrderDto) {
    return this.consumerService.placeOrder(dto);
  }

  @MessagePattern({ cmd: 'fetch-orders' })
  getOrders() {
    return this.consumerService.getOrders();
  }
}
