import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema()
export class Order extends AbstractDocument {
  @Prop()
  email: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
