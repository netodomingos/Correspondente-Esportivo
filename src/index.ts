import dotenv from 'dotenv';
import { 
    ScheduleJob,
    discordMessage,
    handleGetInLiveMatchsInformation,
    FormatedFactory, 
    handleSearchStreamingLinks,
} from './modules';

dotenv.config();

async function sportsFactory() {
    try {
        const matchesInfo = await handleGetInLiveMatchsInformation();	
        if(matchesInfo !== "Sem Eventos Hoje :/"){
            const competitions = await FormatedFactory(matchesInfo)
            discordMessage(competitions);
            const streamingLinks = await handleSearchStreamingLinks(competitions)
            discordMessage(streamingLinks);
        } else {
            discordMessage(matchesInfo);
        }
    } catch (error) {
        discordMessage('Estou com dificuldades de encontrar as partidas :/');
    }
}

ScheduleJob(sportsFactory)
