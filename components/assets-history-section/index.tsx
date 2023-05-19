import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CacheBalanceHistory from 'components/cache-balance-history';

export default function AssetsHistorySection(): JSX.Element {
    return (
        <Stack spacing={2}>
            <Typography>History</Typography>
            <CacheBalanceHistory />
        </Stack>
    );
}
