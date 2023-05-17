export const getRequiredAmountErrorMessage = (): string => {
    return 'Please enter the amount you want to deposit';
};

export const getMinAmountErrorMessage = (): string => {
    return 'Please enter a positive number';
};

export const getMaxAmountErrorMessage = (maxValue: number): string => {
    return `You can't withdraw more than ${maxValue}`;
};
