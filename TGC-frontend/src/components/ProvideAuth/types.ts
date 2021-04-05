export interface IUserData {
    id: number;
    fullName: string;
    email: string;
    country: string | null;
    platformId: number | null;
    dateOfBirth: string | null;
    platformType: string | null;
}

export interface IUserToken {
    accessToken: string,
    tokenType: string;
}

export type ContextProps = {
    userData: IUserData | null,
    userToken: IUserToken | null,
    tournamentId: number,
    saveTournament: (id: number) => void,
    setUser: (data: IUserData) => void,
    signin: (token: IUserToken) => void,
    signout: () => void,
};