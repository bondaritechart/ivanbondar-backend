import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/graphql/user/entities/user.entity';

@ObjectType()
export class AnalyticsEvent {
  @Field()
  id: number;

  @Field({
    description:
      'Unique identifier for the event user session. It is used to group events by user session.',
  })
  uuid: string;

  @Field({ nullable: true })
  userId?: number;

  @Field(() => User, { nullable: true })
  user: User;

  @Field()
  event: string;

  @Field({ nullable: true })
  data?: string;

  @Field()
  ip: string;

  @Field()
  userAgent: string;

  @Field({ nullable: true })
  referrer?: string;
}
