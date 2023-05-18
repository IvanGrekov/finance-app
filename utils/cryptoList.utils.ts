import { TApiCoinList, TCryptoList } from 'models/types/cryptoList';

export const formatCryptoList = (data?: TApiCoinList): TCryptoList => {
    if (!data) {
        return [];
    }

    return data.map((coin) => {
        const { Id, Name, FullName, ImageUrl } = coin.CoinInfo;
        const { PRICE, FROMSYMBOL } = coin.DISPLAY.USD;

        return {
            id: Id,
            name: Name,
            fullName: FullName,
            imageUrl: `https://www.cryptocompare.com${ImageUrl}`,
            price: PRICE,
            symbol: FROMSYMBOL,
        };
    });
};
