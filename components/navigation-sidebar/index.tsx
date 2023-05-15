import Drawer from '@mui/material/Drawer';

import NavigationSidebarContent from 'components/navigation-sidebar/NavigationSidebarContent';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';

export default function NavigationSidebar(): JSX.Element {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: NAVIGATION_SIDEBAR_WIDTH,
                },
            }}
            open={true}
        >
            <NavigationSidebarContent />
        </Drawer>
    );
}
