import dotenv from 'dotenv'
import schedule from 'node-schedule';

import { handleGetInLiveMatchsInformation } from './modules/GettingLiveMatches';
import { handleFormatMatchesToMessage } from './modules/FormatMatchesToMessage';
import { discordMessage } from './modules/DiscordMessage';

dotenv.config();

async function sportsFactory(){
	const matchesInfo = await handleGetInLiveMatchsInformation()	
	const matchesFormated = await handleFormatMatchesToMessage(matchesInfo)
	discordMessage(matchesFormated)
}

const rules = new schedule.RecurrenceRule();
rules.hour = 8; 
rules.minute = 0; 

schedule.scheduleJob(rules, sportsFactory);