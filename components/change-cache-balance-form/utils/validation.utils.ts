import * as Yup from 'yup';

import { ICacheBalanceFormValues } from 'components/change-cache-balance-form/types';
import {
    getRequiredAmountErrorMessage,
    getMinAmountErrorMessage,
    getMaxAmountErrorMessage,
} from 'utils/changeBalanceForm.utils';

export const getDepositCashValidation = (): Yup.ObjectSchema<ICacheBalanceFormValues> => {
    return Yup.object().shape({
        amount: Yup.number()
            .required(getRequiredAmountErrorMessage())
            .min(0, getMinAmountErrorMessage()),
    });
};

type TGetWithdrawCashValidation = (maxValue: number) => Yup.ObjectSchema<ICacheBalanceFormValues>;

export const getWithdrawCashValidation: TGetWithdrawCashValidation = (maxValue) => {
    return Yup.object().shape({
        amount: Yup.number()
            .required(getRequiredAmountErrorMessage())
            .min(0, getMinAmountErrorMessage())
            .max(maxValue, getMaxAmountErrorMessage(maxValue)),
    });
};

type TGetAmountFormattedErrorMessage = (message?: string) => string | undefined;

export const getAmountFormattedErrorMessage: TGetAmountFormattedErrorMessage = (message) => {
    if (!message) {
        return undefined;
    }

    if (message.includes('NaN')) {
        return getRequiredAmountErrorMessage();
    }

    return message;
};
