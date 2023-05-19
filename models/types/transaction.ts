export enum ETransactionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAW = 'WITHDRAW',
}

export interface ITransaction {
    amount: number;
    type: ETransactionType;
    date: Date;
}

export interface ICryptoTransaction extends ITransaction {
    assetId: string;
}
