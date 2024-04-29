import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

export function extendedGoogleAiConfig(): GenerativeModel {
    const genAI = new GoogleGenerativeAI(process.env.API_GOOGLE_GENERATIVE_AI!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});

    return model
}