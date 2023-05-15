import { EPeriodFilter } from 'models/types/periodFilter';

interface IPeriodFilerConfig {
    value: EPeriodFilter;
    name: string;
}

export const PERIOD_FILTER_CONFIGS: IPeriodFilerConfig[] = [
    {
        value: EPeriodFilter.ALL_TIME,
        name: 'All Time',
    },
    {
        value: EPeriodFilter.MONTH,
        name: '30 days',
    },
    {
        value: EPeriodFilter.WEEK,
        name: '7 days',
    },
    {
        value: EPeriodFilter.DAY,
        name: '1 Day',
    },
];
