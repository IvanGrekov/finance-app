import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';

import Logo from 'components/logo';
import NavigationMenu from 'components/navigation-menu';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';

export default function NavigationSidebar(): JSX.Element {
    return (
        <Drawer
            variant="permanent"
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAVIGATION_SIDEBAR_WIDTH },
            }}
            open={true}
        >
            <Stack spacing={3}>
                <Logo />
                <NavigationMenu />
            </Stack>
        </Drawer>
    );
}
