import { EHistoryEventType } from 'models/types/historyEvent';

export const getIsDeposit = (type: EHistoryEventType): boolean => {
    return type === EHistoryEventType.DEPOSIT;
};
