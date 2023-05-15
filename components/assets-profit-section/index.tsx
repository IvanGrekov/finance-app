import Stack from '@mui/material/Stack';

import Chart from 'components/assets-profit-section/Chart';
import ProfitInfo from 'components/assets-profit-section/ProfitInfo';
import PeriodFilters from 'components/period-filter';

export default function AssetsProfitSection(): JSX.Element {
    return (
        <Stack>
            <ProfitInfo />
            <PeriodFilters />
            <Chart />
        </Stack>
    );
}
