import { useSearchParams } from 'next/navigation';

import { PERIOD_FILTER_SEARCH_PARAM_NAME } from 'constants/periodFilter';

export const usePeriodFilterValue = (): string => {
    const searchParams = useSearchParams();

    return searchParams.get(PERIOD_FILTER_SEARCH_PARAM_NAME) || '';
};
