export interface IMockedTableData {
  tableHead: string[];
  tableBody: ILeaderboardTableRow[];
}

export type StatusTypes = 'closed'|'live'| 'completed' | 'open';
export interface ILeaderboardTableRow {
  id: number;
  name: string,
  place: number | string,
  countryLogo: string,
  gamesPlayed: number,
  totalKills: number,
  placementPoints: number,
  totalPoints: number
}