import dotenv from 'dotenv'

import { handleGetInLiveMatchsInformation } from './modules/GettingLiveMatches';
import { handleFormatMatchesToMessage } from './modules/FormatMatchesToMessage';
import { discordMessage } from './modules/DiscordMessage';

dotenv.config();

async function sportsFactory(){
	const matchesInfo = await handleGetInLiveMatchsInformation()	
	const matchesFormated = await handleFormatMatchesToMessage(matchesInfo)
	discordMessage(matchesFormated)
}

sportsFactory()