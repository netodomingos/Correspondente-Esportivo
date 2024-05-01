
import { extendedGoogleAiConfig } from "../../structs/ExtendedGoogleAiConfig";

export async function handleSanitizedText(text: string): Promise<string> {
	const model = extendedGoogleAiConfig()
	
	const prompt = `Olá Gemini, você vai receber essa informacao: '${text}', 
		voce deve verifica se o texto contem mais de 4000 caracteres, caso sim reduzao
        verifique se há conteúdos duplicados, caso sim, remova-os
        e retorne somente o conteúdo formatado.
		`

	const { response } = await model.generateContent(prompt)

	return response.text()
}