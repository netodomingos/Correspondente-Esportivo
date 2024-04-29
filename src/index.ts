import dotenv from 'dotenv';
import { 
    ScheduleJob,
    discordMessage,
    handleFormatMatchesToMessage, 
    handleGetInLiveMatchsInformation, 
    handleSearchStreamingLinks
} from './modules';

dotenv.config();



async function sportsFactory() {
    try {
        const matchesInfo = await handleGetInLiveMatchsInformation();	
        const formatMatchesText = await handleFormatMatchesToMessage(matchesInfo);
        const matchesStreamingLinks = await handleSearchStreamingLinks(formatMatchesText)
        discordMessage(formatMatchesText);
        discordMessage(matchesStreamingLinks);
    } catch (error) {
        discordMessage('Estou com dificuldades de encontrar as partidas :/');
    }
}

ScheduleJob(sportsFactory)
