import { PropsWithChildren } from 'react';

import Paper from '@mui/material/Paper';

import { DEFAULT_PADDING_XS, DEFAULT_BORDER_RADIUS } from 'constants/layout';

export default function SectionWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <Paper
            variant="outlined"
            sx={{ height: '100%', p: DEFAULT_PADDING_XS, borderRadius: DEFAULT_BORDER_RADIUS }}
        >
            {children}
        </Paper>
    );
}
