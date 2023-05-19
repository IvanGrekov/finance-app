import Stack from '@mui/material/Stack';
import dynamic from 'next/dynamic';

import ProfitInfo from 'components/assets-profit-section/ProfitInfo';
import PeriodFilters from 'components/period-filter';

const Chart = dynamic(() => import('components/assets-profit-section/Chart'), { ssr: false });

export default function AssetsProfitSection(): JSX.Element {
    return (
        <Stack spacing={2}>
            <ProfitInfo />
            <PeriodFilters />
            <Chart />
        </Stack>
    );
}
