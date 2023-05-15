import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IBalanceInfoProps } from 'components/assets-balance-section/types';
import { useIsCrypto } from 'hooks/assetsTypes.hooks';

export default function BalanceInfo({ value }: IBalanceInfoProps): JSX.Element {
    const isCrypto = useIsCrypto();

    return (
        <Box>
            <Typography>Balance</Typography>
            <Typography>{value} $</Typography>
            {isCrypto && <Typography>{value} BTC</Typography>}
        </Box>
    );
}
