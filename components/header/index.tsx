import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

import { DEFAULT_PX, DEFAULT_PY } from 'constants/layout';

export default function Header(): JSX.Element {
    // TODO: add loader
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                px: DEFAULT_PX,
                py: DEFAULT_PY,
            }}
        >
            <AccountCircle fontSize="large" />
        </Box>
    );
}
