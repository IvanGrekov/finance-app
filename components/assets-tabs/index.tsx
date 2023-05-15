'use client';

import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import { useSearchParams } from 'next/navigation';

import TabList from 'components/assets-tabs/TabList';
import TabPanels from 'components/assets-tabs/TabPanels';
import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsTabs';

export default function AssetsTabs(): JSX.Element {
    const searchParams = useSearchParams();
    const assetsTypeValue = searchParams.get(ASSETS_TYPE_SEARCH_PARAM_NAME) || '';

    return (
        <TabContext value={assetsTypeValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList />
            </Box>

            <TabPanels />
        </TabContext>
    );
}
