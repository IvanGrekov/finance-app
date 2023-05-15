import Drawer from '@mui/material/Drawer';

import NavigationSidebarContent from 'components/navigation-sidebar/NavigationSidebarContent';
import { NAVIGATION_SIDEBAR_WIDTH } from 'constants/layout';
import { useMobileNavigationSidebar } from 'models/contexts/MobileNavigationSidebar';

export default function MobileNavigationSidebar(): JSX.Element {
    const { open, toggleSidebar } = useMobileNavigationSidebar();

    return (
        <Drawer
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            container={typeof document === 'undefined' ? undefined : document.body}
            variant="temporary"
            open={open}
            onClose={toggleSidebar}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: NAVIGATION_SIDEBAR_WIDTH },
            }}
        >
            <NavigationSidebarContent />
        </Drawer>
    );
}
