import { Box, Typography } from '@mui/material';

import { DEFAULT_PX, DEFAULT_PY } from 'constants/layout';

export default function Logo(): JSX.Element {
    return (
        <Box px={DEFAULT_PX} pt={DEFAULT_PY}>
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
