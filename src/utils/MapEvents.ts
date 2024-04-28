import { IMatches } from "structs/types/IMatches";
import { IEvent } from "structs/types/IEvent";
import formatarHorario from "./HourFormat";

export default function percorrerEventos(eventos: Array<IEvent>) {
    const arrayEventos: Array<IMatches> = eventos.map(evento => ({
		pais: evento.area.name,
		torneio: evento.competition.name,
		jogo: `${evento.homeTeam.name} x ${evento.awayTeam.name}`,
		mandante: evento.homeTeam.name,
		horario: formatarHorario(evento.utcDate)
	}));

  return arrayEventos;
}