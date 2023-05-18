import Typography from '@mui/material/Typography';

import ChangeCacheBalanceForm from 'components/change-cache-balance-form';
import ChangeCryptoBalanceForm from 'components/change-crypto-balance-form';
import Modal from 'components/modal';
import { IModalProps } from 'components/modal/types';
import { useIsCrypto } from 'hooks/assetsType.hooks';
import { EHistoryEventType } from 'models/types/historyEvent';
import { getIsDeposit } from 'utils/historyEvent.utils';

interface IChangeBalanceModalProps extends IModalProps {
    type: EHistoryEventType;
}

export default function ChangeBalanceModal({
    type,
    open,
    onClose,
}: IChangeBalanceModalProps): JSX.Element {
    const Form = useIsCrypto() ? ChangeCryptoBalanceForm : ChangeCacheBalanceForm;

    return (
        <Modal open={open} onClose={onClose}>
            <Typography variant="h6" component="h2" mb={4}>
                {getIsDeposit(type) ? 'Top up your wallet' : 'Withdraw your assets'}
            </Typography>

            <Form type={type} onSubmitCompleted={onClose} />
        </Modal>
    );
}
