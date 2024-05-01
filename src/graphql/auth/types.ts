export type JWTPayload = {
  email: string;
  id: number;
  role: string;
};

export type JWTPayloadWithRefreshToken = JWTPayload & {
  refreshToken: string;
};
