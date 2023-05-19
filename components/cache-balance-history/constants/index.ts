import { TCacheHistory } from 'models/types/history';
import { ETransactionType } from 'models/types/transaction';

export const MOCKED_CACHE_HISTORY: TCacheHistory = [
    { id: '1', amount: 100, type: ETransactionType.DEPOSIT, balance: 100, date: new Date() },
    { id: '2', amount: 200, type: ETransactionType.DEPOSIT, balance: 300, date: new Date() },
    { id: '3', amount: 50, type: ETransactionType.WITHDRAW, balance: 250, date: new Date() },
    { id: '4', amount: 100, type: ETransactionType.DEPOSIT, balance: 350, date: new Date() },
    { id: '5', amount: 200, type: ETransactionType.WITHDRAW, balance: 150, date: new Date() },
    { id: '6', amount: 300, type: ETransactionType.DEPOSIT, balance: 450, date: new Date() },
    { id: '7', amount: 100, type: ETransactionType.WITHDRAW, balance: 350, date: new Date() },
    { id: '8', amount: 200, type: ETransactionType.DEPOSIT, balance: 550, date: new Date() },
    { id: '9', amount: 100, type: ETransactionType.WITHDRAW, balance: 450, date: new Date() },
    { id: '10', amount: 200, type: ETransactionType.DEPOSIT, balance: 650, date: new Date() },
];
