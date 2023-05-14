import { Box, Typography } from '@mui/material';

import { DEFAULT_PX, DEFAULT_PY } from 'constants/layout';

export default function Logo(): JSX.Element {
    return (
        <Box px={DEFAULT_PX} pt={DEFAULT_PY}>
            <Typography variant="h5" textTransform="uppercase" fontWeight="bold" color="primary">
                Finance App
            </Typography>
        </Box>
    );
}
