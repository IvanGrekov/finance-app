import { PropsWithChildren } from 'react';

import Paper from '@mui/material/Paper';

export default function SectionWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, height: '100%' }}>
            {children}
        </Paper>
    );
}
