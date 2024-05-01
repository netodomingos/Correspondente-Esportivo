import { DividedMatches, IMatches } from "../../structs/types/IMatches";

export function handleDividedMatches(matchesInfo: Array<IMatches>): DividedMatches {
    const mainCompetitions: Array<IMatches> = [];
    const otherCompetitions: Array<IMatches> = [];
  
    matchesInfo.forEach((match) => {
      if (
        match.pais === 'Brazil' ||
        match.pais === 'Germany' ||
        match.pais === 'Spain' ||
        match.pais === 'England' ||
        match.pais === 'France' ||
        match.pais === 'Europe'
      ) {
        mainCompetitions.push(match);
      } else {
        otherCompetitions.push(match);
      }
    });
  
    return {
      mainCompetitions,
      otherCompetitions,
    };
  }