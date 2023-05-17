export enum EHistoryEventType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAW = 'WITHDRAW',
}

export interface IHistoryEvent {
    amount: number;
    type: EHistoryEventType;
}

export interface IHistoryCryptoEvent extends IHistoryEvent {
    assetId: string;
}
