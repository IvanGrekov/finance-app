import InboxIcon from '@mui/icons-material/MoveToInbox';

import { INavItem } from 'components/navigation-menu/types';

export const NAV_ITEMS: INavItem[] = [
    {
        text: 'Assets',
        link: '/',
        icon: <InboxIcon />,
    },
    {
        text: 'Deposits',
        link: '/deposits',
        icon: <InboxIcon />,
    },
    {
        text: 'Loans',
        link: '/loans',
        icon: <InboxIcon />,
    },
];
