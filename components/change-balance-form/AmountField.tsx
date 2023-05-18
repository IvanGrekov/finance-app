import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { getAmountFormattedErrorMessage } from 'utils/changeBalanceForm.utils';

interface IAmountFieldProps {
    error: FieldError | undefined;
    fieldProps: UseFormRegisterReturn<'amount'>;
}

export default function AmountField({ error, fieldProps }: IAmountFieldProps): JSX.Element {
    return (
        <TextField
            {...fieldProps}
            type="number"
            label="Amount"
            error={!!error}
            helperText={getAmountFormattedErrorMessage(error?.message)}
        />
    );
}
