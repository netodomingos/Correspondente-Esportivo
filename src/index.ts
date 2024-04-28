import dotenv from 'dotenv'

import { handleGetInLiveMatchsInformation } from 'modules/GettingLiveMatches';
import { handleFormatMatchesToMessage } from 'modules/FormatMatchesToMessage';

dotenv.config();

async function sportsFactory(){
	const matchesInfo = await handleGetInLiveMatchsInformation()	
	const matchesFormated = await handleFormatMatchesToMessage(matchesInfo)
	
	return matchesFormated
}

sportsFactory()