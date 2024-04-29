import { extendedGoogleAiConfig } from "../structs/ExtendedGoogleAiConfig";

export async function handleSearchStreamingLinks(formatMatchesText: string): Promise<string>{
    const model = extendedGoogleAiConfig()
	const prompt = `voce vai receber essa informacao ${JSON.stringify(formatMatchesText)}, 
                    crie uma sessao somente com links para starPlus, max, premiere, youtube (canal goat e caze tv) e link de multicanais`

	const { response } = await model.generateContent(prompt);

	return response.text()
}