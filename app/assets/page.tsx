'use client';

import AssetsPageContent from 'components/assets-page-content';
import AssetsTabs from 'components/assets-tabs';

export default function Assets(): JSX.Element {
    return (
        <>
            <AssetsTabs />
            <AssetsPageContent />
        </>
    );
}
