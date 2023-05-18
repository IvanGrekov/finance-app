import { ICryptoCurrency } from 'models/types/cryptoList';

export interface IChangeBalanceFormValues {
    amount: number;
    currency?: ICryptoCurrency['name'];
}
