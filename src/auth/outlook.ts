import { PublicClientApplication, Configuration } from '@azure/msal-node';
import dotenv from 'dotenv';

dotenv.config();

const config: Configuration = {
  auth: {
    clientId: process.env.OUTLOOK_CLIENT_ID as string,
    authority: process.env.OUTLOOK_AUTHORITY_URL as string,
    clientSecret: process.env.OUTLOOK_CLIENT_SECRET as string,
  },
};

export const pca = new PublicClientApplication(config);

export function generateAuthUrl(): Promise<string> {
  return pca.getAuthCodeUrl({
    scopes: ['https://graph.microsoft.com/Mail.Read', 'https://graph.microsoft.com/Mail.Send'],
    redirectUri: process.env.OUTLOOK_REDIRECT_URL as string,
  });
}

export async function getAccessToken(code: string): Promise<string> {
  const response = await pca.acquireTokenByCode({
    code,
    scopes: ['https://graph.microsoft.com/Mail.Read', 'https://graph.microsoft.com/Mail.Send'],
    redirectUri: process.env.OUTLOOK_REDIRECT_URL as string,
  });

  return response.accessToken;
}
