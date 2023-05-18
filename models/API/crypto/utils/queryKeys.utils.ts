export const getCryptoListQueryKey = (): string => {
    return 'cryptoList';
};

export const getCryptoPriceQueryKey = (symbols: string[]): string => {
    return `cryptoPrice-${symbols.join()}`;
};
