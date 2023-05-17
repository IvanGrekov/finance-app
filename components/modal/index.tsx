import { PropsWithChildren } from 'react';

import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';

import { IModalProps } from 'components/modal/types';
import { DEFAULT_PADDING_MD } from 'constants/layout';

export default function Modal({
    open,
    onClose,
    children,
}: PropsWithChildren<IModalProps>): JSX.Element {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '320px', sm: '400px', md: '500px' },
                    p: DEFAULT_PADDING_MD,
                    bgcolor: 'background.paper',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    boxShadow: 24,
                }}
            >
                {children}
            </Box>
        </MuiModal>
    );
}
