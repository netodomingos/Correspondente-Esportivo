import { extendedGoogleAiConfig } from "../structs/ExtendedGoogleAiConfig";

export async function handleSearchStreamingLinks(formatMatchesText: string): Promise<string>{
    const model = extendedGoogleAiConfig()
	const prompt = `voce vai receber essa informacao ${JSON.stringify(formatMatchesText)}, 
                    verifique o conteúdo:
					caso a competicao seja Liga dos Campeões da UEFA, retorne link da plataforma https://play.max.com/
					caso contenha brasileirao, retorne link de multicanais e canal goat no youtube
					caso contenha jogos de bundesliga, retorne link para a cazé tv
					caso contenha jogos da espanha, franca, inglaterra, italia, portugal e outros paises europeus, retorne link para star+
					também evite textos extras, retorne somente o que foi pedido.

					a informação deve ser retornada desta forma:
					
					## Links para Assistir aos Jogos ao Vivo! :tv:
					
					**nome da plataforma**: link da plataforma
					`

	const { response } = await model.generateContent(prompt);

	return response.text()
}