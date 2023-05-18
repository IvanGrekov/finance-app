import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';

import { TCryptoList } from 'models/types/cryptoList';
import { getAmountFormattedErrorMessage } from 'utils/changeBalanceForm.utils';

interface ICurrencyFieldProps {
    error: FieldError | undefined;
    fieldProps: UseFormRegisterReturn<'currency'>;
    cryptoList?: TCryptoList;
}

export default function CurrencyField({
    error,
    fieldProps,
    cryptoList,
}: ICurrencyFieldProps): JSX.Element {
    if (!cryptoList) {
        return <Skeleton variant="rectangular" height={50} />;
    }

    return (
        <TextField
            {...fieldProps}
            type="number"
            label="Currency"
            error={!!error}
            helperText={getAmountFormattedErrorMessage(error?.message)}
        />
    );
}
