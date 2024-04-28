export interface IEvent {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    minute?: string;
    injuryTime?: number;
    attendance?: any;
    venue?: string;
    matchday: number;
    stage: string;
    group?: string;
    lastUpdated: string;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    score: Score;
    goals: Goal[];
    penalties: Penalty[];
    bookings: any[];
    substitutions: any[];
    odds: Odds;
    referees: Referee[];
  }
  interface Referee {
    id: number;
    name: string;
    type: string;
    nationality: string;
  }
  interface Odds {
    homeWin?: number;
    draw?: number;
    awayWin?: number;
  }
  interface Penalty {
    player: Team;
    team: Team;
    scored: boolean;
  }
  interface Goal {
    minute: number;
    injuryTime?: any;
    type: string;
    team: Team;
    scorer: Team;
    assist?: any;
    score: Score2;
  }
  interface Score2 {
    home: number;
    away: number;
  }
  interface Team {
    id: number;
    name: string;
  }
  interface Score {
    winner?: string;
    duration: string;
    fullTime: FullTime;
    halfTime: FullTime;
  }
  interface FullTime {
    home?: number;
    away?: number;
  }
  interface AwayTeam {
    id: number;
    name: string;
    shortName: string;
    tla?: string;
    crest: string;
    coach: Coach;
    leagueRank?: number;
    formation?: string;
    lineup: (Bench | Lineup | Lineup2)[];
    bench: (Lineup | Lineup2)[];
  }
  interface HomeTeam {
    id: number;
    name: string;
    shortName: string;
    tla?: string;
    crest?: string;
    coach: Coach;
    leagueRank?: number;
    formation?: string;
    lineup: (Lineup | Lineup2)[];
    bench: (Bench | Lineup)[];
  }
  interface Bench {
    id: number;
    name: string;
    position?: string;
    shirtNumber: number;
  }
  interface Lineup2 {
    id: number;
    name: string;
    position: string;
    shirtNumber: number;
  }
  interface Lineup {
    id: number;
    name: string;
    position?: any;
    shirtNumber: number;
  }
  interface Coach {
    id?: number;
    name?: string;
    nationality?: string;
  }
  interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: any;
    stages: string[];
  }
  interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem?: string;
  }
  interface Area {
    id: number;
    name: string;
    code: string;
    flag?: string;
  }
  interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
  }
  interface Filters {
    dateFrom: string;
    dateTo: string;
    permission: string;
  }