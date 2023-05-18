import { useEffect } from 'react';

import AssetsPageContent from 'components/assets-page-content';
import useCryptoList from 'models/API/crypto/services/getCryptoList';
import { usePageLoading } from 'models/contexts/PageLoading';

export default function AssetsCryptoView(): JSX.Element {
    const { setIsLoading } = usePageLoading();
    const { isLoading } = useCryptoList();

    useEffect(() => {
        setIsLoading(isLoading);
    }, [setIsLoading, isLoading]);

    return <AssetsPageContent />;
}
