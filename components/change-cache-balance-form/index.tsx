import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import SubmitButton from 'components/change-cache-balance-form/SubmitButton';
import { CHANGE_CACHE_BALANCE_FORM_ID } from 'components/change-cache-balance-form/constants/';
import { ICacheBalanceFormValues } from 'components/change-cache-balance-form/types';
import {
    getDepositCashValidation,
    getWithdrawCashValidation,
    getAmountFormattedErrorMessage,
} from 'components/change-cache-balance-form/utils/validation.utils';
import { useWForm } from 'components/form';
import { EHistoryEventType } from 'models/types/historyEvent';

interface IChangeBalanceFormProps {
    type: EHistoryEventType;
    closeModal: () => void;
}

export default function ChangeCacheBalanceForm({
    type,
    closeModal,
}: IChangeBalanceFormProps): JSX.Element {
    const isDeposit = type === EHistoryEventType.DEPOSIT;
    const validation = isDeposit ? getDepositCashValidation() : getWithdrawCashValidation(1000);

    const { register, handleSubmit, formState } = useWForm<ICacheBalanceFormValues>({
        validation,
    });

    const onSubmit = (values: ICacheBalanceFormValues): void => {
        console.log(values);
        closeModal();
    };

    const {
        errors: { amount: amountError },
    } = formState;

    return (
        <form id={CHANGE_CACHE_BALANCE_FORM_ID} onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth={true}>
                <TextField
                    {...register('amount')}
                    type="number"
                    label="Amount"
                    error={!!amountError}
                    helperText={getAmountFormattedErrorMessage(amountError?.message)}
                />

                <SubmitButton isDeposit={isDeposit} />
            </FormControl>
        </form>
    );
}
