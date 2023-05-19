import { TCacheHistory } from 'models/types/history';
import { ETransactionType } from 'models/types/transaction';

export const MOCKED_CACHE_HISTORY: TCacheHistory = [
    {
        id: '1',
        amount: 170,
        type: ETransactionType.DEPOSIT,
        balance: 100,
        date: new Date(2023, 4, 14),
    },
    {
        id: '2',
        amount: 220,
        type: ETransactionType.DEPOSIT,
        balance: 300,
        date: new Date(2023, 4, 15),
    },
    {
        id: '3',
        amount: 490,
        type: ETransactionType.WITHDRAW,
        balance: 250,
        date: new Date(2023, 4, 16),
    },
    {
        id: '4',
        amount: 910,
        type: ETransactionType.DEPOSIT,
        balance: 350,
        date: new Date(2023, 4, 17),
    },
    {
        id: '5',
        amount: 670,
        type: ETransactionType.DEPOSIT,
        balance: 150,
        date: new Date(2023, 4, 18),
    },
    {
        id: '6',
        amount: 320,
        type: ETransactionType.DEPOSIT,
        balance: 450,
        date: new Date(2023, 4, 19),
    },
];
