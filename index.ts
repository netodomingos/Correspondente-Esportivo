const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require("axios")
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_GOOGLE_GENERATIVE_AI);

async function run() {
	const matchesInfo = await handleGetInLiveMatchsInformation()

	if(matchesInfo !== undefined) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest"});

  const prompt = `voce vai receber essa informacao ${JSON.stringify(matchesInfo)}, melhore as informacoes recebidas, adicionando icones de bandeira do pais onde ocorre o campeonato e dexando separado por linhas`

  const { response } = await model.generateContent(prompt);

  return response.text();
	}
}

async function handleGetInLiveMatchsInformation(){
	const options = {
		method: 'GET',
		url: `${process.env.API_SPORTS_URL}`,
		headers: {
			'X-RapidAPI-Key': `${process.env.API_SPORTS_KEY}`,
			'X-RapidAPI-Host': `${process.env.API_SPORTS_HOST}`,
		}
	};

	try {
		const response = await axios.request(options);
		const eventosRecebidos = percorrerEventos(response.data.events)

		return eventosRecebidos
	} catch (error) {
		console.error(error);
	}
}

function percorrerEventos(eventos) {
    const arrayEventos = eventos.map(evento => ({
			torneio: evento.tournament.name,
			jogo: `${evento.homeTeam.name} x ${evento.awayTeam.name}`,
			placar: `${evento.homeScore.display} x ${evento.awayScore.display}`,
			status: evento.status.description === '1st half' ? 'Primeiro Tempo' : 'Segundo Tempo'
	}));

  return arrayEventos;
}

run();