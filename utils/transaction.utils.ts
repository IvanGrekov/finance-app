import { ETransactionType } from 'models/types/transaction';

export const getIsDeposit = (type: ETransactionType): boolean => {
    return type === ETransactionType.DEPOSIT;
};

export const getTransactonColor = (type: ETransactionType): 'success' | 'error' => {
    return getIsDeposit(type) ? 'success' : 'error';
};
