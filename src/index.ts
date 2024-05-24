import dotenv from 'dotenv';
import { handleIncomingEmail } from './utils/emailHandler';

dotenv.config();

async function fetchEmails(): Promise<string[]> {
  return ['Sample email content 1', 'Sample email content 2'];
}

async function main() {
  try {
    const emails = await fetchEmails();
    for (const emailContent of emails) {
      await handleIncomingEmail(emailContent);
    }
  } catch (error) {
    console.error('Error handling incoming emails:', error);
  }
}

main();
