import { dehydrate, QueryClient } from '@tanstack/react-query';

import AssetsCryptoView from 'components/assets-crypto-view';
import AssetsPageContent from 'components/assets-page-content';
import AssetsTabs from 'components/assets-tabs';
import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { useIsCrypto } from 'hooks/assetsType.hooks';
import { getCryptoList } from 'models/API/crypto/services/getCryptoList';
import { getCryptoListQueryKey } from 'models/API/crypto/utils/queryKeys.utils';
import { IAppProps } from 'models/types/appProps';
import { EAssetsType } from 'models/types/assetsType';

interface IGetServerSidePropsInput {
    query: Record<string, string | string[]>;
}

export async function getServerSideProps({
    query,
}: IGetServerSidePropsInput): Promise<{ props: IAppProps }> {
    const queryClient = new QueryClient();
    const currentAssetsType = query[ASSETS_TYPE_SEARCH_PARAM_NAME];

    if (currentAssetsType === EAssetsType.CRYPTO) {
        await queryClient.prefetchQuery([getCryptoListQueryKey()], getCryptoList);
    }

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default function Assets(): JSX.Element {
    const isCrypto = useIsCrypto();

    return (
        <>
            <AssetsTabs />
            {isCrypto ? <AssetsCryptoView /> : <AssetsPageContent />}
        </>
    );
}
