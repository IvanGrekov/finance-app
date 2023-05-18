import { useRouter } from 'next/router';

import { PERIOD_FILTER_SEARCH_PARAM_NAME } from 'constants/periodFilter';

export const usePeriodFilterValue = (): string => {
    const { query } = useRouter();

    const value = query[PERIOD_FILTER_SEARCH_PARAM_NAME];

    if (Array.isArray(value)) {
        return value.at(-1) || '';
    }

    return value || '';
};
