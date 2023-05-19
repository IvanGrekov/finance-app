import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useIsCrypto } from 'hooks/assetsType.hooks';

export default function BalanceInfo(): JSX.Element {
    const isCrypto = useIsCrypto();

    return (
        <Stack spacing={2}>
            <Typography>Total Balance</Typography>
            <Stack>
                <Typography>2750 $</Typography>
                {isCrypto && <Typography>≈ 0.1 BTC</Typography>}
            </Stack>
        </Stack>
    );
}
