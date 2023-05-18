export const getRequiredAmountErrorMessage = (): string => {
    return 'Please enter the amount you want to deposit';
};

export const getMinAmountErrorMessage = (): string => {
    return 'Please enter a positive number';
};

export const getMaxAmountErrorMessage = (maxValue: number): string => {
    return `You can't withdraw more than ${maxValue}`;
};

type TGetAmountFormattedErrorMessage = (message?: string) => string | undefined;

export const getAmountFormattedErrorMessage: TGetAmountFormattedErrorMessage = (message) => {
    if (!message) {
        return undefined;
    }

    if (message.includes('NaN')) {
        return getRequiredAmountErrorMessage();
    }

    return message;
};
