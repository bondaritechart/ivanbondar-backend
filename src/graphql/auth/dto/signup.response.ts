import { ObjectType } from '@nestjs/graphql';
import { SignResponse } from 'src/graphql/auth/dto/sign.response';

@ObjectType()
export class SignUpResponse extends SignResponse {}
