import { PropsWithChildren } from 'react';

import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { ETransactionType } from 'models/types/transaction';
import { getTransactonColor } from 'utils/transaction.utils';

interface IBalanceHistoryItemWrapperProps extends PropsWithChildren {
    type: ETransactionType;
    isLast: boolean;
}

export default function BalanceHistoryItemWrapper({
    type,
    isLast,
    children,
}: IBalanceHistoryItemWrapperProps): JSX.Element {
    const dotColor = getTransactonColor(type);

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color={dotColor} />
                {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            {children}
        </TimelineItem>
    );
}
