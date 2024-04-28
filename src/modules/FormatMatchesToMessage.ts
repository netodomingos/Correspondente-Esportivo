import { GoogleGenerativeAI } from "@google/generative-ai";
import { IMatches } from "../structs/types/IMatches";

export async function handleFormatMatchesToMessage(matchesInfo: Array<IMatches> | String){
	const genAI = new GoogleGenerativeAI(process.env.API_GOOGLE_GENERATIVE_AI!);

	

	if(matchesInfo !== 'Sem Eventos Hoje :/') {
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});

		const prompt = `voce vai receber essa informacao ${JSON.stringify(matchesInfo)}, 
			vai separar entre competicoes, dividindo entre competicoes principais (brasil, englaterra, espanha, champions league) 
			e outras competicoes (todo o resto), adicione alguns icones para melhorar a visualizacao, pois o texto será digitado no discord e o texto deve ter no maximo 4000 caracteres
			caso passe, retire algumas competicoes menos importantes e textos desnecessários`

		const { response } = await model.generateContent(prompt);

		console.log(response.text())

		return response.text();
	} else {
		return 'Sem Eventos Hoje :/'
	}
}