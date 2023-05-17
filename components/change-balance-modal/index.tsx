import Typography from '@mui/material/Typography';

import ChangeCacheBalanceForm from 'components/change-cache-balance-form';
import Modal from 'components/modal';
import { IModalProps } from 'components/modal/types';
import { EHistoryEventType } from 'models/types/historyEvent';

interface IChangeBalanceModalProps extends IModalProps {
    type: EHistoryEventType;
}

export default function ChangeBalanceModal({
    type,
    open,
    onClose,
}: IChangeBalanceModalProps): JSX.Element {
    return (
        <Modal open={open} onClose={onClose}>
            <Typography variant="h6" component="h2" mb={4}>
                {type === EHistoryEventType.DEPOSIT ? 'Top up your wallet' : 'Withdraw your assets'}
            </Typography>

            <ChangeCacheBalanceForm type={type} closeModal={onClose} />
        </Modal>
    );
}
