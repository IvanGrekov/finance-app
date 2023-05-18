import dayjs from 'dayjs';

export const formatDate = (date?: Date | string): string => {
    return dayjs(date).format('DD MMM YYYY');
};
