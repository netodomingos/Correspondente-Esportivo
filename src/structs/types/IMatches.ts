export interface IMatches {
    pais: string,
    torneio: string,
    jogo: string,
    mandante: string,
    horario: string,
    flag?: string
}

export interface DividedMatches {
    mainCompetitions:  Array<IMatches>;
    otherCompetitions:  Array<IMatches>
}