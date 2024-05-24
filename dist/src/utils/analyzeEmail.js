"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeEmailContent = void 0;
const openAIService_1 = __importDefault(require("../openai/openAIService"));
function analyzeEmailContent(content) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield openAIService_1.default.completions.create({
                model: 'gpt-3.5-turbo-0613',
                prompt: `Classify the following email content into one of the categories: Interested, Not Interested, More Information.\n\nEmail content:\n${content}\n\nClassification:`,
                max_tokens: 10,
            });
            console.log(response.choices[0].text);
        }
        catch (error) {
            console.error('Error analyzing email content:', error);
            throw new Error('Failed to analyze email content.');
        }
    });
}
exports.analyzeEmailContent = analyzeEmailContent;
