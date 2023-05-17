// Cash Data
// interface IUserCashState {
//     balance: number;
//     history: IHistoryEvent[];
// }

// // Crypto Data
// interface ICryptoAssets {
//     // NOTE: key as a crypto coin id
//     [key: string]: number;
// }

// interface IUserCryptoState {
//     balance: ICryptoAssets;
//     history: IHistoryEvent[];
// }

// // Example of changing UserCryptoState
// const userCryptoState: IUserCryptoState = {
//     balance: {},
//     history: [],
// };

// const input: IHistoryCryptoEvent = {
//     assetId: 'bintocin asset id',
//     amount: 1,
//     type: EHistoryEventType.DEPOSIT,
// };

// if (input.type === EHistoryEventType.DEPOSIT) {
//     if (userCryptoState.balance[input.assetId] !== undefined) {
//         userCryptoState.balance[input.assetId] = 0;
//     }

//     userCryptoState.balance[input.assetId] += input.amount;
//     userCryptoState.history.push(input);
// }

// if (input.type === EHistoryEventType.WITHDRAW) {
//     if (userCryptoState.balance[input.assetId] !== undefined) {
//         userCryptoState.balance[input.assetId] = 0;
//     }

//     userCryptoState.balance[input.assetId] -= input.amount;
//     userCryptoState.history.push(input);
// }

// Endpoints
// NOTE: get states
// server.get('/user-cash-state');
// server.get('/user-crypto-state');

// NOTE: update cash state
// server.patch('/user-cash-state');
// as a data of req - IHistoryEvent
// as a server response - the whole IUserCashState

// NOTE: update crypto state
// server.patch('/user-crypto-state');
// as a data of req - IHistoryCryptoEvent
// as a server response - the whole IUserCryptoState

export {};
