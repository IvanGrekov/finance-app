import * as Yup from 'yup';

import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import {
    getRequiredAmountErrorMessage,
    getMinAmountErrorMessage,
    getMaxAmountErrorMessage,
} from 'utils/changeBalanceForm.utils';

export const getDepositCashValidation = (): Yup.ObjectSchema<IChangeBalanceFormValues> => {
    return Yup.object().shape({
        amount: Yup.number()
            .required(getRequiredAmountErrorMessage())
            .min(0, getMinAmountErrorMessage()),
        currency: Yup.string(),
    });
};

type TGetWithdrawCashValidation = (maxValue: number) => Yup.ObjectSchema<IChangeBalanceFormValues>;

export const getWithdrawCashValidation: TGetWithdrawCashValidation = (maxValue) => {
    return Yup.object().shape({
        amount: Yup.number()
            .required(getRequiredAmountErrorMessage('withdraw'))
            .min(0, getMinAmountErrorMessage())
            .max(maxValue, getMaxAmountErrorMessage(maxValue)),
        currency: Yup.string(),
    });
};
