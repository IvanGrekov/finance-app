import { TCacheBalance, ICryptoBalance } from 'models/types/balance';
import { ITransaction, ICryptoTransaction } from 'models/types/transaction';

export interface ICacheHistoryEvent extends ITransaction {
    id: string;
    balance: TCacheBalance;
}

export type TCacheHistory = ICacheHistoryEvent[];

export interface ICryptoHistoryEvent extends ICryptoTransaction {
    id: string;
    balance: ICryptoBalance;
}

export type TCryptoHistory = ICryptoHistoryEvent[];
