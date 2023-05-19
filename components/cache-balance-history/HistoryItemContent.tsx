import TimelineContent from '@mui/lab/TimelineContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { ICacheHistoryEvent } from 'models/types/history';
import { formatDate } from 'utils/date.utils';
import { getIsDeposit } from 'utils/transaction.utils';

type THistoryItemContentProps = Pick<ICacheHistoryEvent, 'type' | 'amount' | 'date'>;

export default function HistoryItemContent({
    type,
    amount,
    date,
}: THistoryItemContentProps): JSX.Element {
    const theme = useTheme();

    const isDeposit = getIsDeposit(type);
    const color = isDeposit ? theme.palette.success.main : theme.palette.error.main;

    return (
        <TimelineContent>
            <Stack>
                <Typography color={color}>
                    {isDeposit ? '' : '-'}
                    {amount}$
                </Typography>
                <Typography variant="body2" color={theme.palette.grey[600]}>
                    {formatDate(date)}
                </Typography>
            </Stack>
        </TimelineContent>
    );
}
