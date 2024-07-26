import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnalyticsEvent } from 'src/graphql/analytics/entities/analytics-event.entity';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsInput } from './dto/create-analytics.input';
import { Public } from '../auth/decorators/public.decorator';

@Public()
@Resolver('Analytics')
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Mutation(() => AnalyticsEvent)
  createAnalyticsEvent(
    @Args('input') createAnalyticsInput: CreateAnalyticsInput,
  ) {
    return this.analyticsService.create(createAnalyticsInput);
  }

  @Query(() => [AnalyticsEvent], { name: 'events' })
  findAll() {
    return this.analyticsService.findAll();
  }
}
