import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useRouter } from 'next/router';

import { PERIOD_FILTER_CONFIGS } from 'components/period-filter/constants';
import { PERIOD_FILTER_SEARCH_PARAM_NAME } from 'constants/periodFilter';
import { useGetUpdateSearchParams } from 'hooks/searchParams.hooks';

export default function PeriodFilters(): JSX.Element {
    const { query } = useRouter();

    const updateSearchParams = useGetUpdateSearchParams();

    const handleChange = (newValue: string): void => {
        updateSearchParams(PERIOD_FILTER_SEARCH_PARAM_NAME, newValue);
    };

    const currentValue = query[PERIOD_FILTER_SEARCH_PARAM_NAME] || '';

    return (
        <ButtonGroup variant="outlined">
            {PERIOD_FILTER_CONFIGS.map(({ value, name }) => (
                <Button
                    key={value}
                    onClick={(): void => handleChange(value)}
                    variant={value === currentValue ? 'contained' : 'outlined'}
                >
                    {name}
                </Button>
            ))}
        </ButtonGroup>
    );
}
