import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { DEFAULT_PX, DEFAULT_PY } from 'constants/layout';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function Header(): JSX.Element {
    const { open: mobileSidebarOpen, toggleSidebar: toggleMobileSidebar } =
        useMobileNavigationSidebar();

    // TODO: add loader
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: { xs: 2, md: DEFAULT_PX },
                py: { xs: 1, md: DEFAULT_PY },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleMobileSidebar}
                    sx={{ display: { md: 'none' } }}
                >
                    {mobileSidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
            </Toolbar>

            <AccountCircle fontSize="large" />
        </Box>
    );
}
