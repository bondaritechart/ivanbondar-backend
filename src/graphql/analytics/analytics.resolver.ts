import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Analytics } from 'src/graphql/analytics/entities/analytics.entity';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsInput } from './dto/create-analytics.input';
import { Public } from '../auth/decorators/public.decorator';

@Public()
@Resolver('Analytics')
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Mutation(() => Analytics)
  createAnalyticsEvent(
    @Args('input') createAnalyticsInput: CreateAnalyticsInput,
  ) {
    return this.analyticsService.create(createAnalyticsInput);
  }

  @Query(() => [Analytics], { name: 'analytics' })
  findAll() {
    return this.analyticsService.findAll();
  }
}
