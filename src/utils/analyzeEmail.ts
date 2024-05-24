import openai from '../openai/openAIService';

export async function analyzeEmailContent(content: string): Promise<any> {
  try {
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-0613',
      prompt: `Classify the following email content into one of the categories: Interested, Not Interested, More Information.\n\nEmail content:\n${content}\n\nClassification:`,
      max_tokens: 10,
    });
    console.log(response.choices[0].text)
  } catch (error) {
    console.error('Error analyzing email content:', error);
    throw new Error('Failed to analyze email content.');
  }
}
