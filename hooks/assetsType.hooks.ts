import { useRouter } from 'next/router';

import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { EAssetsType } from 'models/types/assetsType';

export const useAssetsTypeValue = (): string => {
    const { query } = useRouter();

    const value = query[ASSETS_TYPE_SEARCH_PARAM_NAME];

    if (Array.isArray(value)) {
        return value[0];
    }

    return value || '';
};

export const useIsCrypto = (): boolean => {
    return useAssetsTypeValue() === EAssetsType.CRYPTO;
};
