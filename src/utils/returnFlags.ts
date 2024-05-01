import { IMatches } from "../structs/types/IMatches";

interface CountriesFlags {
    [key: string]: string;
}

export function returnFlags(matchesInfo: Array<IMatches>){
    const countriesFlags: CountriesFlags = {
        Brazil: ':flag_br:',
        Netherlands: ':flag_nl:',
        Italy: ':flag_it:',
        France: ':flag_fr:',
        Spain: ':flag_es:',
        Germany: ':flag_de:',
        Portugal: ':flag_pt:',
        England: ':flag_gb:',
        Europe: ':flag_eu:',
        flagWhite: ':soccer: :soccer_ball:'
    };

    const formattedMatches = matchesInfo.map(match => {
        let flag = countriesFlags[match.pais];
        if (flag === undefined) {
            flag = countriesFlags.flagWhite;
        }
        return { ...match, flag };
    });

    return formattedMatches;
}