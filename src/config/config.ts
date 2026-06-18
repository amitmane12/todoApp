// config.ts
import type { StringValue } from 'ms';

export const JWTconfig = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
  accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY as StringValue,
  refreshToken: process.env.REFRESH_TOKEN_SECRET!,
  refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY as StringValue,
};

export const CloudinaryConfig = {
  Cloudinary_Cloud_Name: process.env.CLOUDINARY_CLOUD_NAME!,
  Cloudinary_Api_Key: process.env.CLOUDINARY_API_KEY!,
  Cloudinary_Api_Secret: process.env.CLOUDINARY_API_SECRET!,
};
