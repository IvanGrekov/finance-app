import Stack from '@mui/material/Stack';

import Logo from 'components/logo';
import NavigationMenu from 'components/navigation-menu';

export default function NavigationSidebarContent(): JSX.Element {
    return (
        <Stack spacing={3}>
            <Logo />
            <NavigationMenu />
        </Stack>
    );
}
