import { SyntheticEvent } from 'react';
import { FieldError, UseFormSetValue, UseFormTrigger } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import { TCryptoList } from 'models/types/cryptoList';
import { getAmountFormattedErrorMessage } from 'utils/changeBalanceForm.utils';

interface ICurrencyFieldProps {
    error: FieldError | undefined;
    setValue: UseFormSetValue<IChangeBalanceFormValues>;
    trigger: UseFormTrigger<IChangeBalanceFormValues>;
    cryptoList?: TCryptoList;
}

export default function CurrencyField({
    error,
    setValue,
    trigger,
    cryptoList,
}: ICurrencyFieldProps): JSX.Element {
    if (!cryptoList) {
        return <Skeleton variant="rectangular" height={50} />;
    }

    const onInputChange = (_: SyntheticEvent<Element, Event>, value: string): void => {
        setValue('currency', value);
        trigger('currency');
    };

    return (
        <Autocomplete
            options={cryptoList}
            autoHighlight
            getOptionLabel={(option): string => option.name}
            renderOption={(props, option): JSX.Element => (
                <Box component="li" {...props}>
                    <Image src={option.imageUrl} alt={option.fullName} width={20} height={20} />
                    <Typography pl={1}>{option.fullName}</Typography>
                </Box>
            )}
            onInputChange={onInputChange}
            renderInput={(params): JSX.Element => (
                <TextField
                    {...params}
                    label="Currency"
                    error={!!error}
                    helperText={getAmountFormattedErrorMessage(error?.message)}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
