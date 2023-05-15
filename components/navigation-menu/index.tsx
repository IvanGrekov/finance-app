import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NAV_ITEMS } from 'components/navigation-menu/constants';

export default function NavigationMenu(): JSX.Element {
    const { pathname } = useRouter();

    return (
        <List>
            {NAV_ITEMS.map(({ text, link, icon }) => (
                <ListItem disablePadding={true} key={text}>
                    <Link href={link}>
                        <ListItemButton selected={pathname === link}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}
