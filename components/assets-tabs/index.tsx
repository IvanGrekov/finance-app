import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

import { ASSETS_TYPE_SEARCH_PARAM_NAME } from 'constants/assetsType';
import { useAssetsTypeValue } from 'hooks/assetsType.hooks';
import { useGetUpdateSearchParams } from 'hooks/searchParams.hooks';
import { EAssetsType } from 'models/types/assetsType';

export default function AssetsTabs(): JSX.Element {
    const value = useAssetsTypeValue();

    const updateSearchParams = useGetUpdateSearchParams();

    const handleChange = (_: React.SyntheticEvent, newValue: string): void => {
        updateSearchParams(ASSETS_TYPE_SEARCH_PARAM_NAME, newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange}>
                    <Tab label="Cash" value={EAssetsType.CASH} />
                    <Tab label="Crypto" value={EAssetsType.CRYPTO} />
                </TabList>
            </Box>
        </TabContext>
    );
}
