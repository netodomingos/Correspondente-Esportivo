import axios from "axios";
import percorrerEventos from "../utils/MapEvents";

export async function handleGetInLiveMatchsInformation(){
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
		return "Sem Eventos Hoje :/"
	}
}
