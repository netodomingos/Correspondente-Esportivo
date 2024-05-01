import { returnFlags } from "../../utils/returnFlags";
import { IMatches } from "../../structs/types/IMatches";
import { handleDividedMatches } from "./DividedMatches";
import { handleFormatMatchesToMessage } from "./FormatMatchesToMessage";
import { handleSanitizedText } from "./SanitizeString";

export async function FormatedFactory(matchesInfo: Array<IMatches>) {
    const competitionsFlagged = returnFlags(matchesInfo)
    const competititionsDivided = handleDividedMatches(competitionsFlagged)
    const competitionsText = await handleFormatMatchesToMessage(competititionsDivided)
    const sanitizedText = await handleSanitizedText(competitionsText)

    return sanitizedText
}