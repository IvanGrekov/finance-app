import AccountCircle from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';

import { DEFAULT_PX, DEFAULT_PY } from 'constants/layout';

export default function Header(): JSX.Element {
    const theme = useTheme();

    // TODO: add loader
    return (
        <Box
            component="header"
            display="flex"
            justifyContent="flex-end"
            px={DEFAULT_PX}
            py={DEFAULT_PY}
            top={0}
            left={0}
            bgcolor={theme.palette.background.paper}
        >
            <AccountCircle color="primary" fontSize="large" />
        </Box>
    );
}
