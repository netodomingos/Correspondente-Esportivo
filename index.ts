const axios = require("axios")
const moment = require('moment-timezone');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.API_GOOGLE_GENERATIVE_AI);


async function sportsFactory(){
	const matchesInfo = await handleGetInLiveMatchsInformation()	
	const matchesFormated = await handleFormatMatchesToMessage(matchesInfo)

	return matchesFormated
}

async function handleFormatMatchesToMessage(matchesInfo){
	if(matchesInfo) {
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

async function handleGetInLiveMatchsInformation(){
	const options = {
		method: 'GET',
		url: `${process.env.API_FOOTBALL_URL}`,
		headers: {
			'X-Auth-Token': `${process.env.API_FOOTBALL_KEY}`,
		}
	};

	try {
		const response = await axios.request(options);
		const eventosRecebidos = percorrerEventos(response.data.matches)

		return eventosRecebidos
	} catch (error) {
		console.error(error);
	}
}

function formatarHorario(dateRecived) {
    const horario = moment(dateRecived)
    const agora = moment().tz('America/Sao_Paulo');
    if (horario.isBefore(agora, 'day')) {
        return "Finalizado";
    } else {
        if (horario.isSame(agora, 'day')) {
            return horario.format('HH:mm:ss');
        } else {
            return horario.tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss');
        }
    }
}

function percorrerEventos(eventos) {
    const arrayEventos = eventos.map(evento => ({
		pais: evento.area.name,
		torneio: evento.competition.name,
		jogo: `${evento.homeTeam.name} x ${evento.awayTeam.name}`,
		mandante: evento.homeTeam.name,
		horario: formatarHorario(evento.utcDate)
	}));

  return arrayEventos;
}

sportsFactory();