import dotenv from 'dotenv';
import schedule from 'node-schedule';
import { handleGetInLiveMatchsInformation } from './modules/GettingLiveMatches';
import { handleFormatMatchesToMessage } from './modules/FormatMatchesToMessage';
import { discordMessage } from './modules/DiscordMessage';

dotenv.config();

async function sportsFactory() {
    try {
        const matchesInfo = await handleGetInLiveMatchsInformation();	
        const matchesFormated = await handleFormatMatchesToMessage(matchesInfo);
        discordMessage(matchesFormated);
        console.log('Sports update sent successfully.'); // Logging for verification
    } catch (error) {
        console.error('Error occurred while sending sports update:', error); // Logging error
    }
}

const rule = new schedule.RecurrenceRule();
rule.hour = 8;
rule.minute = 0;

schedule.scheduleJob(rule, sportsFactory);