import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';

import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrdersRepository } from './orders.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_CONSUMER_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/consumer/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    RmqModule,
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService, OrdersRepository],
})
export class ConsumerModule {}
