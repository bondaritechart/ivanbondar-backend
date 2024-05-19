import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnalyticsInput {
  @Field()
  event: string;

  @Field()
  data?: string;

  @Field()
  ip: string;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  userAgent: string;

  @Field({ nullable: true })
  referrer?: string;

  @Field()
  path: string;

  @Field()
  uuid: string;
}
