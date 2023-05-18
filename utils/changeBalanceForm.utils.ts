export const getRequiredAmountErrorMessage = (action = 'deposit'): string => {
    return `Please enter the amount you want to ${action}`;
};

export const getRequiredCurrencyErrorMessage = (action = 'deposit'): string => {
    return `Please select the currency you want to ${action}`;
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
