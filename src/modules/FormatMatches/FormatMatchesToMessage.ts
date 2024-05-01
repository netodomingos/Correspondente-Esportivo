import { DividedMatches } from "../../structs/types/IMatches";
import { extendedGoogleAiConfig } from "../../structs/ExtendedGoogleAiConfig";

export async function handleFormatMatchesToMessage(matchesDivided: DividedMatches): Promise<string> {
	const model = extendedGoogleAiConfig()
	
	const prompt = `Olá Gemini, você vai receber essa informacao: ${JSON.stringify(matchesDivided.mainCompetitions)} e ${JSON.stringify(matchesDivided.otherCompetitions)}, 
		 você deve retornar somente a informação que pedi com a seguinte regra de formatação
		 Separe eles por: Competições Principais :first_place: & Outras Competições :second_place:
		   - flag **competicao**
		    - jogo (horario, que deve ser formatado neste formato: hh:mm)
		`

	const { response } = await model.generateContent(prompt)

	return response.text()
}