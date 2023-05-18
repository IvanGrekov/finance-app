import ChangeBalanceForm from 'components/change-balance-form';
import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import {
    getDepositCashValidation,
    getWithdrawCashValidation,
} from 'components/change-cache-balance-form/utils/validation.utils';
import { CHANGE_CRYPTO_BALANCE_FORM_ID } from 'components/change-crypto-balance-form/constants';
import { useWForm } from 'components/form';
import { EAssetsType } from 'models/types/assetsType';
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
    const validation = isDeposit ? getDepositCashValidation() : getWithdrawCashValidation(1000);

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
            assetsType={EAssetsType.CRYPTO}
        />
    );
}
