import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';

import AmountField from 'components/change-balance-form/AmountField';
import CurrencyField from 'components/change-balance-form/CurrencyField';
import SubmitButton from 'components/change-balance-form/SubmitButton';
import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import { TUseFormReturn } from 'components/form';
import { useIsCrypto } from 'hooks/assetsType.hooks';
import useCryptoList from 'models/API/crypto/services/getCryptoList';

interface IChangeBalanceFormProps {
    id: string;
    isDeposit: boolean;
    methods: TUseFormReturn<IChangeBalanceFormValues>;
    onSubmit: (values: IChangeBalanceFormValues) => void;
    isLoading?: boolean;
}

export default function ChangeBalanceForm({
    id,
    isDeposit,
    methods,
    onSubmit,
    isLoading,
}: IChangeBalanceFormProps): JSX.Element {
    const isCrypto = useIsCrypto();
    const { data: cryptoList, isLoading: isCryptoListLoading } = useCryptoList();

    const { handleSubmit, register, formState, setValue, trigger } = methods;

    const {
        errors: { currency: currencyError, amount: amountError },
    } = formState;

    return (
        <form id={id} onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth={true}>
                <Stack spacing={3}>
                    {isCrypto && (
                        <CurrencyField
                            error={currencyError}
                            cryptoList={cryptoList}
                            setValue={setValue}
                            trigger={trigger}
                        />
                    )}

                    <AmountField error={amountError} fieldProps={register('amount')} />

                    <SubmitButton
                        isDeposit={isDeposit}
                        formId={id}
                        isLoading={isLoading || isCryptoListLoading}
                    />
                </Stack>
            </FormControl>
        </form>
    );
}
