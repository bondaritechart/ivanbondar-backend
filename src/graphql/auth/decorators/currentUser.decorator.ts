import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JWTPayloadWithRefreshToken } from 'src/graphql/auth/types';

export const CurrentUser = createParamDecorator(
  (
    data: keyof JWTPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    console.log('req.user', req.user);
    if (data) {
      return req.user[data];
    }
    return req.user;
  },
);
