import moment from "moment-timezone";

export default function formatarHorario(dateRecived: string) {
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