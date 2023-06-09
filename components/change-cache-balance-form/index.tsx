import ChangeBalanceForm from 'components/change-balance-form';
import { IChangeBalanceFormValues } from 'components/change-balance-form/types';
import { CHANGE_CACHE_BALANCE_FORM_ID } from 'components/change-cache-balance-form/constants/';
import {
    getDepositCashValidation,
    getWithdrawCashValidation,
} from 'components/change-cache-balance-form/utils/validation.utils';
import { useWForm } from 'components/form';
import { ETransactionType } from 'models/types/transaction';
import { formatDate } from 'utils/date.utils';
import { getIsDeposit } from 'utils/transaction.utils';

interface IChangeCacheBalanceFormProps {
    type: ETransactionType;
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
            id={CHANGE_CACHE_BALANCE_FORM_ID}
            methods={methods}
            onSubmit={onSubmit}
            isDeposit={isDeposit}
        />
    );
}
