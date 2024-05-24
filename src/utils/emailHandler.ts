import { analyzeEmailContent } from './analyzeEmail';

export async function handleIncomingEmail(emailContent: string): Promise<void> {
  const classification = await analyzeEmailContent(emailContent);
  console.log('Email classification:', classification);

  switch (classification) {
    case 'Interested':
      console.log('Handling interested case');
      break;
    case 'Not Interested':
      console.log('Handling not interested case');
      break;
    case 'More Information':
      console.log('Handling more information case');
      break;
    default:
      console.log('Unknown classification');
  }
}
