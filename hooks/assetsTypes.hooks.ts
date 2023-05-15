import { useSearchParams } from 'next/navigation';

import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { EAssetsType } from 'models/types/assetsType';

export const useIsCrypto = (): boolean => {
    const searchParams = useSearchParams();

    return searchParams.get(ASSETS_TYPE_SEARCH_PARAM_NAME) === EAssetsType.CRYPTO;
};
