import { IMatches } from "../structs/types/IMatches";
import { extendedGoogleAiConfig } from "../structs/ExtendedGoogleAiConfig";

export async function handleFormatMatchesToMessage(matchesInfo: Array<IMatches> | String) {
	if(matchesInfo !== 'Sem Eventos Hoje :/') {
		const model = extendedGoogleAiConfig()
		
		const prompt = `voce vai receber essa informacao ${JSON.stringify(matchesInfo)}, 
			vai separar entre competicoes, dividindo entre competicoes principais (brasil, englaterra, alemanha, espanha, champions league) 
			e outras competicoes (todo o resto), adicione alguns icones de pais ao lado dos nomes da competicao, 
			coloque o horario ao lado do confronto,
			pois o texto será digitado no discord e o texto deve ter no maximo 4000 caracteres
			caso passe, retire algumas competicoes menos importantes e textos desnecessários`

		const { response } = await model.generateContent(prompt)

		console.log(response.text())

		return response.text();
	} else {
		return 'Sem Eventos Hoje :/'
	}
}