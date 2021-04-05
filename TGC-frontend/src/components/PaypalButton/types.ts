export interface IExecuteOrder {
    tournamentId: number;
    paymentId: string;
    payerId: string;
    token: string;
}

export interface IPayPalButton {
    tournamentId: number;
    clientId: string;
    currencyCode: string;
    mode: string;
    callback: (isLoaded: boolean) => void;
}