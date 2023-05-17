import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ChangeBalanceModal from 'components/change-balance-modal';
import { EHistoryEventType } from 'models/types/historyEvent';

export default function BalanceActions(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(EHistoryEventType.DEPOSIT);

    const onClose = (): void => {
        setIsModalOpen(false);
    };

    const openDepositModal = (): void => {
        setModalType(EHistoryEventType.DEPOSIT);
        setIsModalOpen(true);
    };

    const openWithdrawModal = (): void => {
        setModalType(EHistoryEventType.WITHDRAW);
        setIsModalOpen(true);
    };

    return (
        <>
            <Box sx={{ display: 'flex', gap: 2, alignSelf: 'stretch' }}>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AddIcon />}
                    onClick={openDepositModal}
                    sx={{ flexGrow: 1 }}
                >
                    Income
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    startIcon={<RemoveIcon />}
                    onClick={openWithdrawModal}
                    sx={{ flexGrow: 1 }}
                >
                    Expense
                </Button>
            </Box>

            <ChangeBalanceModal type={modalType} open={isModalOpen} onClose={onClose} />
        </>
    );
}
