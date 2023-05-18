import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';

import {
    DEFAULT_PADDING_XS,
    DEFAULT_PADDING_MD,
    DEFAULT_SMALL_PADDING_XS,
    DEFAULT_SMALL_PADDING_MD,
} from 'constants/layout';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';
import { usePageLoading } from 'models/contexts/PageLoading';

export default function Header(): JSX.Element {
    const { open: mobileSidebarOpen, toggleSidebar: toggleMobileSidebar } =
        useMobileNavigationSidebar();
    const { isLoading } = usePageLoading();

    return (
        <>
            <Box
                component="header"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: DEFAULT_PADDING_XS, md: DEFAULT_PADDING_MD },
                    py: { xs: DEFAULT_SMALL_PADDING_XS, md: DEFAULT_SMALL_PADDING_MD },
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

            <LinearProgress sx={{ opacity: isLoading ? 1 : 0 }} />
        </>
    );
}
