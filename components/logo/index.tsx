import { Box, Typography } from '@mui/material';

import { DEFAULT_PADDING_XS } from 'constants/layout';

export default function Logo(): JSX.Element {
    return (
        <Box
            sx={{
                pt: DEFAULT_PADDING_XS,
                pl: DEFAULT_PADDING_XS,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}
            >
                CODE2IMPACT
            </Typography>

            <Typography
                variant="subtitle2"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                }}
            >
                Finance
            </Typography>
        </Box>
    );
}
