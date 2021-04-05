export interface IPlace {
  id?: number;
  place: string;
  winners: IWinner[];
}

export interface IWinner {
  id: number;
  name: string;
  countryLogo: string;
}