import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class ConsumerService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async placeOrder(dto: CreateOrderDto) {
    await this.ordersRepository.create(dto);
  }

  getOrders() {
    return this.ordersRepository.find({});
  }
}
