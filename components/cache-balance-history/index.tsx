import BalanceHistoryItemWrapper from 'components/balance-history-item-wrapper';
import BalanceHistoryWrapper from 'components/balance-history-wrapper';
import HistoryItemContent from 'components/cache-balance-history/HistoryItemContent';
import { MOCKED_CACHE_HISTORY } from 'components/cache-balance-history/constants';

export default function CacheBalanceHistory(): JSX.Element {
    return (
        <BalanceHistoryWrapper>
            {MOCKED_CACHE_HISTORY.map(({ id, type, amount, date }, i) => {
                const isLast = i === MOCKED_CACHE_HISTORY.length - 1;

                return (
                    <BalanceHistoryItemWrapper key={id} type={type} isLast={isLast}>
                        <HistoryItemContent type={type} amount={amount} date={date} />
                    </BalanceHistoryItemWrapper>
                );
            })}
        </BalanceHistoryWrapper>
    );
}
