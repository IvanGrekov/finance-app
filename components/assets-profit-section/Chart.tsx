import { usePeriodFilterValue } from 'hooks/periodFilter.hooks';

export default function Chart(): JSX.Element {
    const value = usePeriodFilterValue();

    return <div>Chart for {value || 'all time'}</div>;
}
