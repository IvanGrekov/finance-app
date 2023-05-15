import Stack from '@mui/material/Stack';

import BalanceActions from 'components/assets-balance-section/BalanceActions';
import BalanceInfo from 'components/assets-balance-section/BalanceInfo';
import { IBalanceInfoProps } from 'components/assets-balance-section/types';

export default function AssetsBalanceSection(props: IBalanceInfoProps): JSX.Element {
    return (
        <Stack>
            <BalanceInfo {...props} />
            <BalanceActions />
        </Stack>
    );
}
