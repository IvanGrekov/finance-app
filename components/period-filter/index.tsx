'use client';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useSearchParams } from 'next/navigation';

import { PERIOD_FILTER_CONFIGS } from 'components/period-filter/constants';
import { PERIOD_FILTER_SEARCH_PARAM_NAME } from 'constants/periodFilter';
import { useGetUpdateSearchParams } from 'hooks/searchParams.hooks';

export default function PeriodFilters(): JSX.Element {
    const searchParams = useSearchParams();

    const updateSearchParams = useGetUpdateSearchParams();

    const handleChange = (newValue: string): void => {
        updateSearchParams(PERIOD_FILTER_SEARCH_PARAM_NAME, newValue);
    };

    const currentValue = searchParams.get(PERIOD_FILTER_SEARCH_PARAM_NAME) || '';

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
