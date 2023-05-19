import Stack from '@mui/material/Stack';

import BalanceActions from 'components/assets-balance-section/BalanceActions';
import BalanceInfo from 'components/assets-balance-section/BalanceInfo';

export default function AssetsBalanceSection(): JSX.Element {
    return (
        <Stack justifyContent="space-between" height="100%">
            <BalanceInfo />
            <BalanceActions />
        </Stack>
    );
}
