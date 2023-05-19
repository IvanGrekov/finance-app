import { PropsWithChildren } from 'react';

import Timeline from '@mui/lab/Timeline';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

export default function BalanceHistoryWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {children}
        </Timeline>
    );
}
