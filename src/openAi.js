import OpenAI from 'openai';
import {OPEN_AI_KEY} from "./constanst"

const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY'], 
baseURL: "https://api.sambanova.ai/v1",
   apiKey: OPEN_AI_KEY, 
   dangerouslyAllowBrowser: true
});

export default client