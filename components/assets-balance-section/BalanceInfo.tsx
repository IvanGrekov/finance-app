import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useIsCrypto } from 'hooks/assetsType.hooks';

export default function BalanceInfo(): JSX.Element {
    const isCrypto = useIsCrypto();

    return (
        <Box>
            <Typography>Balance</Typography>
            <Typography>2750 $</Typography>
            {isCrypto && <Typography>≈ 0.1 BTC</Typography>}
        </Box>
    );
}
