import ChangeBalanceForm from 'components/change-balance-form';
import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import { CHANGE_CRYPTO_BALANCE_FORM_ID } from 'components/change-crypto-balance-form/constants';
import {
    getDepositCryptoValidation,
    getWithdrawCryptoValidation,
} from 'components/change-crypto-balance-form/utils/validation.utils';
import { useWForm } from 'components/form';
import { EHistoryEventType } from 'models/types/historyEvent';
import { formatDate } from 'utils/date.utils';
import { getIsDeposit } from 'utils/historyEvent.utils';

interface IChangeCacheBalanceFormProps {
    type: EHistoryEventType;
    onSubmitCompleted: () => void;
}

export default function ChangeCacheBalanceForm({
    type,
    onSubmitCompleted,
}: IChangeCacheBalanceFormProps): JSX.Element {
    const isDeposit = getIsDeposit(type);
    const validation = isDeposit ? getDepositCryptoValidation() : getWithdrawCryptoValidation(1000);

    const methods = useWForm<IChangeBalanceFormValues>({
        validation,
    });

    const onSubmit = (values: IChangeBalanceFormValues): void => {
        console.log(values, formatDate());
        onSubmitCompleted();
    };

    return (
        <ChangeBalanceForm
            id={CHANGE_CRYPTO_BALANCE_FORM_ID}
            methods={methods}
            onSubmit={onSubmit}
            isDeposit={isDeposit}
        />
    );
}
